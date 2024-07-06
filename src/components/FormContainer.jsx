const FormContainer = () => {
  return (
    <>
    <img className="absolute -z-10 w-screen" src="https://cdn.forms.office.net/forms/images/neopages/template/tm56388197.png" alt="bg-img"/>
    <div className="flex justify-center">
        <div className="bg-white bg-opacity-70 w-1/3 h-screen">
            <div className="my-2 p-2">
                <h1 className="p-2 m-2 text-4xl text-bold flex justify-center">
                    Personal Information
                </h1>

                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">Name</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="name"/>
                </div>

                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">Email</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="email address"/>
                </div>

                <div className="p-2 m-1">
                    <h2 className="text-lg py-1">Mobile Number</h2>
                    <input className="p-2 my-2 w-full" type="number" placeholder="mobile number"/>
                </div>
            </div>
            {/* <div className="my-1 p-2">
                <h1 className="p-2 m-1 text-4xl text-bold flex justify-center">
                    Address Information 
                </h1>

                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">Address Line 1</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="Address Line 1"/>
                </div>

                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">Address Line 2</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="Address Line 2"/>
                </div>

                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">City</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="city"/>
                </div>
                
                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">State</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="state"/>
                </div>

                <div className="p-2 m-2">
                    <h2 className="text-lg py-1">Zip Code</h2>
                    <input className="p-2 my-2 w-full" type="text" placeholder="state"/>
                </div>
            </div> */}

            <div className="flex justify-between">
                <button className="border border-black px-4 py-2 m-5 bg-blue-400">prev</button>
                <button className="border border-black px-4 py-2 m-5 bg-blue-400">next</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FormContainer