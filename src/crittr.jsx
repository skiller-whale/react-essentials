import React from "react"
import ReactDOM from "react-dom"

import Datasource from './datasource'

// The raw data from the API is currently unused
const user = {
  name: "Jock Horsey",
  image: "http://i.pravatar.cc/150"
}

const crittrs = [
  {
    message: "Welcome to my Crittr",
    image: "http://placekitten.com/250/250",
    user: {
      avatar: "http://i.pravatar.cc/30",
      name: "John Smith"
    }
  },
  {
    message: "I love my puppy",
    image: "http://placepuppy.net/250/250",
    user: {
      avatar: "http://i.pravatar.cc/31",
      name: "Jane Williams"
    }
  },
  {
    message: "Cute!",
    image: "http://placekitten.com/290/290",
    user: {
      avatar: "http://i.pravatar.cc/32",
      name: "Matthew Jones"
    }
  }
]

const trending_topics = [
  "#ADogsLife",
  "#CatCall",
  "#BullsInChinaShops",
  "#HorsePlay",
  "#Gooseberries"
]

// Hard-coded sample page with data in place
const SiteDesign = <React.Fragment>
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <span className="navbar-brand">Crittr</span>
      </div>
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="search"/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-xs-2">
        <div style={{ padding: "15px" }}>
          <strong>Trending now:</strong>
        </div>
      </div>
      <div className="col-xs-2">
        <div className="panel panel-default">
          <div className="panel-body">
            #ADogsLife
          </div>
        </div>
      </div>
      <div className="col-xs-2">
        <div className="panel panel-default">
          <div className="panel-body">
            #CatCall
          </div>
        </div>
      </div>
      <div className="col-xs-2">
        <div className="panel panel-default">
          <div className="panel-body">
            #BullsInChinaShops
          </div>
        </div>
      </div>
      <div className="col-xs-2">
        <div className="panel panel-default">
          <div className="panel-body">
            #HorsePlay
          </div>
        </div>
      </div>
      <div className="col-xs-2">
        <div className="panel panel-default">
          <div className="panel-body">
            #Gooseberries
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <div className="panel panel-primary">
          <div className="panel-body">
            <h3>Search Results</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel panel-primary">
          <div className="panel-body">
            <h3>Recommended Crittrs</h3>
            <div className="carousel">
              <div className="carousel-inner">
                <div className="item">
                  <p>My fave kitten</p>
                  <img src="http://placekitten.com/250/250"/>
                  <h5>
                    <div className="media">
                      <div className="media-middle media-left">
                        <img className="media-object img-circle" src="http://i.pravatar.cc/33"/>
                      </div>
                      <div className="media-body media-middle">
                        Sarah Jones
                      </div>
                    </div>
                  </h5>
                </div>
                <div className="item active">
                  <p>My fave puppy</p>
                  <img src="http://placepuppy.net/250/250"/>
                  <h5>
                    <div className="media">
                      <div className="media-middle media-left">
                        <img className="media-object img-circle" src="http://i.pravatar.cc/34"/>
                      </div>
                      <div className="media-body media-middle">
                        Ali Far
                      </div>
                    </div>
                  </h5>
                </div>
              </div>
              <a className="left carousel-control" role="button">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" role="button">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-body">
            <h3>New Crittr</h3>
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="6" placeholder="My favourite crittr is..." />
              </div>
              <button type="submit" className="btn btn-default">Submit your crittr</button>
            </form>
          </div>
        </div>
        <div className="panel panel-primary">
          <div className="panel-body">
            <h3>Your Profile</h3>
            <h5>Jock Horsey</h5>
            <img className="img-circle" src="http://i.pravatar.cc/150"/>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="panel panel-primary">
          <div className="panel-body">
            <h3>Your Crittr Feed</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <p>Welcome to my Crittr</p>
                <img src="http://placekitten.com/250/250"/>
                <h5>
                  <div className="media">
                    <div className="media-middle media-left">
                      <img className="media-object img-circle" src="http://i.pravatar.cc/30"/>
                    </div>
                    <div className="media-body media-middle">
                      John Smith
                    </div>
                  </div>
                </h5>
              </li>
              <li className="list-group-item">
                <p>I love my puppy</p>
                <img src="http://placepuppy.net/250/250"/>
                <h5>
                  <div className="media">
                    <div className="media-middle media-left">
                      <img className="img-circle media-object" src="http://i.pravatar.cc/31"/>
                    </div>
                    <div className="media-body media-middle">
                      Jane Williams
                    </div>
                  </div>
                </h5>
              </li>
              <li className="list-group-item">
                <p>Cute!</p>
                <img src="http://placekitten.com/290/290"/>
                <h5>
                  <div className="media">
                    <div className="media-middle media-left">
                      <img className="img-circle media-object" src="http://i.pravatar.cc/32"/>
                    </div>
                    <div className="media-body media-middle">
                      Matthew Jones
                    </div>
                  </div>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</React.Fragment>

export default SiteDesign;
