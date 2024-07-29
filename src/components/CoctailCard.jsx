import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CoctailCard'


const CoctailCard = ({id, image, name, info, glass}) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className='img'/>
        <div className="footer">
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
          <Link to={`/coctail/${id}`} className='btn'>
            Details
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default CoctailCard