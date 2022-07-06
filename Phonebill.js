function totalPhoneBill(CallandSMS){
 let Bill = CallandSMS.split(', ');
 let total = 0;
 for (i=0;i<Bill.length;i++) {
   if (Bill[i].startsWith("call")){
     total+=2.75;
   }else if(Bill[i].startsWith('sms')){
     total+=0.65;
}
}
 return "R" + total.toFixed(2);
}