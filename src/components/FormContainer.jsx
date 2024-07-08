import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";


const FormContainer = () => {
    const [page,setPage] = useState(0);
    const [isPrevDisable,setIsPrevDiable] = useState(true);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const validateAddressInfo = () => {
        const Info = JSON.parse(localStorage.getItem('address_info'))
        const address1=(Info) ? (Info.address1): null;
        const address2=(Info) ? (Info.address2): null;
        const city=(Info) ? (Info.city):null;
        const state=(Info) ? (Info.state):null;
        const zipcode=(Info) ?(Info.zipcode):null;
  
        let validationErrors = {};
          // Validate address1
        if (!address1 || address1.trim() === '') {
            validationErrors.address1 = 'Address 1 cannot be null or empty';
        }

        // Validate address2 (optional, skip validation if it's not required)
        if (address2 && address2.trim() === '') {
            validationErrors.address2 = 'Address 2 cannot be empty';
        }

        // Validate city
        if (!city || city.trim() === '') {
            validationErrors.city = 'City cannot be null or empty';
        }

        // Validate state
        if (!state || state.trim() === '') {
            validationErrors.state = 'State cannot be null or empty';
        }

        // Validate zipcode
        const zipcodeRegex = /^\d{5,6}$/;
        if (!zipcode || zipcode.trim() === '') {
            validationErrors.zipcode = 'Zipcode cannot be null or empty';
        } else if (!zipcodeRegex.test(zipcode)) {
            validationErrors.zipcode = 'Zipcode is not valid';
        }

        setErrors(validationErrors);
        setIsValid(Object.keys(validationErrors).length === 0);
    }

    const validateInfo = () => {
        const Info = JSON.parse(localStorage.getItem('person_info'));
        const name = Info ? Info.name : null;
        const email = Info ? Info.email : null;
        const mobileNumber = Info ? Info.mobileNumber : null; 

        
        let validationErrors = {};
  
        if (!name || name.trim() === '') {
          validationErrors.name = 'Name cannot be null or empty';
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || email.trim() === '') {
          validationErrors.email = 'Email cannot be null or empty';
        } else if (!emailRegex.test(email)) {
          validationErrors.email = 'Email is not valid';
        }
  
        // Mobile number validation (Indian mobile numbers)
        const mobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (!mobileNumber || mobileNumber.trim() === '') {
          validationErrors.mobileNumber = 'Mobile number cannot be null or empty';
        } else if (!mobileNumberRegex.test(mobileNumber)) {
          validationErrors.mobileNumber = 'Mobile number is not valid';
        }
  
        setErrors(validationErrors);
        setIsValid(Object.keys(validationErrors).length === 0);
      };
    
    const handleNext = () =>{
        if(page==0)validateInfo();
        if(page==1)validateAddressInfo();
        console.log(page,isValid);
        if(isValid){
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
            <div className="flex justify-center text-red-500">
                <div>
                    <p>{errors?.name}</p>
                    <p>{errors?.email}</p>
                    <p>{errors?.mobileNumber}</p>
                    <p>{errors?.address1}</p>
                    <p>{errors?.address2}</p>
                    <p>{errors?.city}</p>
                    <p>{errors?.state}</p>
                    <p>{errors?.zipcode}</p>
                </div>
            </div>
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