
import Dashboard from './pages/dashboard/Dashboard'
import "@fontsource/ubuntu"; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applications from './pages/Applications/Applications';
import Support from './pages/Support/Support';
import Login from './pages/login/login';
import MyCredentials from './pages/MyCredentials/MyCredentials';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/dash",
    element: <Dashboard/>,
  },
  {
    path: "/applications",
    element: <Applications/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
  {
    path: "/MyCredentials",
    element: <MyCredentials/>,
  },

]);
function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
