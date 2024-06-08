const inputText = document.querySelector("#add-book input")
const link = document.querySelector(".button")
const ul = document.querySelector("ul")

const spanDelete = `<span class="delete">حذف</span>`

link.addEventListener("click", function (e) {
  const spanName = document.createElement("span")
  spanName.className = "name"
  spanName.textContent = inputText.value

  const li = document.createElement("li")
  li.appendChild(spanName)
  li.innerHTML += spanDelete

  ul.appendChild(li)

  storeToLocalStorage(inputText.value)

  inputText.value = ""
  e.preventDefault()
})

document.addEventListener("DOMContentLoaded", function (e) {
  let tasks

  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = localStorage.getItem("tasks").split(",")
  }

  for (let items of tasks) {
    const spanName = document.createElement("span")
    spanName.className = "name"
    spanName.textContent = items

    const li = document.createElement("li")
    li.appendChild(spanName)
    li.innerHTML += spanDelete

    ul.appendChild(li)
  }
})

function storeToLocalStorage(task) {
  let tasks

  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = localStorage.getItem("tasks").split(",")
  }

  tasks.push(task)

  localStorage.setItem("tasks", tasks)
}

ul.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    e.target.parentElement.remove()
    // console.log(e.target.parentElement.children[0].textContent)
    removeFromLocalStorage(e.target.parentElement.children[0].textContent)
  }
})

function removeFromLocalStorage(task) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = localStorage.getItem("tasks").split(",")
  }

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] == task) {
      tasks.splice(i, 1)
    }
  }

  if (tasks.length === 0) {
    localStorage.clear()
  } else {
    localStorage.setItem("tasks", tasks)
  }
}

// function storeToLocalStorage(task){
//   let tasks;
//   if(localStorage.getItem(tasks === null)){
//     tasks = [];
//   }else{
//     tasks = localStorage.getItem('tasks').split(',');
//   }
//   tasks.push(task);

//   localStorage.setItem('tasks' , tasks);
// }

// const inputText = document.querySelector("#add-book input")

// const link = document.querySelector(".button")
// const ul = document.querySelector("ul")

// const spanDelete = `<span>حذف</span>`

// link.addEventListener("click", function (e) {
//   const spanName = document.createElement('span');
//   spanName.className = 'name';
//   spanName.textContent = inputText;

//   const li = document.createElement ('li');

//   li.appendChild(spanName);
//   li.innerHTML += spanDelete;

//   ul.appendChild(li);

//   inputText.value = '';
//   e.preventDefault();
// });

// // document.querySelector('.button').addEventListener('click', function(e){
// //     // console.log('Hello World!!!');

// //     // let result;

// //     // console.log(result);

// //     e.preventDefault();
// // });

// // document.querySelector('.button').addEventListener('dblclick', function(e){
// //     console.log('dbl Hello World!!!');

// //     // let result;

// //     // console.log(result);

// //     e.preventDefault();
// // });

// // document.querySelector('.button').addEventListener('mousedown' , function(e){
// //     console.log('mouse down');
// //     e.preventDefault();
// // });

// // document.querySelector('.button').addEventListener('mouseup' , function(e){
// //     console.log('mouse up');
// //     e.preventDefault();
// // });

// // document.querySelector('.button').addEventListener('mouseenter' , function(e){
// //     console.log('mouse hover');
// //     e.preventDefault();
// // });

// // const heading = document.querySelectorAll(".title")[1];

// // document.body.addEventListener('mousemove' , function(e){
// //     // console.log(`mouseX: ${e.offsetX} and mouseY: ${e.offsetY}`);

// //     heading.innerHTML = `mouseX: ${e.offsetX} and mouseY: ${e.offsetY}`;

// //     e.preventDefault();
// // });

// const inputText = document.querySelector("#add-book input")
// const linkSelected = document.querySelector(".button")

// inputText.value = ""

// // linkSelected.addEventListener('click', function(e){
// //     console.log(inputText.value);
// //     inputText.innerHTML = `yes`;
// //     e.preventDefault();
// // });

// inputText.addEventListener("focus", function (e) {
//   console.log("selected")
// })

// inputText.addEventListener("blur", function (e) {
//   console.log("unselected")
// })

const checkBox = document.querySelector("#hide input")
// const heading = document.querySelectorAll(".title")[1]
// const ul = document.querySelector("ul");

// const spanDelete = `<span class="delete">حذف</span>`;

// linkSelected.addEventListener('click',function(e){
//   const li = document.createElement('li');
//   const spanName = document.createElement('span');

//   spanName.className = 'name';
//   spanName.textContent = inputText.value;

//   li.appendChild(spanName);
//   li.innerHTML += spanDelete;

//   ul.appendChild(li);
//   inputText.value = '';

//   e.preventDefault();
// });
// // console.log(checkBox);

// // checkBox.checked = true;
// // checkBox.checked = false;

checkBox.addEventListener("click", function (e) {
  if (checkBox.checked) {
    // heading.style.display = "none"
    ul.style.display = "none"
  } else {
    // heading.style.display = "block"
    ul.style.display = "block"
  }
})

// localStorage.setItem('iman1', 'haqiqatkhah1');
// localStorage.setItem('iman2', 'haqiqatkhah2');
// localStorage.setItem('iman3', 'haqiqatkhah3');

// const name = localStorage.getItem('iman');

// // console.log(name);

// localStorage.removeItem('iman2');

// localStorage.clear();

// const arr = ['iman1', 'iman2'];
// const obj = {name:'iman',age:31};

// localStorage.setItem('array',arr);
// localStorage.setItem('object',JSON.stringify(obj));

// const myArray = localStorage.getItem('array').split(',');
// const myObject = JSON.parse(localStorage.getItem("object"));

// // console.log(myArray);
// console.log(myObject);

// const inputSearch = document.querySelector("#search-books input")

// inputSearch.addEventListener('keyup',function(e){
//   for(let book of ul.children){
//     if(book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1){
//       book.style.display = 'block';
//     }else
//     book.style.display = 'none';
//   }
// });

const inputSearch = document.querySelector("#search-books input")

inputSearch.addEventListener("keyup", function (e) {
  for (let book of ul.children) {
    if (book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1) {
      book.style.display = "block"
    } else {
      book.style.display = "none"
    }
  }
})
