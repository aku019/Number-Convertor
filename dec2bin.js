const ip = document.querySelector('#input');
const btn = document.querySelector('#btn');
//  const decode64=document.querySelector('#decode-64');
const op = document.querySelector('#output');

function valid(x)
{
    var start=0;
  if(x[0]==='-')
  start+=1;
for(var i=start;i<x.length;i++)
{
    if((x[i]>='0'&&x[i]<='9'))
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
    op.value = Number(ip.value).toString(2);
    
});
