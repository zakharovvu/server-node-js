
const h1 = document.getElementById('h1')
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
const reset = document.getElementById('reset')

fetch('https://zakharov-test.herokuapp.com/inc')
      .then(response => response.json())
      .then(data => h1.innerHTML = `Count: ${data}`)


inc.addEventListener('click', () => {
    fetch('https://zakharov-test.herokuapp.com/inc')
      .then(response => response.json())
      .then(data => h1.innerHTML = `Count: ${data}`)
})

dec.addEventListener('click', () => {
    fetch('https://zakharov-test.herokuapp.com/dec')
      .then(response => response.json())
      .then(data => h1.innerHTML = `Count: ${data}`)
})

reset.addEventListener('click', () => {
  fetch('https://zakharov-test.herokuapp.com/reset')
    .then(response => response.json())
    .then(data => h1.innerHTML = `Count: ${data}`)
})

