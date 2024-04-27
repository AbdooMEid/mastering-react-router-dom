import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-[1px] rounded-lg py-2 border-gray-600
      focus:border-[#149eca] shadow-md focus:outline-none
      focus:ring-1 focus:ring-[#149eca] text-md px-3 w-full"
      {...rest}
    />
  );
};

export default Input;