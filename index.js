// NAV - hide on scroll down

$(window).scroll(
  // anonymous JS object to store the value
    {
        previousTop: 0
    }, 
    () => {
      let currentTop = $(window).scrollTop()+ 300;
      if (currentTop < this.previousTop) {
        // scrolled up
          $("#navbar").show();
          // $("#navbar").slideUp(300);
      } else {
        // scrolled down
          $("#navbar").hide();
          // $("#navbar").slideDown(300);
      }
      this.previousTop = currentTop;
});


// FOLLOW MODAL

let modal = document.getElementById("followModal");
let btns = document.getElementsByClassName("follow");
let xbtn = document.getElementsByClassName("close")[0];

// Open modal: 

//  clicking follow button
Object.entries(btns).map( (obj) => {
    // obj = Array[index, object] (object is the HTML element object). the actual element is stored in obj[1], not object
    obj[1].addEventListener("click", function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
    });
})

// Close modal:

//  clicking <span> (x) 
xbtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "auto";
}
//  pressing esc button on laptop
$(document).keyup( (e) => {
    if (e.keyCode === 27) {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
    }
})


// LIKES MODAL

let likesmodal = document.getElementById("likesModal");
let btn = document.getElementsByClassName("likes")[0];
let closebtn = document.getElementsByClassName("close")[1];

// Open
btn.onclick = function() {
  likesmodal.style.display = "block";
  document.body.style.overflowY = "hidden";
}

// Close
closebtn.onclick = function() {
  likesmodal.style.display = "none";
  document.body.style.overflowY = "auto";
}
$(document).keyup( (e) => {
    if (e.keyCode === 27) {
        likesmodal.style.display = "none";
        document.body.style.overflowY = "auto";
    }
})

//  clicking outside of the modal for both modals
window.onclick = function(event) {
  if (event.target == likesmodal) {
    likesmodal.style.display = "none";
    document.body.style.overflowY = "auto";
  } else if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
  }
}

// Button focus for firefox
let like = document.getElementsByClassName("like")[0];

document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus();
  }
})