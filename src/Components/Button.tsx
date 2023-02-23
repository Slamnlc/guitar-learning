import React, {ButtonHTMLAttributes, FC} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  extraClass?: string
}

const Button: FC<ButtonProps> = ({text, extraClass, ...props}) => {
  const className = extraClass ? `btn ${extraClass}` : "btn"
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;
