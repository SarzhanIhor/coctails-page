import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, HomeLayout, Landing, Error, SinglePageError, Coctail, NewsLetters } from './pages'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {loader as landingLoader} from './pages/Landing'
import {loader as singleCoctailLoader} from './pages/Coctail'
import {action as newsLettersAction} from './pages/NewsLetters'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5
}
}
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "coctail/:id",
        element: <Coctail/>,
        errorElement: <h2>There was an error...</h2>,
        loader: singleCoctailLoader(queryClient)
      },
      {
        path: "newsletters",
        element: <NewsLetters/>,
        action: newsLettersAction
      },
    ]
  },
  
])

function App() {
  
  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
  )
}

export default App
