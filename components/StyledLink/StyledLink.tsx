import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface StyledLinkProps extends LinkProps {
  children: string;
  isActive?: boolean;
}

const activeStyle = `text-pink-300 border-pink-400`;
const inactiveStyle = `text-white border-gray-600`;

const StyledLink: FC<StyledLinkProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  const style = isActive ? activeStyle : inactiveStyle;
  return (
    <Link className={`mb-0.5 pl-4 border-l ${style}`} {...props}>
      {children}
    </Link>
  );
};

export default StyledLink;
