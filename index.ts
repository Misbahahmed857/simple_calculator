#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\t Welcome To \'MisbahAhmed\' -CLI Simple Calculator\n ");

const answer= await inquirer.prompt([
{
    message:"Enter first number",
    type:"number",
    name:"firstNumber",
},
{
    message:"Enter second number",
    type:"number",
    name:"secondNumber",
},
{
    message:"Select one of the operator to perform operation.",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multiplication","Division"],
},
]);

//conditional statement

if(answer.operator==="Addition")

   { console.log(answer.firstNumber + answer.secondNumber);}

else if(answer.operator==="Subtraction")

   { console.log(answer.firstNumber - answer.secondNumber); }
    
else if(answer.operator==="Multiplication")

    { console.log(answer.firstNumber * answer.secondNumber);}

else if(answer.operator==="Division")

     { console.log(answer.firstNumber  /answer.secondNumber);}
     
 else{
    console.log("Please select valid operators");
 }  
   //make pkg.json file by writing npm init in cmd then make changes below main "type": "module",
//tsconfig.json file by writing tsc --init then make changes in  "target": "es2022","module": "NodeNext", "moduleResolution": "NodeNext"
//pkg-lock.json file is made and in pkg.json file get  "dependencies": { "inquirer": "^9.2.16" by  writing npm i inquirer and get node module folder from npmjs.com
       