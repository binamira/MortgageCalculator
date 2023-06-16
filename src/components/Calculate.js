import React from "react";
import Button from "@mui/material/Button";



export default function Calculate(props) {

  //destructuring the click handle
  const {handleClick}=props

  return (
    //The button that will calculate the mortgage
    <Button
      className="button"
      onClick={handleClick}
     
      variant="contained"
      color="success"
    >
      Calculate
    </Button>
  );
}
