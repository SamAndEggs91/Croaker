document.getElementById("add").onclick = function () {
    var text = document.getElementById("croak").value;
    var li = document.createElement("li");
    li.innerHTML = text;
    document.getElementById("croaks").appendChild(li);
}