
import './App.css'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import FlagDetails from './pages/FlagDetails'


function App() {
  let element = useRoutes([
  {
     path : '/',
     element : <Home />
  },
  {
    path : '/Country/:countryName',
    element : <FlagDetails />
  },
  {
    path : '*',
    element : <h1>Page not found</h1>
  }

  ])

return element;
  
}

export default App
