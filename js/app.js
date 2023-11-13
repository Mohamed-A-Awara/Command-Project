// First Project 
const fs = require("fs")

// Part One
const person = {
    fname:"mohamed",
    lname:"ayman",
    age:22,
    city : "sohag",

}
// const personJson = JSON.stringify(person)
// fs.writeFileSync("PersonsData.json" , personJson)
// const readData = fs.readFileSync("PersonsData.json").toString()

// ***************** Convert read data to object ******************************/

// console.log(readData)
// const readObj = JSON.parse(readData)
// console.log(readObj)

 /*  Update Data */ 
person.fname = "Adel"
person.lname= "Ahmed"
person.age = 23
person.city= "cairo"

const personJson = JSON.stringify(person)
fs.writeFileSync("PersonsData.json" , personJson)
const readData = fs.readFileSync("PersonsData.json").toString()
const readObj = JSON.parse(readData)
console.log(readObj)

//  ************************** Second Project *********************/  
// const fs = require("fs")

const yargs = require("yargs")
const Data = require("./Data_Handle")
// yargs Command 

yargs.command({
    command : "add",
    describe:" To Add Person Data Into List ",
    builder:{
        id:{
            describe:"Enter Your ID  : ",
            demandOption:true,
            type:"number" 
        },
        fname:{
            describe:"Enter Your First Name : ",
            demandOption:true,
            type:"string" 
        },
        lname:{
            describe:"Enter Your Last Name : ",
            demandOption:true,
            type:"string" 
        },
        age:{
            describe:"Enter Your Age : ",
            demandOption:true,
            type:"string" 
        },
        city:{
            describe:"Enter Your City : ",
            demandOption:true,
            type:"string" 
        }
    },
    handler: (obj)=>{
        console.log("Item Add To List")
        Data.AddPerson(obj.id , obj.fname , obj.lname , obj.age , obj.city)
    }
})

// Delete Command

yargs.command({
    command:"delete",
    describe:"To Delete Person From File",
    handler:(obj)=>{
        console.log("Person Was Deleted ")
        Data.DeletePerson(obj.id)
    }
})

// Raed Data
yargs.command({
    command:"read",
    describe:"Read Item By ID ",
    builder:{
        id:{
            describe:" User Id ",
            demandOption:true,
            type:"number"
        }
    },
    handler : (userID)=>{
        console.log("Sreaching ...")
        Data.ReadData(userID.id)
    }
}) 
yargs.parse()