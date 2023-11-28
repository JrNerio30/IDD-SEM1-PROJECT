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

