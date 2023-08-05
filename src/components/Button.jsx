import React from "react";

const Button = ({ styles }) => {
  const handleButtonClick = () => {
    // Open the link in a new window
    window.location.href = "https://fixal.seaquid.com/booknow.php";
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleButtonClick}
    >
      Book Now
    </button>
  );
};

export default Button;
