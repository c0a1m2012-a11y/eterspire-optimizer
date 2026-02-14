
function generate(data){

 return data.items.sort((a,b)=>(b.attack||0)-(a.attack||0))[0];

}

module.exports={generate}
