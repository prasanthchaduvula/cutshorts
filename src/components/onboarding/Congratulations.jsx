import React from "react";
import finalCheckIcon from "../../assets/media/images/finalcheck.png";

function Congratulations(){
  return(
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="mt-12">
        <img
          className="mx-auto h-16 w-auto"
          src={finalCheckIcon}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">Congratulations, Eren!</h2>
        <p className="mt-4 text-center text-sm font-medium text-gray-400">
          You have completed the onboarding, you can start using Eden!
        </p>
      </div>

      <div className="py-8 px-4 sm:px-10">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Launch Eden
        </button>
      </div>
    </div>
  )
}

export default Congratulations