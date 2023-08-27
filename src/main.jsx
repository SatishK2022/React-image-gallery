import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ImageGallary from './ImageGallary'
import Error from './Error'
import ImageDetails from './ImageDetails'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <ImageGallary />,
    errorElement: <Error />,
  },
  {
    path: '/photos/:id',
    element: <ImageDetails />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
