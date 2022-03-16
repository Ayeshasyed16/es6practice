const boggie=["Aliya","Saba","Neha","Priya"]
const addpassenger=(p,isbegin)=>(isbegin?boggie.unshift(p):boggie.push(p));
const removepassanger=(isbegin)=>(isbegin ? boggie.shift():boggie.pop());



