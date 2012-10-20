var IMAGE_NUMBER = 4;
var IMAGE_PREFIX = "kittens";
var IMAGE_SUFFIX = ".jpg";
var INSET = 0;

var id;

window.onload = function(){
  var params = window.location.search.replace( "?", "" );
  
  // Bail if no parameters
  if(params == ""){
    return;
  }
  
  // Get image number
  if(params == "random"){
    var params = Math.floor(Math.random()*IMAGE_NUMBER)+1;
  }
  
  // Save image number
  id = parseInt(params);
  
  // Set text for navigator
  var text_div = document.getElementsByClassName("textdiv")[0];
  text_div.innerHTML = params+" of "+IMAGE_NUMBER;
  
  
  
  
  // Set navigation bar position
  set_image();
  move_navbar();
}

window.onresize = function(){
  set_image();
  move_navbar();
}

function set_image(){
  var winsz = windowsize();
  var target_div = document.getElementsByClassName("imagediv")[0];
  target_div.innerHTML = '<img src="'+IMAGE_PREFIX+id+IMAGE_SUFFIX+'" width="'+(winsz.width-INSET)+'"></img>';
}

function move_navbar(){
  
  var nav_div = document.getElementsByClassName("navbar")[0];
  var winsz = windowsize();
  
  var nav_height = nav_div.getBoundingClientRect().height
  nav_div.style.position="absolute";
  nav_div.style.top = winsz.height-nav_height-INSET;
  nav_div.style.left = 0;
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