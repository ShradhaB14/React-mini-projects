import { createBrowserRouter} from 'react-router-dom'
import App from '../App' 
import Counter from '@/Components/Counter'
import User from '@/Components/User';
import { Home } from '@/Components/Home';
import Login from '@/Components/Login';
const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Home/>},
    {path: 'about', element: <Counter/>},
    {path: 'contact', element: <User/>},
  ],
  },
  {
    path: 'login',
    element: <Login/>
  }
])
export default router;