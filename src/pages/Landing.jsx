import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import CoctailList from '../components/CoctailList'

const coctailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = 'margarita'
  const response = await axios.get(`${coctailSearchUrl}${searchTerm}`)
  // console.log(response);
  return {drinks: response.data.drinks, searchTerm};
}

const Landing = () => {
  const {searchTerm, drinks} = useLoaderData()
  // console.log(drinks);
  return (
    <>
    <SearchForm/>
    <CoctailList drinks={drinks}/>
    </>
  )
}

export default Landing