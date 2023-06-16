import "./styles.css";
import $ from "jquery";
import React from "react";
import Input from "./components/Input";
import Calculate from "./components/Calculate";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Nav from "./components/Nav";

export default function App() {

  //hooks for every input area
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [homeValue, setHomeValue] = useState();
  const [downpayment, setDownpayment] = useState();
  const [hoa, setHoa] = useState();
  const [years, setYears] = useState();
  const [insurance, setInsurance] = useState();
  const [tax, setTax] = useState();

  //updates the state of the generated result
  const [resultData, setResultData] = useState();

  //the handle change functions that will update the state everytime there is a change

  const handleLoanChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterestRate(e.target.value);
  };
  const handleHomeChange = (e) => {
    setHomeValue(e.target.value);
  };
  const handleDownpaymentChange = (e) => {
    setDownpayment(e.target.value);
  };
  const handleHoaChange = (e) => {
    setHoa(e.target.value);
  };
  const handleYearChange = (e) => {
    setYears(e.target.value);
  };
  const handleInsurance = (e) => {
    setInsurance(e.target.value);
  };
  const handleTaxChange = (e) => {
    setTax(e.target.value);
  };


  const apiKey = process.env.REACT_APP_API_KEY;

  function handleCalculatorClick() {

    //linking the Mortgage Calculator API
    $.ajax({
      method: "GET",
      url:
        "https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=" +
        loanAmount +
        "&interest_rate=" +
        interestRate +
        "&duration_years=" +
        years +
        "&home_value=" +
        homeValue +
        "&downpayment=" +
        downpayment +
        "&monthly_hoa=" +
        hoa +
        "&annual_property_tax=" +
        tax +
        "&annual_home_insurance=" +
        insurance,






      headers: { "X-Api-Key": apiKey },
      contentType: "application/json",
      success: function (result) {
        console.log(result);


        const resultValuesArray = Object.values(result);
        console.log(resultValuesArray);

        //updates the resultData hook
        setResultData(resultValuesArray);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      }
    });
  }

  return (

    <div className="App">
      <Nav />

      <Input
        //values
        loan={loanAmount}
        interest={interestRate}
        homeValue={homeValue}
        downpayment={downpayment}
        hoa={hoa}
        amountOfYears={years}
        insurance={insurance}
        tax={tax}

        //change handlers  
        onLoanChange={handleLoanChange}
        onInterestChange={handleInterestChange}
        onHomeValueChange={handleHomeChange}
        onDownChange={handleDownpaymentChange}
        onHOAChange={handleHoaChange}
        onYearChange={handleYearChange}
        onInsuranceChange={handleInsurance}
        onTaxChange={handleTaxChange}


      />
      <Calculate handleClick={handleCalculatorClick} />

      {/* card for the generated calculation */}

      <div className="cardContainer">

      {/* maps through the items of the generated calculation */}
        {resultData && resultData.map((item, index) => (
          <Box sx={{ minWidth: 275 }} key={index}>
            <Card className="card" variant="outlined">
              <CardContent>
                {typeof item === 'object' ? (
                  <>
                   {/* during the first mapping, the title will be set to "Monthly Payment" */}
                   
                    {index === 0 ? (
                      <Typography variant="h4" component="div">Monthly Payment</Typography>
                    ) : (
                      <Typography variant="h4" component="div">Annual Payment</Typography>
                    )}
                    <Typography variant="body2">Total: {item.mortgage}</Typography>
                    <Typography variant="body2">Mortgage: {item.mortgage}</Typography>
                    <Typography variant="body2">Property Tax: {item.property_tax}</Typography>
                    <Typography variant="body2">HOA: {item.hoa}</Typography>
                    <Typography variant="body2">Annual Home Insurance: {item.annual_home_ins}</Typography>
                  </>
                ) : (
                  <div>

                    <Typography variant="h5" component="div">Total Interest Paid </Typography>
                    <Typography variant="body1">{item}</Typography>
                  </div>
                )}
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Box>

        ))}
      </div>













    </div>
  );
}
