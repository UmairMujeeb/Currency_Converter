#! /usr/bin/env node

import inquirer from "inquirer";

const Currency : any = {
    USD : 0.0036,
    EUR : 0.0033,
    SAR : 0.013,
    PKR : 1,  // base currency
    INR : .30,
    GBP : 0.0027,
};

let currencyConverter = await inquirer.prompt(
    [
        {
            name : "froM",
            type : "list",
            message : "Enter from Currency",
            choices : ["USD", "EUR", "SAR", "PKR", "INR", "GBP",]
        },
        {
            name : "TO",
            type : "list",
            message : "Enter TO Currency",
            choices : ["USD", "EUR", "SAR", "PKR", "INR", "GBP",]
        },
        {
            name : "Amount",
            type : "number",
            message : "Enter Your amount",
        }
    ]
);

let fromAmount = Currency[currencyConverter.froM];
let toAmount = Currency[currencyConverter.TO];
let amount = currencyConverter.Amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;

console.log(convertAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);