import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, HomeLayout, Landing, Error, SinglePageError, Coctail, NewsLetters } from './pages'

import {loader as landingLoader} from './pages/Landing'
import {loader as singleCoctailLoader} from './pages/Coctail'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader,
        errorElement: <SinglePageError/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "coctail/:id",
        element: <Coctail/>,
        errorElement: <SinglePageError/>,
        loader: singleCoctailLoader
      },
      {
        path: "newsletters",
        element: <NewsLetters/>,
      },
    ]
  },
  
])

function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
