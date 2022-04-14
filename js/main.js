
var elCheckTicked = document.querySelector("#ticked");
var elCheckCost = document.querySelector("#cost");
var elCheckHealth = document.querySelector("#health");
var elCheckCancel = document.querySelector("#cancel");

var btn = document.querySelector(".btn");
var elOutput = document.querySelector(".output");

btn.addEventListener("click", function(evt){
  evt.preventDefault();
  var ticked = elCheckTicked.checked;
  var cost = elCheckCost.checked;
  var health = elCheckHealth.checked;
  var cancel = elCheckCancel.checked;

  if ((ticked && cost && health && !cancel) || (ticked && !cancel)){
    answer = "Sayohatingiz yaxshi o'tsin Oq yo'l !";
  } else {
    answer = "Afsus sayohat bekor qilindi !!!";
  }

  elOutput.textContent = answer;
  elOutput.setAttribute( 'style', 'font-size: 24px ; color: white !important; margin-left:40px');
})