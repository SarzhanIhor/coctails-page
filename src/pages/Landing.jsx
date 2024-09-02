import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import CoctailList from '../components/CoctailList'
import { QueryClient, useQuery } from '@tanstack/react-query';


const coctailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCoctailsQuery = (searchTerm) => {
  return {
    queryKey:["search", searchTerm || "all"],
    queryFn: async() => {
      const response = await axios.get(`${coctailSearchUrl}${searchTerm}`)
      return response.data.drinks
    }
  }
}

export const loader = (queryClient) => async ({request}) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("search") || ""
  await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm))
  return {searchTerm};
}

const Landing = () => {
  const {searchTerm} = useLoaderData()
  const {data:drinks} = useQuery(searchCoctailsQuery(searchTerm))
  return (
    <>
    <SearchForm searchTerm={searchTerm}/>
    <CoctailList drinks={drinks}/>
    </>
  )
}

export default Landing