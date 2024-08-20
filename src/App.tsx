import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayot from "./layouts/RootLayot";

function App() {
 
  const rooter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayot />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
    </Route>
    )
  )

  return (
    
   
      
      <RouterProvider router={rooter} />
  
  );
}

export default App;
