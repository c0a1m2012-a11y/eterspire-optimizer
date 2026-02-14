
function simulate(build){

 let avg=build.attack*(1+build.crit*0.5);

 return {dps:avg};

}

module.exports={simulate}
