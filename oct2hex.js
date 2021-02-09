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
    if((x[i]>='0'&&x[i]<='7'))
    continue;
    else
    return 0;
}
return 1;
}

btn.addEventListener('click', () => {
    if(!valid(ip.value))
    { 
        ip.value="Not a Correct Input";
      ip.style.color="red";
      op.value=""
     }
    op.value = (parseInt(ip.value, 8).toString(16));
});
