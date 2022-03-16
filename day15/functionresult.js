const getresult=(result)=>
{if(result>0 && result<=35)
{
    console.log("fail")
}
else if(result>35 && result<=56)
{
    console.log("pass")
}
else if(result>56 && result<=76)
{
    console.log("First Class")
}
else if(result>76 && result<=100)
{
    console.log("Distinction")
}
else
{
console.log("please enter correct marks between 0 to 100")
}};
console.log(getresult(58));
console.log(getresult(38));
console.log(getresult(98));
console.log(getresult(28));
console.log(getresult(100));