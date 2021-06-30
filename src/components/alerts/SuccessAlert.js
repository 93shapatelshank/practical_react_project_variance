import React from "react";
import { useHistory } from "react-router-dom";

function SuccessAlert({ openAlert, reload = true, type, redirectPath }) {
  const history = useHistory();
  let title = "";
  let message = "";
  
  if(type === "newRegister" ){
    title = "User Register Successfully";
    message = "Now, Please Login to explore your dashboard for user listing.";
  } else if (type === "newPasswordUpdated"){
    title = "Password Reset Successfully";
    message = "Now, Please login to your account with new password.";
  }

  if (openAlert) {
    document
      .querySelector("#modal-account-verified-control")
      .classList.remove("hidden");
  }

  function closeModal() {
    document
      .querySelector("#modal-account-verified-control")
      .classList.add("hidden");
    if (reload) {
      if(redirectPath !== "" && redirectPath !== undefined){
        history.push(redirectPath);
      }
    }
  }

  return (
    <div
      className="hidden fixed z-10 inset-0 overflow-y-auto"
      id="modal-account-verified-control"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-800 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-customGreen"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 uppercase font-medium text-gray-900"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                   {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 pt-3 pb-5 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full bg-green-800 text-white px-3 py-2 font-semibold	uppercase tracking-wide hover:bg-green-800"
              onClick={closeModal}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessAlert;
