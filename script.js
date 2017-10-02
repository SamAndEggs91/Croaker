document.getElementById("add").onclick = function () {
    var text = document.getElementById("croak").value;
    var li = document.createElement("li");
    li.innerHTML = text;
    document.getElementById("croaks").appendChild(li);
}

var dict = {
    key1: "Donald Trump was sent to the moon today after insisting that it was made of cheese",
    key2: "Kanye denies claims of interupting Kim during sex saying 'I was gonna let her finish'"
};