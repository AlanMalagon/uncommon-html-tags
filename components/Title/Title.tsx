import React, { FC, ReactNode } from "react";

type TitleVariant = "h1" | "h2" | "h3";

const Title: FC<{ variant?: TitleVariant; children: ReactNode }> = ({
  variant = "h1",
  children,
}) => {
  const Variant = variant;

  return (
    <Variant
      data-size={variant}
      className={`
        project-name 
        my-2 
        data-[size=h3]:text-2xl 
        data-[size=h2]:text-3xl 
        data-[size=h1]:text-4xl
      `}
    >
      {children}
    </Variant>
  );
};

export default Title;
