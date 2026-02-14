
const {Parser}=require("json2csv");

function toCSV(data){

 const p=new Parser();

 return p.parse(data);

}

module.exports={toCSV}
