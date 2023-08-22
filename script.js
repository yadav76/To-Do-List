const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value === '') {
        alert("Your Have To Write Something In Input Field");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add X icon at end of li
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();  //save data after toggle of any li
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  //save data after deleting the any li
    }
}, false)

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Now show the data after Reload of page from localStorage
const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

// call showData() function on every Reload of page
showData();