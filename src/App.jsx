
import Dashboard from './pages/dashboard/Dashboard'
import "@fontsource/ubuntu"; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Applications from './pages/Applications/Applications';
import Support from './pages/Support/Support';
const router = createBrowserRouter([
  {
    path: "/",
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
]);
function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
