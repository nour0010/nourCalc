let display=document.getElementById('display');

function append(input)
{
    display.value +=input;

}
function clearappend()
{
display.value='';
}

function calc()
{
display.value = eval(display.value);

}
function appendAC()
{
    display.value= display.value.toString().slice(0,-1);
}
function appendop(op){
    console.log(display.value.length);
    if(display.value!='' && display.value[display.value.length-1] != '+' && 
        display.value[display.value.length-1] != '-'&&
        display.value[display.value.length-1] != '*'&&
        display.value[display.value.length-1] != '/'&&
        display.value[display.value.length-1] != '%'&&
        display.value[display.value.length-1] != '('&&
        display.value[display.value.length-1] != ')'
     )
    {
       display.value +=op;
    }
}