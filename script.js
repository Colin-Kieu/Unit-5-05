let number = 0
/* this sets "number" which is a variale to 0  */
document.getElementById('button').addEventListener('click', multiplication)
/* this will give the calculate button a function to do, so when the button is clicked it will complete the funtion as we have the event listener */
function multiplication () {
  number = document.getElementById('textbox').value
 /* this is our function, it takes the value that is put in the text box and will store it */
  number = number * number
 /* this is when it will take the number that is put into the box and will multiply it by itself to get the answer */
  alert(number)
}
/* the answer will show up using an alert box */
