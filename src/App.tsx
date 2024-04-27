import {RouterProvider} from "react-router-dom";
import router from "./router/router.tsx";
// import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
