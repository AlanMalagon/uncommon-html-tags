import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface StyledLinkProps extends LinkProps {
  children: string;
}

const StyledLink: FC<StyledLinkProps> = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

export default StyledLink;
