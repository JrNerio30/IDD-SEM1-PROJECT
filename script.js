// Saying Hello in the Console

let Fernando = ("")
let say = "Hello, thank you for having your time to look at my portfolio project"
  console.log(Fernando + say)




// Getting the current year

const yr = new Date();
  let year = yr.getFullYear();
    document.getElementById("year").outerHTML = year;



const sent = document.querySelector("#MsgSent");
  sent.addEventListener("mouseover", () =>{
    sent.style.backgroundColor = "#9e3641";
      if(sent.addEventListener("mouseout", () =>{ 
        sent.style.backgroundColor = "";
      })){
  }});

const element = document.getElementById("MsgSent");
  element.onmouseover = () =>{
    element.innerText = "Send it";

  element.onmouseout = () =>{
    element.innerText = "Send Message";
  }}



const notify = document.querySelector("#MsgSent");
  let me = ("Your message has been sent. Thank you!");
  notify.addEventListener("click",() =>{
    alert(me)
  })


let number = -1
let count = document.getElementById('heart');
let incrementor = document.getElementById('up');
  incrementor.addEventListener('click', () =>{
    number++;
    count.textContent = number.toString();
    if(number % 2 ==0){
      heart.classList.add('Even');
      heart.classList.remove('Odd');
    }
    else{
      heart.classList.add('Odd');
      heart.classList.remove('Even');
    }
  });



const cars = ["Toyota Trueno AE86,","Range Rover Sport,", "Honda NSX 1991,","Mazda RX7"];
  let fav = "My favorite Cars: "
  let txt = "";
  for(let i = 0; i < cars.length; i++) {
    txt += cars[i] + " ";
  }

console.log(fav + txt)

   const numberlist = document.getElementById("numbers");

    for(let i = 1; i <= 100; i++){

      const listitems = document.createElement("li");

      const even = i % 2 == 0;

      listitems.innerHTML = even ? "Even" : "Odd";

      numberlist.appendChild(listitems);

      if(even) listitems.classList.add("even");
        else listitems.classList.add("odd");
    }
  





   
