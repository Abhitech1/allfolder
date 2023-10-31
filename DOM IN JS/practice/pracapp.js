const incrementButton = document.getElementById("increment")
incrementButton.addEventListener("click", () => {
  const counter = document.getElementById("counter")
  const next = Number(counter.innerText) + 1
  counter.innerText = next.toString()
})



const decrementButton = document.getElementById("decrement")
decrementButton.addEventListener("click", () => {
  const counter = document.getElementById("counter")
  var next = Number(counter.innerText) - 1 
  >0  ? Number(counter.innerText) - 1:0
  counter.innerText = next.toString()
})