import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";

const FormContainer = () => {
    const [page,setPage] = useState(0);
    const navigate = useNavigate();
    const handleNext = () =>{
        setPage(page+1)
        console.log(page);
        if(page==0)
            navigate("/address-info");
        else if(page==1)
            navigate("/review-submission");
        else if(page==2)
            navigate("/submission");
    }
    const handlePrev = () =>{
        setPage(page-1)
        console.log(page);
        if(page==2)
            navigate("/address-info");
        else if(page==1)
            navigate("/");
    }

  return (
    <>
    <img className="fixed -z-10 md:w-screen h-screen object-cover" src="https://cdn.forms.office.net/forms/images/neopages/template/tm56388197.png" alt="bg-img"/>
    <div className="flex justify-center">
        <div className="bg-white bg-opacity-70 w-[80%] md:w-1/3 h-auto">
            {/* {(page==0) && <PersonalInfo/>}
            {(page==1) && <AddressInfo/>}
            {(page==2) && <ReviewInfo/>} */}
            <Outlet/>
            <div className="flex justify-between">
                <button 
                  className="border border-black px-4 py-2 m-5 bg-blue-400 cursor-pointer" 
                  onClick={handlePrev}>
                    prev
                </button>
                <button 
                  className="border border-black px-4 py-2 m-5 bg-blue-400 cursor-pointer" 
                  onClick={handleNext}>
                    {page==2 ?"Submit":"next"}
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FormContainer