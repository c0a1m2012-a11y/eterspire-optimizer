
const cron=require("node-cron");
const {exec}=require("child_process");

cron.schedule("0 0 * * 0",()=>{

 console.log("Weekly sync");

 exec("node wikiSync.js");

});
