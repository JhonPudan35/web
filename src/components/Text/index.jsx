import React from "react";

const sizeClasses = {
  txtGriffyRegular14: "font-griffy font-normal",
  txtGriffyRegular24: "font-griffy font-normal",
  txtHabibiRegular16: "font-habibi font-normal",
  txtGriffyRegular12: "font-griffy font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtHindKochiBold12: "font-bold font-hindkochi",
  txtGalindoRegular12: "font-galindo font-normal",
  txtHabibiRegular24: "font-habibi font-normal",
  txtJacquesFrancoisRegular24: "font-jacquesfrancois font-normal",
  txtDamion48: "font-damion font-normal",
  txtHindKochiBold36: "font-bold font-hindkochi",
  txtInterRegular24: "font-inter font-normal",
  txtHindKochiBold16: "font-bold font-hindkochi",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
