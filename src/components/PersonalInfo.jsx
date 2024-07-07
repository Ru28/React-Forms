import { useEffect, useRef } from "react";


const PersonalInfo = () => {
    const name = useRef(null);
    const email = useRef(null);
    const mobileNumber = useRef(null);
    const setPersonInfo=()=>{
            const personInfo={
                name:name?.current?.value,
                email:email?.current?.value,
                mobileNumber: mobileNumber?.current?.value
            }
            localStorage.setItem("person_info",JSON.stringify(personInfo));
            console.log(personInfo);
    }
        
    
    useEffect(()=>{
        const Info = JSON.parse(localStorage.getItem('person_info'));
        name.current.value=(Info) ? (Info.name): null;
        email.current.value=(Info) ? (Info.email): null;
        mobileNumber.current.value=(Info) ? (Info.mobileNumber):null;
    })
  return (
    <div className="my-2 p-2">
        <h1 className="p-2 m-2 text-4xl text-bold flex justify-center">
            Personal Information
        </h1>

        <div className="p-2 m-2">
            <h2 className="text-lg py-1">Name</h2>
            <input className="p-2 my-2 w-full" ref={name} type="text" onChange={setPersonInfo} placeholder="name"/>
        </div>

        <div className="p-2 m-2">
            <h2 className="text-lg py-1">Email</h2>
            <input className="p-2 my-2 w-full" ref={email} type="text" onChange={setPersonInfo} placeholder="email address"/>
        </div>

        <div className="p-2 m-1">
            <h2 className="text-lg py-1">Mobile Number</h2>
            <input className="p-2 my-2 w-full" ref={mobileNumber} type="number" onChange={setPersonInfo} placeholder="mobile number"/>
        </div>
    </div>
  )
}

export default PersonalInfo