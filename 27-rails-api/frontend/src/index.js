console.log("hello world");

const API = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    renderAnimals();
    // TODO: more?
})

function addAnimal() {
  fetch(`${API}/animals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ....
    })
  }).then(res => res.json())
  .then(data => {
    if (data.errors) {
      // TODO: Have a part of the HTML to display errors. Maybe a ul.
      // Put some stuff in there.
    } else {
      // TODO: Render my beautiful new pupper.  
    }
  })
}


function renderAnimals() {
  fetch(`${API}/animals`)
    .then(res => res.json())
    .then(console.log)
}
