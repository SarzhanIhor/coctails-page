import React from 'react'
import CoctailCard from './CoctailCard'
import Wrapper from '../assets/wrappers/CoctailList'


const CoctailList = ({drinks}) => {
  if (!drinks) {
    return (
      <h4 style={{textAlign: "center"}}>
        No matching coctails found
      </h4>
    )
  } 

  const formateDrinks = drinks.map(item => {
    const {idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb} = item
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass
    }
  })

  return (
    <Wrapper>
      {formateDrinks.map(item => {
        return <CoctailCard key={item.id} {...item}/>
      })}
    </Wrapper>
  )
}

export default CoctailList