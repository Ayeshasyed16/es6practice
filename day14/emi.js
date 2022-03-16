const getsi=(p,n,r)=>(p*n*r)/100;
const getemi=(p,n,r)=>(p+getsi(p,n,r))/(n*12);
console.log(getemi(500000,5,12));