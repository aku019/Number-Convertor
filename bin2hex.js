const ip = document.querySelector('#input');
const btn = document.querySelector('#convertButton');
const op = document.querySelector('#output');
function valid(x)
{
    var start=0;
  if(x[0]==='-')
  start+=1;
for(var i=start;i<x.length;i++)
{
    if((x[i]>='0'&&x[i]<='1'))
    continue;
    else
    return 0;
}
return 1;

}
btn.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    if(!valid(ip.value))
    { 
        ip.value="Not a Correct Input";
      ip.style.color="red";
      op.value=""
     }
     else
    op.value = parseInt(ip.value, 2).toString(16);
});
