import React, { useState } from 'react'

function Currency() {


    const[amount,setAmount]=useState(0);
    const[currency,setCurrency]=useState("");


    const handlechange=(e)=>{
        setAmount(e.target.value);
    }
    const handlecurrency = (e) => {
        const currentCurrency = e.target.value;
        setCurrency(currentCurrency);
    
        let convertedAmount = amount;
    
        if (currentCurrency === 'usd') {
          convertedAmount = amount * 0.012; // Conversion rate for INR to USD
        } else if (currentCurrency === 'pak') {
          convertedAmount = amount * 3; // Conversion rate for INR to PAK
        }
    
        setAmount(convertedAmount);
    };
    

  return (
    <div>
      <label htmlFor="Amount">Amount</label>
      <input type="text" name="amount" value={amount} id="amount" onChange={handlechange}  />
      <select name="currency" id="currency" value={currency}  onChange={handlecurrency} defaultValue="">
        <option value="" disabled>select</option>
        <option value="inr">inr</option>
        <option value="usd">usd</option>
        <option value="pak">pak</option>
      </select>
    </div>
  )
}

export default Currency
