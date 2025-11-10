var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLenght() {
  return input.value.length;
}

function creatlistelemnt() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossout() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossout);
  var dbtn = document.createElement("button");

  dbtn.appendChild(document.createTextNode("X"));
  li.appendChild(dbtn);
  dbtn.addEventListener("click", deletlistitem);

  function deletlistitem() {
    li.classList.add("delete");
  }
}

function addlistafterclick() {
  if (inputLenght() > 0) {
    creatlistelemnt();
  }
}

function addlistafterclickkeypress(event) {
  if (inputLenght() > 0 && event.key === "Enter") {
    creatlistelemnt();
  }
}

enterButton.addEventListener("click", addlistafterclick);
input.addEventListener("keypress", addlistafterclickkeypress);
