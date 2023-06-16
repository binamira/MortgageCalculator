import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function Input(props) {
  const {
    interest,
    loan,
    homeValue,
    downpayment,
    hoa,
    amountOfYears,
    insurance,
    tax,
    onInterestChange,
    onLoanChange,
    onHomeValueChange,
    onDownChange,
    onHOAChange,
    onYearChange,
    onInsuranceChange,
    onTaxChange
  } = props;



  return (
    <Box component="form" noValidate autoComplete="off">
      {/* required */}
      <div className="interestRateArea">
        <Typography variant="h6">
          *Interest Rate{" "}
          <span role="img" aria-label="money emoji">
            💸
          </span>{" "}
        </Typography>
        <TextField
          type="number"
          min="0"
          value={interest}
          onChange={onInterestChange}
          color="success"
          id="outlined-basic"
          label="Interest Rate"
          variant="outlined"
        />
        {interest < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
        
      </div>
      <Divider id="interestDivider" className="divider" />
      <div className="LoanInput">
        <Typography variant="h6">
          *Loan Amount{" "}
          <span role="img" aria-label="money emoji">
            💰
          </span>{" "}
        </Typography>
        <TextField

          type="number"
          min="0"
          value={loan}
          onChange={onLoanChange}
          color="success"
          id="outlined-basic"
          label="Loan Amount"
          variant="outlined"
        />
        {loan < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
      </div>
      <Divider className="divider" />
      <Typography variant="body2">or</Typography>

      <Divider className="divider" />
      <div className="homeValueAndDown">
        <Typography variant="h6">
          *Home Value and Downpayment{" "}
          <span role="img" aria-label="money emoji">
            🏠👇
          </span>{" "}
        </Typography>
        <TextField
          className="homeValueAndDownTextArea"
          type="number"
          min="0"
          value={homeValue}
          onChange={onHomeValueChange}
          color="success"
          id="outlined-basic"
          label="Home Value"
          variant="outlined"
        />
        {homeValue < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}

        <Typography variant="body2">and</Typography>
        <TextField
          className="homeValueAndDownTextArea"
          type="number"
          min="0"
          value={downpayment}
          onChange={onDownChange}
          color="success"
          id="outlined-basic"
          label="Downpayment"
          variant="outlined"
        />
        {downpayment < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
      </div>

      {/* optional */}

      <div className="optionalInput">
        <Typography variant="h6">
          Optional Values
          <span role="img" aria-label="money emoji">
            🤷‍♀️
          </span>{" "}
        </Typography>

        <TextField
          className="optionalTextField"
          type="number"
          min="0"
          value={hoa}
          onChange={onHOAChange}
          color="success"
          id="outlined-basic"
          label="Monthly HOA"
          variant="outlined"
        />
        {hoa < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
        <TextField
          className="optionalTextField"
          type="number"
          min="0"
          value={amountOfYears}
          onChange={onYearChange}
          color="success"
          id="outlined-basic"
          label="Duration of Years"
          variant="outlined"
        />
        {amountOfYears < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
        <TextField
          className="optionalTextField"
          type="number"
          min="0"
          value={tax}
          onChange={onTaxChange}
          color="success"
          id="outlined-basic"
          label="Annual Property Tax"
          variant="outlined"
        />
        {tax < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
        <TextField
          className="optionalTextField"
          type="number"
          min="0"
          value={insurance}
          onChange={onInsuranceChange}
          color="success"
          id="outlined-basic"
          label="Annual Homeowner Insurance Bill"
          variant="outlined"
        />
        {insurance < 0 && <Typography class="warningText" variant="caption"><p>enter positive number</p></Typography>}
      </div>
    </Box>
  );
}


