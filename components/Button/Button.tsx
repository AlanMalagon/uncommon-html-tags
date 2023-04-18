import { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return (
    <button
      className="mt-6 p-2 rounded bg-gradient-to-r from-pink-500 to-rose-500 
      text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/50 
      hover:scale-105 transition-transform hover:bg-gradient-to-l 3xl:text-2xl 3xl:p-4 3xl:mt-10"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
