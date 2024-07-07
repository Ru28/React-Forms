import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";

const FormContainer = () => {
    const [page,setPage] = useState(0);
    const [isPrevDisable,setIsPrevDiable] = useState(true);
    const navigate = useNavigate();
    const handleNext = () =>{
        setPage(page+1)
        if(page==0){
            setIsPrevDiable(false);
            navigate("/address-info");
        }
        else if(page==1)
            navigate("/review-submission");
        else if(page==2)
            navigate("/submission");
    }
    const handlePrev = () =>{
        setPage(page-1)
        if(page==2)
            navigate("/address-info");
        else if(page==1){
            setIsPrevDiable(true);
            navigate("/");
        }
    }

  return (
    <>
    <img className="fixed -z-10 md:w-screen h-screen object-cover" src="https://cdn.forms.office.net/forms/images/neopages/template/tm56388197.png" alt="bg-img"/>
    <div className="flex justify-center">
        <div className="bg-white bg-opacity-70 w-[80%] md:w-1/3 h-auto">
            <Outlet/>
            <div className="flex justify-between">
                <button 
                  className={`border border-black px-4 py-2 m-5 bg-blue-400 cursor-pointer ${
                    isPrevDisable ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
                  disabled = {isPrevDisable} 
                  onClick={handlePrev}>
                    prev
                </button>
                <button 
                  className="border border-black px-4 py-2 m-5 bg-blue-500 hover:bg-blue-700 cursor-pointer" 
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