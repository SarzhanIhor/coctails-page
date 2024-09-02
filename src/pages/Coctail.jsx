import axios from 'axios'
import React from 'react'
import { Link, useLoaderData, Navigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CoctailPage'
import { useQuery } from '@tanstack/react-query'


const singleCoctailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const singleCoctailQuery = id => {
  return {
    queryKey:["coctail", id],
    queryFn: async() => {
      const {data} = await axios.get(`${singleCoctailUrl}${id}`)
      return data
    }
  }
}

export const loader = (queryClient) => async ({params}) => {
  const {id} = params
  // console.log(params);
  await queryClient.ensureQueryData(singleCoctailQuery(id))
  return {id}
}

const Coctail = () => {
  const {id} = useLoaderData()
  const {data} = useQuery(singleCoctailQuery(id))
  
  if (!data || !data.drinks) {
    return <Navigate to="/"/>
  }
  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstuctions: insctructions
  } = singleDrink

  const validIngridients = Object.keys(singleDrink)
    .filter(key => key.startsWith('strIngredient') && singleDrink[key] !== null)
    .map(key => singleDrink[key])

  // console.log(validIngridients);  

  return (
    <Wrapper>
      <header className="header">
      <Link to='/' className='btn'>Back to Home</Link>
      <h3>{name}</h3>
      </header>
      <div className="drink">
      <img src={image} alt={name} />
      <div className="drink-info">
        <p>
          <span className="drink-data">name:
          </span>{name}
        </p>
        <p>
          <span className="drink-data">category:
          </span>{category}
        </p>
        <p>
          <span className="drink-data">info:
          </span>{info}
        </p>
        <p>
          <span className="drink-data">glass:
          </span>{glass}
        </p>
        <p>
          <span className="drink-data">ingredients:
          </span>
          {validIngridients.map((item, index) => {
            return (
              <span className="ing" key={item}>
                {item} {index < validIngridients.length - 1 ? ',' : ''}
              </span>
            )
          })}
        </p>
        <p>
          <span className="drink-data">insctructions:
          </span>{insctructions}
        </p>
        <p></p>
      </div>
      </div>
    </Wrapper>
  )
}

export default Coctail