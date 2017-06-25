console.log('JS Connected ... ');

// document.querySelector('.date').innerHTML = Date();
// Show date and time on bottom of the page - scrolling marquee used
$(".date").html(Date());


// Added event listener to projects, linking them to external websites when they are clicked on
$(".nin-ten-doe").click(function(){
  window.location.href ="https://bazzat10.github.io/Projects/"
});

$(".ellas-online-bookstore").click(function(){
  window.location.href ="https://lit-bayou-99006.herokuapp.com/"
});

$(".tripr").click(function(){
  window.location.href ="https://glacial-bayou-90913.herokuapp.com/"
});

$(".carpool").click(function(){
  window.location.href ="https://mysterious-bastion-51155.herokuapp.com/"
});

$(".ga-online-bank").click(function(){
  window.location.href ="https://bazzat10.github.io/ga_bank/"
});


// Change image on About Me - using timer
// $("#about-me-img").attr("src","barry1.png");
var images = [], x = 0;
images[0] = "barry2.png";
images[1] = "barry3.png";
images[2] = "barry4.png";
images[3] = "barry5.png";
images[4] = "barry1.png";

function changeImage() {
  // var img = document.getElementById("about-me-img");
  // img.src = images[x];
  $("#about-me-img").attr("src",images[x]);
  x++;

  if(x >= images.length){
      x = 0;
  }

};
setInterval(changeImage, 5000);
