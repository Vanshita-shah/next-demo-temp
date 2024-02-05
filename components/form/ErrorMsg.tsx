import React from "react";

const ErrorMsg = ({ error }: { error: string }) => {
  return <p className="text-red-500  text-right ">{error}</p>;
};

export default ErrorMsg;

// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ErrorMsg = ({ error }: { error: string }) => {
//   // Show toast with error message
//   const notify = () => toast.error(error);

//   // Call notify when component is mounted
//   React.useEffect(() => {
//     notify();
//   }, []);

//   return <ToastContainer />;
// };

// export default ErrorMsg;
