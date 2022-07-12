let arr =[1,-33,4.5,5,-99];
let a=0;
let sum =0;
let count =0;
function avg(a){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            sum += arr[i];
            count++; 
        }   
    }
    a=sum/count;
    return a;
}
console.log(arr);
const Average = avg(a);
console.log(`Average of negative numbers are ${Average}`);