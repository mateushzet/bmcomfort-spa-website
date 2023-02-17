function menuClick(){
  var x = document.getElementById("dropContent");
  var y = document.getElementById("closeIcon");

  if(x.style.display === "block"){
    x.style.display = "none";
    y.style.display = "none";
  }else{
    x.style.display = "block";
    y.style.display = "block";
  }
}
