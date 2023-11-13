
const fs = require("fs")

const AddPerson = (id , fn , ln , age , city)=>{
    const allData = loadData()

    // to never duolicate id ! 
    const dup = allData.filter((obj)=>{
        return obj.id == id 
    })
    
    if (dup.length == 0){    
        // push data to file
        allData.push({
            id:id,
            fname : fn,
            lname:ln,
            age:age,
            city:city
        })
        SaveData(allData)
    }
    else{
        console.log("ID is Duplicated ! ")
    }
}

// Delete Function 
const DeletePerson =(id)=>{
    const allData = loadData()
    const DataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    SaveData(DataToKeep)
}

// Read Data Form User By ID 
const ReadData = (id)=>{
    const allData = loadData()

    const ItemRead = allData.find((item)=>{
        return item.id == id
    })
    if(ItemRead){
        // console.log(ItemRead)
        let userid = ItemRead.id
        let userfn = ItemRead.fname
        let userln = ItemRead.lname
        console.log(userid +  " " + userfn + "  "  + userln + "\n")
        console.log("Sreaching Done ...")
    }
    else{
        console.log("Nop User With This ID !")
    }
}

// loadData From Json File 

const loadData = ()=>{
    try{
        const DataJson = fs.readFileSync("data_file.json").toString()
        return  JSON.parse(DataJson)
    }
    catch{
        return []
    }
}

const SaveData = (allData)=>{
    const SaveDataJson = JSON.stringify(allData)
    fs.writeFileSync("data_file.json" , SaveDataJson)
}

module.exports = {
    AddPerson,
    DeletePerson,
    ReadData
}