import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, HomeLayout, Landing, Error, SinglePageError, Coctail } from './pages'

import {loader as landingLoader} from './pages/Landing'

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
        errorElement: <SinglePageError/>
      }
    ]
  },
  
])

function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
