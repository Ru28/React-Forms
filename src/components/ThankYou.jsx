const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="text-2xl font-semibold mb-2">Thank You!</h1>
        <p className="text-gray-700 mb-4">
          Your form was successfully submitted.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
