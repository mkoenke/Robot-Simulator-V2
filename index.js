document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
});


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    const arrowLeft = "left"
    addLiToUl(arrowLeft)
  } else if (e.key === "ArrowRight") {
    const arrowRight = "right"
    addLiToUl(arrowRight)
  } else if (e.key === "ArrowUp") {
    const arrowUp = "up"
    addLiToUl(arrowUp)
  } else if (e.key === "ArrowDown") {
    const arrowDown = "down"
    addLiToUl(arrowDown)
  }
}); 

function addLiToUl(keypress){
  const li = document.createElement("li")
  const ul = document.querySelector("#moves-container")
  li.textContent = keypress
  ul.append(li)
}

const ul = document.querySelector("#moves-container")
const moveButton = document.querySelector("#move-button")
// moveButton.addEventListener("click", function(){
//   moveChild = ul.firstElementChild
//   const direction = moveChild.textContent
//   move(direction)
//   moveChild.remove()
// })

// we were missing the edge case of if there was no li, so can add in 
// if (ul.children[0]) { rest of the code }

ul.addEventListener("click", event => {
  if (event.target.tagName === "LI") {
    event.target.remove()
  } 
})

//without timeout, to just move all directions in list

// moveButton.addEventListener("click", function() {
//   const list = ul.querySelectorAll("li")
//   list.forEach(item => {
//     const direction = item.textContent
//       move(direction)
//       item.remove()
//   })
// } )


moveButton.addEventListener("click", function() {
  const list = ul.querySelectorAll("li")
  list.forEach((item, index) => {
    const direction = item.textContent
    setTimeout(function(){
      move(direction)
      item.remove()
    }
    , 500 * (index +1)
    );
    
  })
} )
// had exact code written without index and looked to solution to find the missing part to set the interval


// set interval
moveButton.addEventListener("click", function(){
  const moveInterval = setInterval(function(){
    let li = ul.querySelector("li")
    if(li) {
       let liText = li.textContent
    move(liText)
    li.remove()
    }
    else {
      clearInterval(moveInterval)
    }
  }, 500)
})