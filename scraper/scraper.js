const axios = require("axios");
const fs = require("fs");
const parseItems = require("./parser");

const WIKI_API =
"https://eterspire.wiki.gg/api.php?action=query&list=categorymembers&cmtitle=Category:Items&cmlimit=500&format=json";

async function run(){

console.log("Fetching item list...")

const res = await axios.get(WIKI_API);

const pages = res.data.query.categorymembers;

let items=[];

for(const page of pages){

const url =
`https://eterspire.wiki.gg/wiki/${page.title.replace(/ /g,"_")}`;

try{

const html =
await axios.get(url);

const parsed =
parseItems(html.data,page.title,url);

if(parsed) items.push(parsed);

}catch(e){

console.log("Failed:",page.title);

}

}

save(items);

updateVersion(items.length);

}

function save(items){

fs.writeFileSync(
"data/items.json",
JSON.stringify(items,null,2)
);

console.log("Saved items.json");

}

function updateVersion(count){

let versionPath="data/version.json";

let version={};

if(fs.existsSync(versionPath))
version=JSON.parse(fs.readFileSync(versionPath));

let v=version.version || "1.0.0";

let parts=v.split(".");

parts[2]++;

version={

version:parts.join("."),

lastUpdated:new Date().toISOString(),

itemCount:count,

source:"wiki"

};

fs.writeFileSync(versionPath,JSON.stringify(version,null,2));

}

run();
