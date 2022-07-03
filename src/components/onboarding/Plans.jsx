import React, { useState } from "react";
import personFill from "../../assets/media/images/person-fill.svg";
import personIcon from "../../assets/media/images/person.svg";
import peopleIcon from "../../assets/media/images/people.svg";
import peopleFill from "../../assets/media/images/people-fill.svg";

function Plans({handleCurrentScreen}){
  const [selected, setSelected] = useState(1)

  return(
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div>
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">How are you planning to use Eden</h2>
        <p className="mt-2 text-center text-xs font-medium text-gray-400">
        We will streamline your setup experience accordingly
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <div 
          className={`bg-white w-40 py-6 px-2 shadow sm:rounded-lg sm:px-4 border cursor-pointer ${selected === 1 && "border-indigo-500" }`}
          onClick={() => setSelected(1)}
        >
          <img src={`${selected === 1 ? personFill : personIcon }`} alt="person" className="h-5 w-auto"/>
          <p className="font-semibold text-gray-900 mt-6">For myself</p>
          <p className="mt-2 text-xs font-semibold text-gray-400">Write better, Think more clearly. Stay organized</p>
        </div>
        <div 
          className={`bg-white w-40 py-6 px-2 shadow sm:rounded-lg sm:px-4 ml-12 border cursor-pointer ${selected === 2 && "border-indigo-500" }`}
          onClick={() => setSelected(2)}
          >
          <img src={`${selected === 2 ? peopleFill : peopleIcon }`} alt="person" className="h-5 w-auto"/>
            <p className="font-semibold text-gray-900 mt-6">With my team</p>
            <p className="mt-2 text-xs font-semibold text-gray-400">Wikis, docs, tasks & projects, all in one place </p>
          </div>
      </div>
      <div className="py-8 px-4 sm:px-10">
        <button
          type="submit"
          onClick={() => handleCurrentScreen(4)}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Workplace
        </button>
      </div>
    </div>
  )
}

export default Plans