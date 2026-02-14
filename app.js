let items=[]
let currentBuild={}

fetch("data/items.json")
.then(r=>r.json())
.then(data=>{

items=data

populate()

})

function populate(){

items.forEach(item=>{

let option=document.createElement("option")

option.text=item.name

option.value=item.attack

if(item.slot=="weapon")
weapon.append(option)

if(item.slot=="armor")
armor.append(option)

if(item.slot=="ring")
ring.append(option)

})

}

function runSimulation(){

let w=Number(weapon.value)
let a=Number(armor.value)
let r=Number(ring.value)

let total=w+a+r

simResult.innerText="DPS: "+total

currentBuild={weapon:w,armor:a,ring:r}

}

function runOptimizer(){

let level=Number(level.value)

let best=items
.filter(i=>i.level<=level)
.sort((a,b)=>b.attack-a.attack)[0]

optimizerResult.innerText=
"Best: "+best.name+" Power: "+best.attack

}

function searchItems(){

let term=searchBox.value.toLowerCase()

let results=items.filter(i=>
i.name.toLowerCase().includes(term)
)

searchResults.innerHTML=

results.map(i=>

`<div>${i.name} — ${i.attack}</div>`

).join("")

}

function exportJSON(){

let data=

JSON.stringify(currentBuild,null,2)

download("build.json",data)

}

function exportCSV(){

let data=

Object.entries(currentBuild)
.map(([k,v])=>`${k},${v}`)
.join("\n")

download("build.csv",data)

}

function download(name,text){

let blob=new Blob([text])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download=name

a.click()

}
