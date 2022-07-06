function enoughAirtime(airtimeUsage, airtimeAv){
    let Bill = airtimeUsage.split(",");
     let total = 0; 
     for (let i=0;i<Bill.length;i++) {
       if (Bill[i] =='call'){
         total+=1.88;
       } else if (Bill[i].startsWith('data')){
         total+=12;
       }else if (Bill[i].startsWith('sms')){
         total+=0.75;
       }
     }
     const sum = airtimeAv - total
     if(sum<0) return "R0.00";
     return "R" + sum.toFixed(2);
   }