
function optimize(data,filters){

 let best=null;
 let score=0;

 data.items.forEach(item=>{

  if(filters.level && item.level>filters.level) return;

  let s=(item.attack||0)*(1+(item.crit||0));

  if(s>score){

   score=s;
   best=item;

  }

 });

 return {best,score};

}

module.exports={optimize}
