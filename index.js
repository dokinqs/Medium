// NAV - HIDE ON SCROLL DOWN
$(window).scroll(
  // anonymous JS object to store the value
    {
        previousTop: 0
    }, 
    () => {
      let currentTop = $(window).scrollTop();
      let navHeight = 112;
      if (currentTop > navHeight) {
        // if (currentTop < this.previousTop) {
        if (currentTop < (this.previousTop-5)) {
          // scrolled up
            $("#navbar").show();
            // $("#navbar").slideDown(300);
        // } else if (currentTop > this.previousTop) {
        } else if (currentTop > (this.previousTop+5)) {
          // scrolled down
            $("#navbar").hide();
            // $("#navbar").slideUp(300);
        }
      }
      this.previousTop = currentTop;
});


// SIGNIN MODAL
let signin = document.getElementById("signinModal");
let signinBtn = document.getElementsByClassName("signin")[0];
let exitbtn = document.getElementsByClassName("close")[0];

// Open signin modal
//  clicking signin button
signinBtn.onclick = () => {
  signin.style.display = "block";
  document.body.style.overflowY = "hidden";
  document.body.style.height = "100%";
}

// Close signin modal
//  clicking <span> (x) 
exitbtn.onclick = () => {
  signin.style.display = "none";
  document.bodystyle.overflowY = "auto";
  document.body.style.height = "auto";
}
//  pressing esc key
$(document).keyup( (e) => {
    if (e.keyCode === 27) {
        signin.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.height = "auto";
    }
})


// GETSTARTED MODAL
let getstarted = document.getElementById("getstartedModal");
let getstartedBtn = document.getElementsByClassName("getstarted")[0];
let spanbtn = document.getElementsByClassName("close")[1];

// Open signin modal
//  clicking signin button
getstartedBtn.onclick = () => {
  getstarted.style.display = "block";
  document.body.style.overflowY = "hidden";
  document.body.style.height = "100%";
}

// Close signin modal
//  clicking <span> (x) 
spanbtn.onclick = () => {
  getstarted.style.display = "none";
  document.body.style.overflowY = "auto";
  document.body.style.height = "";
}
//  pressing esc key
$(document).keyup( (e) => {
    if (e.keyCode === 27) {
        getstarted.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.height = "";
    }
})


// FOLLOW MODAL
let modal = document.getElementById("followModal");
let btns = document.getElementsByClassName("follow");
let xbtn = document.getElementsByClassName("close")[2];

// Open follow modal: 
//  clicking top or bottom follow button
Object.entries(btns).map( (obj) => {
    // obj = Array[index, object] (object is the HTML element object). the actual element is stored in obj[1], not object
    obj[1].addEventListener("click", function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100%";
    });
})

// Close follow modal:
xbtn.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflowY = "auto";
  document.body.style.height = "";
}
$(document).keyup( (e) => {
    if (e.keyCode === 27) {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.height = "";
    }
})


// LIKES MODAL
let likesmodal = document.getElementById("likesModal");
let btn = document.getElementsByClassName("likes")[0];
let closebtn = document.getElementsByClassName("close")[3];

// Open likes modal:
btn.onclick = () => {
  likesmodal.style.display = "block";
  document.body.style.overflowY = "hidden";
  document.body.style.height = "100%";
}

// Close likes modal:
closebtn.onclick = () => {
  likesmodal.style.display = "none";
  document.body.style.overflowY = "auto";
  document.body.style.height = "";
}
$(document).keyup( (e) => {
    if (e.keyCode === 27) {
        likesmodal.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.height = "";
    }
})


//  clicking outside of the modal for ALL modals
window.onclick = (e) => {
  if (e.target == signin) {
    signin.style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.height = "";
  } else if (e.target == getstarted) {
    getstarted.style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.height = "";
  } else if (e.target == likesmodal) {
    likesmodal.style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.height = "";
  } else if (e.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.height = "";
  }
}


// Button focus for firefox css
let like = document.getElementsByClassName("like")[0];
document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    e.target.focus();
  }
})