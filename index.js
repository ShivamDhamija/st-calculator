
/*
var ip = document.getElementById("ip");
var equal = document.getElementById("equal");

ip.addEventListener("keyup", function(event)
{
  var value = ip.value;

  if(value && event.keyCode === 13 )
  {
    //function of cal
  }
})

equal.addEventListener("click", function(event)
{
  var value = ip.value;

  if(value )
  {
      //function of cal
  }
})
*/

let screen = document.getElementById('ip');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
