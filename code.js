let arr = [2,3,4,5,2,2,3,4,1,3];
var a = arr[0];
var b = 0;
function qwerty() {
    for (var i = 0; i < arr.length; i++)
    {
        if (a != arr[i])
        {
            b++;
        }
        else
        {
            a = arr[i];
            b = 0;
        }
    }
    alert(b);
}