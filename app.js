// adding the 'add' button
let add = document.createElement ('button');
add.innerText = "Add";
add.classList.add('btn');
document.querySelector('.l1').appendChild(add);

//keyboard functionality for add button
function handleKeyPress(event){
    if(event.keyCode == 13){
        add.click();
    }
}
document.addEventListener('keypress', handleKeyPress);
add.addEventListener("click", addButtonFunction);


//adding event listener for add button
function addButtonFunction() {
    let inp = document.querySelector("#add");
    let task = document.createElement('div');
    task.classList.add("tasks");
    let p = document.createElement('p');
    p.innerText = inp.value;
    p.style.backgroundColor = "white";
    p.style.position = "relative";
    p.style.bottom = "7px";
    task.style.overflow = "hidden"
    task.append (p);
    let check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("checkbox");
    task.prepend(check);
    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("btn2");
    task.append(del);
    document.querySelector(".list").appendChild(task);
    inp.value = "";
    task.style.display = "flex";
    task.style.justifyContent = "space-around"; 
};

document.addEventListener("click",function(event){
     if (event.target.classList.contains("btn2")){
        event.target.parentElement.remove();
     }
})
