document.addEventListener('DOMContentLoaded', start)

function start() {
  propeller()
  repaint()
}

// change innerHTML of doors to add wings

document.getElementById('doors').innerHTML = 'wings'

// delete one wheel

const deleteWheel = document.getElementsByClassName('wheel')[0]
deleteWheel.remove()

// target engine ID add class propellor

function propeller() {
  let propeller = document.getElementById('engine')
  propeller.classList.add('propeller')
}

// change style color of paint

function repaint() {
  let repaint = document.getElementById('paint')
  repaint.style.color = 'red'
}
