const ip = document.querySelector('#input');
const convertButton = document.querySelector('#convertButton');
const output = document.querySelector('#output');
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


convertButton.addEventListener('click', () => {
    if(!valid(ip.value))
    { 
        ip.value="Not a Correct Input";
      ip.style.color="red";
      op.value=""
     }
     else
    output.value = parseInt(ip.value, 2);
});
