let Fernando = ("Hello")
let say = ", thank you for having your time to look at my portfolio project"
  console.log(Fernando + say)



// Current Year
let yr = new Date()
  let year = yr.getFullYear()
    document.getElementById("year").outerHTML = year


// Mouse Hover - change background color
const sent = document.querySelector("#MsgSent")
  sent.addEventListener("mouseover", () =>{
    sent.style.backgroundColor = "#9e3641"
      if(sent.addEventListener("mouseout", () =>{ 
        sent.style.backgroundColor = ""
      })){
  }});

// Mouse Hover - Changes text 
const element = document.getElementById("MsgSent")
  element.onmouseover = () =>{
    element.innerText = "Send it"

  element.onmouseout = () =>{
    element.innerText = "Send Message"
  }}


// When click, alert pops up
const notify = document.querySelector("#MsgSent")
  let me = ("Your message has been sent. Thank you!")
  notify.addEventListener("click",() =>{
    alert(me)
  })

// When the heart icon is click, the number goes up by one
let number = 0
let count = document.getElementById('heart')
let incrementor = document.getElementById('up')
  incrementor.addEventListener('click', () =>{
    number++
    count.textContent = number.toString()
    // changes color when the heart icon is click
    if(number % 2 ==0){
      heart.classList.add('Even')
      heart.classList.remove('Odd')
    }
    else{
      heart.classList.add('Odd')
      heart.classList.remove('Even')
    }
  })

// console message - my favorite cars
const cars = ["Toyota Trueno AE86,","Range Rover Sport,", "Honda NSX 1991,","Mazda RX7"]
  let fav = "My favorite Cars: "
  let txt = ""
  for(let i = 0; i < cars.length; i++) {
    txt += cars[i] + " "
  }

// 1 - 100 for loops with even or odd
console.log(fav + txt)

   const numberlist = document.getElementById("numbers")

    for(let i = 1; i <= 100; i++){

      const listitems = document.createElement("li")

      const even = i % 2 == 0

      listitems.innerHTML = even ? "Even" : "Odd"

      numberlist.appendChild(listitems)

      if(even) listitems.classList.add("even")
        else listitems.classList.add("odd")
    }
  


  




   
