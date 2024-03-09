function Input(given)
{
    var g = document.getElementById('ans');
    g.value +=given;
}
function Answer()
{
    var val1 = document.getElementById('ans').value;
    var val2 = eval(val1);
    document.getElementById('ans').value = val2;
}
function AllClear()
{
    var ip = document.getElementById('ans');
    ip.value='';
}
function Delete()
{
    var ev = document.getElementById('ans');
    ev.value = ev.value.slice(0,-1);
}
