var IMAGE_NUMBER = 4;
var IMAGE_PREFIX = "kittens";
var IMAGE_SUFFIX = ".jpg";

window.onload = function(){
  var params = window.location.search.replace( "?", "" );
  
  // Bail if no parameters
  if(params == ""){
    return;
  }
  
  var target_div = document.getElementsByClassName("imagediv")[0];
  var text_div = document.getElementsByClassName("textdiv")[0];
  
  
  if(params == "random"){
    var params = Math.floor(Math.random()*IMAGE_NUMBER)+1;
  }
  
  var winW = 630, winH = 460;
  if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
  }
  if (document.compatMode=='CSS1Compat' &&
      document.documentElement &&
      document.documentElement.offsetWidth ) {
    winW = document.documentElement.offsetWidth;
    winH = document.documentElement.offsetHeight;
  }
  if (window.innerWidth && window.innerHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
  }
  
  //target_div.innerHTML = '<img src="'+IMAGE_PREFIX+params+IMAGE_SUFFIX+'" width="'+winW+'" height="'+winH+'"></img>';
  target_div.innerHTML = '<img src="'+IMAGE_PREFIX+params+IMAGE_SUFFIX+'" width="'+winW+'"></img>';
  text_div.innerHTML = "Image number: "+params;
  
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
  document.location.href = "main.html?"+target;
}

function random(){
  document.location.href = "main.html?random";
}