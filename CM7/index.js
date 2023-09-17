//NPM Tutorial

const validator=require("email-validator");

const value=validator.validate("testmail.com");

console.log(value);

