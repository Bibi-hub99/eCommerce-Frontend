import {RouterProvider} from 'react-router-dom'
import ContextProvider from './contextAPI'
import routes from './routes'

function App(){


  return (

    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>

  )

}

export default App