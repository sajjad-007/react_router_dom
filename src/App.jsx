import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Contact from "./pages/contact/Contact";
import RootLayout from "./layout/RootLayout";
import Error from "./layout/error/Error";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
          <Route path="*" element={<Error/>}/>
      </>
    )
  )
  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
