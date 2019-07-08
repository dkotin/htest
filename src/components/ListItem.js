import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/listItem.scss'

class ListItem extends React.PureComponent {

  render () {
    const { item } = this.props
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{item.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              <img src={item.thumbnail} alt={item.name} className="personPic"/>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li><span>Age:</span> {item.age}</li>
              <li><span>Weight:</span> {item.weight}</li>
              <li><span>Height:</span> {item.height}</li>
              <li><span>Hair color:</span> {item.hair_color}</li>
              <li><span>Professions:</span> {item.professions.length}</li>
              <li><span>Friends:</span> {item.friends.length}</li>
            </ul>

            <div>
              <Link className="btn btn-lg btn-block btn-outline-primary" to={`/details/${item.id}`}>More details</Link>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default ListItem
