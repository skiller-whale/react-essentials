import React from "react"
import ReactDOM from "react-dom"

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

// Hard-coded sample page with data in place
const SiteDesign = <React.Fragment>
  <div className="container">
    <h1>Crittr</h1>
    <div className="row">
      <div className="col-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <h3>Your Profile</h3>
            <h5>Jock Horsey</h5>
            <img className="img-circle" src="http://i.pravatar.cc/150"/>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="panel panel-default">
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
