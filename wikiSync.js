
const fs=require("fs");

async function sync(){

 console.log("Pulling wiki...");

 // replace with real scraper logic

 const data={
  version:new Date().toISOString(),
  items:[],
  classes:[],
  skills:[],
  monsters:[]
 };

 fs.writeFileSync("data/wiki.json",JSON.stringify(data,null,2));

 console.log("Sync complete");

}

sync();
