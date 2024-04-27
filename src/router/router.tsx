import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../Pages/Layout.tsx";
import HomePage from "../Pages/Home.tsx";
import Contact from "../Pages/Contact.tsx";
import AboutPage from "../Pages/About.tsx";
import LayoutPage from "../Pages/Learn/Layout.tsx";
import QuickStart from "../Pages/Learn/LearnHome.tsx";
import ThinkingInReactPage from "../Pages/Learn/ThinkingInReact.tsx";
import InstallationPage from "../Pages/Learn/Installation.tsx";
import ContributePage from "../Pages/Contribute.tsx";
import LoginPage from "../Pages/Login.tsx";
import ProtectedRoute from "../components/auth/ProtectedRoute.tsx";
import ErrorHandler from "../components/Errors/ErrorHandler.tsx";
import PageNotFound from "../components/Errors/PageNotFound.tsx";

const isLoggedIn: boolean = true;
const userDate : {email : string} | null = isLoggedIn ? {email : "email@gmail.com"} : null;

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path={"/"} element={<Layout/>} errorElement={<ErrorHandler/>}>
      <Route index element={<HomePage/>}/>
      <Route path={"contact"} element={<Contact/>}/>
      <Route path={"about"} element={<AboutPage/>}/>
      <Route path={"contribute"}  element={<ProtectedRoute isAllowed={isLoggedIn} redirectPath={"/login"} data={userDate} >
        <ContributePage/>
      </ProtectedRoute>}/>
      <Route path={"login"} element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath={"/contribute"} data={userDate}>
        <LoginPage/>
      </ProtectedRoute>}/>
    </Route>

    {/*  Learn Layout*/}
    <Route path={"/learn"} element={<LayoutPage/>}>
      <Route index element={<QuickStart/>}/>
      <Route path={"thinking-in-react"} element={<ThinkingInReactPage/>}/>
      <Route path={"installation"} element={<InstallationPage/>}/>
    </Route>

    <Route path={"*"} element={<PageNotFound/>} />
  </>
));

export default router;