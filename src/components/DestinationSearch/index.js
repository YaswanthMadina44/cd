import {Component} from 'react'

class DestinationSearch extends Component{
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  render (
    <li>
      <img src={imgUrl} alt="search icon" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationSearch
