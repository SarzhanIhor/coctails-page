import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, HomeLayout, Landing } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: "about",
        element: <About/>
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
