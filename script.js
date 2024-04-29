var ul = document.getElementById("unOrd");
var inputRef = document.getElementById("input");
function addItem() {
  var list = document.createElement("li");
  list.innerHTML =
    inputRef.value + "<button onclick='deleteItem(event)'>Delete</button> ";

  ul.append(list);
}
function deleteItem(event) {
  event.target.parentElement.remove();
}
