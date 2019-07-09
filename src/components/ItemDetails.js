import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.scss'
import { connect } from 'react-redux'
import { fetchDetails } from '../actions'

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
      <div className="container">
        <div className="card mb-4 shadow-sm tenantCard">
          <div className="card-header">
            <div className="float-md-left">
              <h4 className="my-0 font-weight-normal">{item.name}</h4>
            </div>
            <div className="float-md-right">
              <button onClick={() => {this.props.history.goBack()}} className="btn btn-secondary">Back</button>
              &nbsp;
              <Link to={'/'} className="btn btn-secondary">Home</Link>
            </div>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              <img src={item.thumbnail} alt={item.name} className="personPicBig"/>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li><span>Age:</span> {item.age}</li>
              <li><span>Weight:</span> {item.weight}</li>
              <li><span>Height:</span> {item.height}</li>
              <li><span>Hair color:</span> {item.hair_color}</li>
              <li><span>Professions:</span>
                <ul className="detailsList">
                  {item.professions.map((profession, key) => (
                    <li key={key}><Link key={key}
                                        to={'/?filter=' + encodeURIComponent(profession)}>{profession}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><span>Friends:</span>
                <ul className="detailsList">
                  {item.friends.map((friend, key) => (
                    <li key={key}><Link key={key} to={'/?filter=' + encodeURIComponent(friend)}>{friend}</Link></li>
                  ))}
                </ul>
              </li>
            </ul>
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



