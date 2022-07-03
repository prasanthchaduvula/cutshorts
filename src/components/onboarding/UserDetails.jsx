import React from "react";

function UserDetails({handleCurrentScreen}){
  return(
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div>
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">Welcome! First things first...</h2>
        <p className="mt-2 text-center text-xs font-medium text-gray-400">
          You can always change them later
        </p>
      </div>
      <div className="mt-8">
        <div className="bg-white py-8 px-4 sm:px-10">
          <form className="space-y-6" onSubmit={() => handleCurrentScreen(2)}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Steve Jobs"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
                Display Name
              </label>
              <div className="mt-1">
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  placeholder="Steve"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => handleCurrentScreen(2)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Workplace
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>

  )
}

export default UserDetails