import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, HomeLayout, Landing, Error, SinglePageError, Coctail, NewsLetters } from './pages'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {loader as landingLoader} from './pages/Landing'
import {loader as singleCoctailLoader} from './pages/Coctail'
import {action as newsLettersAction} from './pages/NewsLetters'

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
        action: newsLettersAction
      },
    ]
  },
  
])

function App() {
  
  return (
  <>
    {/* <ToastContainer position='top-center' autoClose={2000}/> */}
    <RouterProvider router={router}/>
  </>
  )
}

export default App
