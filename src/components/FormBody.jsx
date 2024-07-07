import FormContainer from "./FormContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThankYou from "./ThankYou";

const FormBody = () => {
  const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<FormContainer/>,
    },
    {
        path:"/submission",
        element:<ThankYou/>
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default FormBody