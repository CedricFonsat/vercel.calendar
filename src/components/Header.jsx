import React from "react";

const Header = ({photo , email}) => {
  return (
    <div className="flex font-sans">
      <form className="flex-auto p-6">
        <div className="flex space-x-4 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
               // fill="blue" 
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-xl">{email}</p>
            <img
              loading="lazy"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white ml-4"
              src={photo}
            //   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            ></img>
          </div>
        </div>
        <p className="text-sm text-slate-700">
          welcome to calendar !!!
        </p>
      </form>
    </div>
  );
};

export default Header;
