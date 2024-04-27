import {Link, useLocation} from "react-router-dom";


interface IProps{
  statusCode ?: number;
  errorMsg ?: string;
}
const ErrorHandler = ({statusCode = 500 , errorMsg = "Internal Server"} : IProps) => {
  const {pathname} = useLocation()
  return (
    <div className={"flex flex-col  items-center fixed inset-0"}>
      <svg
        className={"max-w-56 text-[#149ace]"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12" y2="16"/>
      </svg>
      <h2 className={"text-2xl"}><span>{statusCode}</span> - {errorMsg}</h2>
      <p className={"text-3xl"}>Something went wrong</p>
      <div className={"flex items-center justify-center space-x-4 my-4"}>
        <Link to={"/"} className={"bg-[#149ace] p-2.5 rounded-md  inline-block text-xl "} >Home</Link>
        <Link to={pathname} className={"bg-[#149ace] p-2.5 rounded-md  inline-block text-xl "} reloadDocument>Refresh</Link>
      </div>
    </div>
  );
};

export default ErrorHandler;