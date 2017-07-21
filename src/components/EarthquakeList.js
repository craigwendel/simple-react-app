import React, {Component} from 'react'
import moment from 'moment'

export default class EarthquakeList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      earthquakes: []
    }
  }

  componentWillMount() {
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
      .then(response => response.json())
      .then((json) => {
        let earthquakes = json.features
        this.setState({earthquakes: earthquakes})
      })
    }

  render() {
    return (
      <div className="all-earthquakes">
        {this.state.earthquakes.map((feature) => <div className="col-sm-6" key={feature.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{feature.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {feature.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(feature.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {feature.geometry.coordinates}</p>

              <a href={feature.properties.url} className="card-link">USGS Event Link</a>
            </div>
          </div>
        </div>)}
      </div>
    )
  }
}
