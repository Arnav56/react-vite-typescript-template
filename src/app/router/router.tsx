//Create your Own Router
import MainLayout from "../layouts/MainLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { Home, About, Login, PageNotFound } from "./pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login/:userid" element={<Login />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
