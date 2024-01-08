const Button = ({name, handleChange}) => {
  return(
    <button 
        className={`text-${name}-600px px-4 py-2 font-semibold bg-white rounded-full`} onClick={() => handleChange(name)}
      >{name.toUpperCase()}</button>
  );
};

export default Button;