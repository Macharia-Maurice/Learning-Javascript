const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

const button=document.querySelector("button");
button.addEventListener("click",addTask);

// function for adding new tasks to list
function addTask(){
    if(inputBox.value===""){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

// function to handle checking of completion and deletion of tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// maintain my list even when browser is refreshed (saving list in browser)
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// load my saved list when browser is opened
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}


showTask();