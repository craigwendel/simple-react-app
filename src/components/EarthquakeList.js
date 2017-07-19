import React, {Component} from 'react'
import moment from 'moment'
import earthquakes from '../data/earthquakes'

export default class EarthquakeList extends Component {
  render() {
    return (
      <div className="all-earthquakes">
        {earthquakes.features.map((feature) => <div className="col-sm-6" key={feature.id}>
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
