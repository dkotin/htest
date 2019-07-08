import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/listItem.css'
import { connect } from 'react-redux'
import { applyPopulationFilter, fetchDetails, fetchPopulation } from '../actions'

class ItemDetails extends React.PureComponent {

  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchDetails(id)
  }

  render () {
    const { item } = this.props

    if (item === undefined) {
      this.props.history.replace('/not-found')
      return null
    }

    if (!item) return null

    return (
      <div className="card mb-4 shadow-sm tenantCard" style={{ minWidth: 300, maxWidth: 300 }}>
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
    )
  }

}
export default connect(
  state => ({
    item: state.person
  }),
  dispatch => ({
    fetchDetails: (id) => dispatch(fetchDetails(id))
  })
)(ItemDetails)



