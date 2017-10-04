document.getElementById("add").onclick = function () {
    var text = document.getElementById("croak").value;
    var li = document.createElement("li");
    li.innerHTML = text;
    document.getElementById("croaks").appendChild(li);
}

var dict = {
    1: "First post",
    2: "Second post",
    3: "Shit post",
    4: "Food post",
    5: "Fake news post",
    6: "Animal post"
};

//window.alert(dict[2]);

var autoGenPosts = Math.round(Math.random() * 6);

window.alert(dict[autoGenPosts]);