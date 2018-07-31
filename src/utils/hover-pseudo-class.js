const CLASSNAME = 'hover'

function add (event) {
  event.target.classList.add(CLASSNAME)
}

function remove (event) {
  event.target.classList.remove(CLASSNAME)
}

document.body.addEventListener('touchstart', add)
document.body.addEventListener('touchend', remove)
document.body.addEventListener('touchcancel', remove)
