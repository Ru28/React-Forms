import AddressInfo from "./AddressInfo"
import PersonalInfo from "./PersonalInfo"


const ReviewInfo = () => {
  return (
     <>
      <PersonalInfo/>
      <AddressInfo/>
      <p className="text-red-500 flex justify-center text-lg font-semibold">please review all form field Information</p>
     </>
  )
}

export default ReviewInfo;