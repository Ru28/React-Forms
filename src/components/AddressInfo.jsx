import { useEffect, useRef } from 'react'

const AddressInfo = () => {
    const address1 = useRef(null);
    const address2 = useRef(null);
    const city = useRef(null);
    const state = useRef(null);
    const zipcode = useRef(null);

    const setAddressInfo=()=>{
        const addressInfo={
            address1:address1?.current?.value,
            address2:address2?.current?.value,
            city: city?.current?.value,
            state: state?.current?.value,
            zipcode: zipcode?.current?.value
        }
        localStorage.setItem("address_info",JSON.stringify(addressInfo));
    }

    useEffect(()=>{
        const Info = JSON.parse(localStorage.getItem('address_info'))
        address1.current.value=(Info) ? (Info.address1): null;
        address2.current.value=(Info) ? (Info.address2): null;
        city.current.value=(Info) ? (Info.city):null;
        state.current.value=(Info) ? (Info.state):null;
        zipcode.current.value=(Info) ?(Info.zipcode):null;
    })

  return (
    <div className="my-1 p-2">
            <h1 className="p-2 m-1 text-4xl text-bold flex justify-center">
                Address Information 
            </h1>

            <div className="p-2 m-2">
                <h2 className="text-lg py-1">Address Line 1</h2>
                <input className="p-2 my-2 w-full" ref={address1} type="text" onChange={setAddressInfo} placeholder="Address Line 1"/>
            </div>

            <div className="p-2 m-2">
                <h2 className="text-lg py-1">Address Line 2</h2>
                <input className="p-2 my-2 w-full" ref={address2} type="text" onChange={setAddressInfo} placeholder="Address Line 2"/>
            </div>

            <div className="p-2 m-2">
                <h2 className="text-lg py-1">City</h2>
                <input className="p-2 my-2 w-full" ref={city} type="text" onChange={setAddressInfo} placeholder="city"/>
            </div>
            
            <div className="p-2 m-2">
                <h2 className="text-lg py-1">State</h2>
                <input className="p-2 my-2 w-full" ref={state} type="text" onChange={setAddressInfo} placeholder="state"/>
            </div>

            <div className="p-2 m-2">
                <h2 className="text-lg py-1">Zip Code</h2>
                <input className="p-2 my-2 w-full" ref={zipcode} type="text" onChange={setAddressInfo} placeholder="zip code"/>
            </div>
        </div>
  )
}

export default AddressInfo