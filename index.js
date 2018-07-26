function toggleVoteContainer(){
  var votecontainer = document.getElementById("vote-container");

  if(votecontainer.style.display === ""){
    votecontainer.style.display = "block";
  }
  console.log(votecontainer.style.display);

}

function increaselikes(element){
  var likes = element.innerText;
  likes = parseInt(likes);
  likes += 1;
  element.innerText = likes;
}
var scores = document.getElementsByClassName("score");
var score = scores[0];
//scores.style.color = "orange";


 var catsImages=["https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg",
 "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
 "http://www.petwebsite.co.uk/media/k2/items/cache/0548677e6432786dd8df61eb3aaec139_L.jpg"];

var dogsImages=["https://assets.reviews.com/uploads/2017/11/09094231/very-cute-puppy.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc2wD5KZs6IbjTPzL1GvrmOrCB2lVr_58vIz_p3cGiCaekGrqMQ",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYVThU1mSMCDMoXZMf-D21SCdhWhE_AbzDpEtHefsPeSnAuWouA.jpg"];

function changeImage(element){
  console.log(element.id);


var animals = [];

if(element.id === "cats-carousel"){
  animals = catsImages;
} else {
  animals = dogsImages;
  }

var carousel = document.getElementById(element.id);
var image = carousel.getElementsByTagName('img')[0];
var imageUrl = image.getAttribute('src');
var imageIndex = animals.indexOf(imageUrl);

if(imageIndex === animals.length - 1){
  imageIndex = 0;
} else {
  imageIndex += 1;
}

imageUrl = animals[imageIndex];

image.src =imageUrl;

console.log(imageUrl);
}
