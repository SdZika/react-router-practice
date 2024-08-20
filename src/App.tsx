import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayot from "./layouts/RootLayot";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

function App() {
 
  const rooter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayot />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
    </Route>
    )
  )

  return (
    
   
      
      <RouterProvider router={rooter} />
  
  );
}

export default App;
