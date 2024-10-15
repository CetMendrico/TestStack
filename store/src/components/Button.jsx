import React from 'react';
import clsx from 'clsx';

const Button = ({ name, onClick, className }) => {
  return (
    <div>
    <button onClick={onClick} className={clsx(className, "py-2 px-3 border rounded-md")}>{name}</button>
    </div>
  )
}

export default Button;
