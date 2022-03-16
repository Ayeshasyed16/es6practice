const getperimeter=(arr)=>
{ 
    let sum=0;    
      for( let i=0; i<arr.length;i++)

        {
          sum=sum+arr[i];
        }
     return sum;
};
const getfencingcost=(arr,layers,costperfoot)=>
{
    const fencingcost=getperimeter(arr)*layers*costperfoot;
    return fencingcost;

};
console.log(getfencingcost([15,6,22,19,9,8,6,10,9,8,13,10],4,20));