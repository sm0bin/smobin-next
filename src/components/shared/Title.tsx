import React from "react";

interface TitleProps {
  heading: string;
  subHeading: string;
}

const Title: React.FC<TitleProps> = ({ heading, subHeading }) => {
  return (
    <>
      <h2 className="font-bold text-4xl text-center font-title">{heading}</h2>
      <h3 className="font-semibold text-2xl text-center">{subHeading}</h3>
    </>
  );
};

export default Title;
