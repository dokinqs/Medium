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


let modal = document.getElementById("myModal");
let btn = document.getElementById("follow");
let xbtn = document.getElementsByClassName("close")[0];

// OPEN modal 

//  clicking follow button
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflowY = "hidden";
}

// CLOSE modal

//  clicking <span> (x) 
xbtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "auto";
}
//  clicking outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
  }
}