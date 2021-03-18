let number = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  number = document.getElementById('textbox').value

  number = number * number
  
  alert(number)
}