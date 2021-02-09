const ip = document.querySelector('#input');
const btn = document.querySelector('#btn');
const op = document.querySelector('#output');
//const output = document.querySelector('#output-url');

function valid(x)
{
    var start=0;
  if(x[0]==='-')
  start+=1;
for(var i=start;i<x.length;i++)
{
    if((x[i]>='0'&&x[i]<='9')||(x[i]>='a'&&x[i]<='f'))
    continue;
    else
    return 0;
}
return 1;

}

btn.addEventListener('click', () => {
  //  if(((parseInt(ip.value, 16).toString(2)).padStart(8, '0'))NaN)
    if(!valid(ip.value))
    { 
        ip.value="Not a Correct Input";
      ip.style.color="red";
      op.value=""
     }
     else
    op.value = (parseInt(ip.value, 16).toString(2)).padStart(8, '0');
});
