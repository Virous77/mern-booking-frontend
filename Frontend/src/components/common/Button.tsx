import React from "react";

type ButtonProps = {
  buttonName: string;
  className: string;
  onClick: () => void;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  buttonName,
  className,
  onClick,
  loading,
}) => {
  return (
    <button className={className} disabled={loading} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
