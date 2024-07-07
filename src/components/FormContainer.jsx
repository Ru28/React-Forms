import { useState } from "react"
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";

const FormContainer = () => {
    const [page,setPage] = useState(0);
    
    const handleNext = () =>{
        setPage(page+1)
    }
    const handlePrev = () =>{
        setPage(page-1)
    
    }

  return (
    <>
    <img className="fixed -z-10 md:w-screen h-screen object-cover" src="https://cdn.forms.office.net/forms/images/neopages/template/tm56388197.png" alt="bg-img"/>
    <div className="flex justify-center">
        <div className="bg-white bg-opacity-70 w-[80%] md:w-1/3 h-auto">
            {page==0 && <PersonalInfo/>}
            {page==1 && <AddressInfo/>}
            <div className="flex justify-between">
                <button 
                  className="border border-black px-4 py-2 m-5 bg-blue-400 cursor-pointer" 
                  onClick={handlePrev}>
                    prev
                </button>
                <button 
                  className="border border-black px-4 py-2 m-5 bg-blue-400 cursor-pointer" 
                  onClick={handleNext}>
                    next
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FormContainer