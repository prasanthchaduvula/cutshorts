import React from "react";

function WorkspaceDetails({handleCurrentScreen}){
  return(
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div>
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">Let's setup a home for all your work</h2>
        <p className="mt-2 text-center text-xs font-medium text-gray-400">
          You can always create another workspace later
        </p>
      </div>

      <div className="mt-8">
        <div className="bg-white py-8 px-4 sm:px-10">
          <form className="space-y-6" onSubmit={() => handleCurrentScreen(3)}>
            <div>
              <label htmlFor="workspaceName" className="block text-sm font-medium text-gray-700">
                Workspace Name
              </label>
              <div className="mt-1">
                <input
                  id="workspaceName"
                  name="workspaceName"
                  type="text"
                  placeholder="Eden"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="workspaceUrl" className="block text-sm font-medium text-gray-700">
                Workspace URL <span>(optional)</span>
              </label>
              <div className="mt-1 flex items-center justify-center">
              <span className="border text-center px-3 py-2 text-xs text-gray-400 bg-gray-100">www.eden.com/</span>
                <input
                  id="workspaceUrl"
                  name="workspaceUrl"
                  type="text"
                  placeholder="Steve"
                  required
                  className="appearance-none block w-full px-3 py-2 border-r border-t border-b border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={() => handleCurrentScreen(3)}
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

export default WorkspaceDetails