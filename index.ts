#! /usr/bin/env node
import inquirer from "inquirer";

let balance=10000;
let pinCode=1234; 

//Making avariable
let answer= await inquirer.prompt(
    [
        {
            name:"Pin",
            message:"Enter Your Pincode",
            type:"number"
        }
    ]
)




//Using if and telling that if the pincode is correct than execute following block  of code.

if(answer.Pin === pinCode){
    console.log("Correct Pin Code");
let actions= await inquirer.prompt(
    [
        {
            name:"action",
            message:"Please Select an Option",
            type:"list",
         choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]
);



//Using if and telling that if someone want to withdraw the ammont  than execute following block  of code.

if (actions.action === "Withdraw") {
    let amounts= await inquirer.prompt(
        [
            {
                name:"Amount",
                message:"Please Enter a Amount",
                type: "number"
        
            }
        ]
    )
  //making a variable my balace and using assinging operator.
  let MyBalance= balance-= amounts.Amount;
  // using if and telling that if someone enter the ammont out of present ammount in account then print following message.
  if(MyBalance<0){
    console.log("Your balance is insufficient");
  }else{
    console.log("Your Remaining balance is ", MyBalance);
    
  }
//else if someone want to check the balance then print the following code.
}else if(actions.action === "Check Balance"){
    console.log("Your Current Balance is", balance);



//if someone  want to use fastCash.
    
}else if (actions.action  === "Fast Cash") {
    let SelectAmount= await inquirer.prompt(
        [
            {
                name:"availableAmount",
                message:"Please Choose Amount",
                type:"list",
                choices:[2000,5000,10000]
            }
            
        ]
    )
    let MyBalance= balance-= SelectAmount.availableAmount;
  if(MyBalance<0){
    console.log("Your balance is insufficient");
  }else{
    console.log("Your Remaining balance is ", MyBalance);
    
  }
}
}




else{
    console.log("Incorrect pin");
    
};