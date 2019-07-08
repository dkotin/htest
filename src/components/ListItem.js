import React from 'react';
import { Link } from 'react-router-dom';
import "./../listItem.css"


class ListItem extends React.PureComponent {

  render () {
    const {item} = this.props

    return (
      <div className="card mb-4 shadow-sm tenantCard" style={{display: 'inline-block', minWidth: 300, maxWidth: 300}}>
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{item.name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <img src={item.thumbnail} alt={item.name} style={{maxWidth: 100, maxHeight: 100}}/>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li><span>Age:</span> {item.age}</li>
            <li><span>Weight:</span> {item.weight}</li>
            <li><span>Height:</span> {item.height}</li>
            <li><span>Hair color:</span> {item.hairColor}</li>
            <li><span>Professions:</span> {item.professionsNumber}</li>
            <li><span>Friends:</span> {item.friendsNumber}</li>
          </ul>



          <div className="app__item-btn">
            <Link className="btn btn-lg btn-block btn-outline-primary" to={`/details/${item.id}`}>More details</Link>
          </div>

        </div>
      </div>
    )
  }

}

export default ListItem
