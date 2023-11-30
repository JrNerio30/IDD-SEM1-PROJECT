// Getting the current year

const yr = new Date();
  let year = yr.getFullYear();
    document.getElementById("year").outerHTML = year;

// When "Send Message" button from Contact Me section is clicked, send an alert saying "Your message has been sent. Thank you!"


const sent = document.querySelector("#MsgSent");
  sent.addEventListener("mouseover", () =>{
    sent.style.backgroundColor = "#9e3641";
      if(sent.addEventListener("mouseout", () =>{ 
        sent.style.backgroundColor = "";
      })){
  }});

const notify = document.querySelector("#MsgSent");
  let me = ("Your message has been sent. Thank you!");
  notify.addEventListener("click",() =>{
    alert(me)
  })

  // Incrementing Numbers

  // defualt number when not clicked yet
var number = 0
  // selecting the <p id="thumbsup"><p> 
var count = document.getElementById('thumbsup');
  // giving "incrementor" variable a function using add.EventListener
var incrementor = document.getElementById('up');
// When click, the "number variable shows up and it adds up to one everytime the heart icon is click"
  incrementor.addEventListener('click', () =>{
    number++;
    count.textContent = number.toString();
  });

  // for loops practise with names
const names = ["Kyle", "Kevin", "Kent", "Kyrie"];

  let txt = "";
  for(let i = 0; i < names.length; i++) {
    txt += names[i] + " ";
  }
console.log(txt)

// for loops with numbers
// selecting the ordered list id "numbers"
   const numberlist = document.getElementById("numbers");
  //  for loops  
    for(let i = 1; i <= 100; i++){
      // instead of making li*100, this code does it for you "createElement"
      const listitems = document.createElement("li");

      const even = i % 2 == 0;

      listitems.innerHTML = even ? "Even" : "Odd";

      numberlist.appendChild(listitems);

      if(even) listitems.classList.add("even");
        else listitems.classList.add("odd");
    }
  
      

  
  

   
