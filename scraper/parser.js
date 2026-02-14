const cheerio = require("cheerio");

module.exports=function(html,title,url){

const $=cheerio.load(html);

let stats={

id:title.toLowerCase().replace(/ /g,"_"),

name:title,

slot:getSlot(title),

attack:getStat($,"Attack"),

defense:getStat($,"Defense"),

crit:getStat($,"Crit"),

level:getStat($,"Level"),

tier:getTier($),

class:"all",

source:url

};

return stats;

}

function getStat($,name){

let text=$(`td:contains("${name}")`).next().text();

return Number(text)||0;

}

function getSlot(title){

if(title.includes("Sword")) return "weapon";

if(title.includes("Armor")) return "armor";

if(title.includes("Ring")) return "ring";

return "unknown";

}

function getTier($){

let tier=$(`td:contains("Tier")`).next().text();

return tier||"common";

}
