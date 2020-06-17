let array = []
function addTodo() {
    add = document.getElementById('add-todo').value;
    array.push(add)
    for (i=0;i<array.length;i++){
        var element = document.createElement("p");
        var posted = document.createTextNode(array[i]);
    }
    element.appendChild(posted);
    document.getElementById("show-todo").appendChild(element);
}