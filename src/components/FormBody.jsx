import FormContainer from "./FormContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThankYou from "./ThankYou";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import ReviewInfo from "./ReviewInfo";

const FormBody = () => {
  const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<FormContainer/>,
        children:[
            {
                path:"/",
                element:<PersonalInfo/>
            },
            {
                path:"/address-info",
                element:<AddressInfo/>
            },
            {
                path:"/review-submission",
                element:<ReviewInfo/>
            }
        ]
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