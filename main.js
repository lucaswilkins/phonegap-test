var IMAGE_NUMBER = 2;
var IMAGE_PREFIX = "kittens";
var IMAGE_SUFFIX = ".jpg";

window.onload = function(){
  var params = window.location.search.replace( "?", "" );
  
  var target_div = document.getElementsByClassName("imagediv")[0];
  
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
  
}