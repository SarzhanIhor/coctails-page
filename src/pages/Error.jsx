import React from 'react'
import Wrapper from '../assets/wrappers/Error'
import { Link, useRouteError } from 'react-router-dom'
import img from "../assets/not-found.svg"


const Error = () => {
    const error = useRouteError()
    // console.log(error);
    if (error.status === 404) {
        return <Wrapper>
            <div>
                <img src={img} alt="Not Found" />
                <h3>Ohh!</h3>
                <p>
                    We cannot seem to find page you are looking for...
                </p>
                <Link to="/">Back Home</Link>
            </div>
        </Wrapper>
    }
  return (
    <Wrapper>
        <h3>
            Something was wrong
        </h3>
    </Wrapper>
  )
}

export default Error