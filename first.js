
let n=parseInt(prompt("enter the value between 1 and 1000000"));
if((n >= 1) &&( n <= 1000000))
{
    
    let sum=0
    for(let i=1;i<=n;i++)
    {
        sum=sum+i
    }
    alert("sum of up to " + n + "is" + sum )
}
else 
{
    alert("ivalid number")
}
