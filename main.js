var IMAGE_NUMBER = 4;
var IMAGE_PREFIX = "kittens";
var IMAGE_SUFFIX = ".jpg";
var INSET = 0;

var id;

function set_image(){
  var winsz = windowsize();
  var target = document.getElementById("mainimage");
  var imaspect = target.width/target.height;
  var windowaspect = winsz.width/winsz.height;
  if(imaspect > windowaspect){ // Image is less high / thinner than window
    target.setAttribute("width",winsz.width);
  } else { // image is thicker
    target.setAttribute("width",winsz.height*imaspect);
  }
}

function move_navbar(){
  
  var nav_div = document.getElementById("navbar");
  var winsz = windowsize();
  
  var nav_height = nav_div.getBoundingClientRect().height
  var nav_width = nav_div.getBoundingClientRect().width
  nav_div.style.position="absolute";
  nav_div.style.top = winsz.height-nav_height-2;
  //console.log(winsz.width)
  nav_div.style.left = (winsz.width-nav_width)/2;
}

function windowsize(){
 var out = {};
 out.width = 630;
 out.height = 460;
  if (document.body && document.body.offsetWidth) {
    out.width = document.body.offsetWidth;
    out.height = document.body.offsetHeight;
  }
  if (document.compatMode=='CSS1Compat' &&
      document.documentElement &&
      document.documentElement.offsetWidth ) {
    out.width = document.documentElement.offsetWidth;
    out.height = document.documentElement.offsetHeight;
  }
  if (window.innerWidth && window.innerHeight) {
    out.width = window.innerWidth;
    out.height = window.innerHeight;
  }
  
  return out;
}

function checkIsNumber(n){
    return (n - 0) == n && n.length > 0;
}

function goto(){
  var target = prompt("Enter image number 1 - "+IMAGE_NUMBER+": ","1");
  // Validate
  if(checkIsNumber(target)){
    var target_n = parseInt(target);
    if((target_n > 0) && (target_n <= IMAGE_NUMBER)){
      document.location.href = "main.html?"+target_n;
      return true;
    }
  }
  alert("You must enter a number between 1 and "+IMAGE_NUMBER);
  return false;
}

function first(){
  document.location.href = "main.html?1";
}

function random(){
  document.location.href = "main.html?random";
}

function prev(){
  if(id > 1){
    document.location.href = "main.html?"+(id-1);
  }
}

function next(){
  if(id < IMAGE_NUMBER){
    document.location.href = "main.html?"+(id+1);
  }
}