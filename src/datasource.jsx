class Datasource {
  subscribe_to(tag, callback) {
    console.log(`Subscribed to ${tag}`)
  }
  unsubscribe_from(tag) {
    console.log(`Unsubscribed from ${tag}`)
  }
}

export default Datasource
