const getperimeter=(arr)=>
{ 
    let sum=0;    
      for( let i=0; i<arr.length;i++)

        {
          sum=sum+arr[i];
        }
     return sum;
}
console.log(getperimeter([175,25,39,35,101]))