var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var  ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var deleteBtns = document.getElementsByClassName("delete");




for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
  }

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
  }

function inputLength(){
	return input.value.length;
}
function createListElement(){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);


	ul.appendChild(li);
	input.value = "";

	

}
function addListAfterclick() {
	if (inputLength() > 0){
		createListElement()
	}  
}
function addlListAfterkeypress(event){
	if (inputLength() > 0 && event.key === "Enter"){
		createListElement()
	}  
}

button.addEventListener("click",addListAfterclick)


input.addEventListener("keydown",addlListAfterkeypress)

for(var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function(e){
	 e.currentTarget.classList.toggle("done");
	})
  }

  