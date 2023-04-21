const now = new Date();
const currentHour = now.getHours();
let daytime = document.getElementById('day');
let adlaw = document.getElementById('adlaw');
let date = document.getElementById('date');
const dateString = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];

if (currentHour >= 18 && currentHour < 0) {
    daytime.innerText = "EVENING";
  } else if (currentHour >= 1 && currentHour < 12) {
    daytime.innerText = "MORNING";
  } else if (currentHour >= 12 && currentHour < 18) {
    daytime.innerText = "AFTERNOON";
  } else {
    daytime.innerText = "MIDNIGHT";
  }
  adlaw.innerText = day;
  date.innerText = dateString;


const button = document.getElementById('buttonTask');
const popup = document.querySelector('.container-addtask');
let titleField = document.getElementById('titleField');
let descField = document.getElementById('descField');
const addButton = document.getElementById('addButton');
const ul = document.getElementById('ul-el');

button.addEventListener('click', ()=>{
    popup.classList.add('active');
    
});



addButton.addEventListener('click', (event) => {
    let title = titleField.value;
    let description = descField.value;
    if(!(title == "")){
        ul.innerHTML += `
        <li>
            <form>
                <article class="taskInfo">
                    <h1>${title}</h1>
                    <p>${description}</p>
                </article>
                <input type="checkbox" name="task" class="task-checkbox">
            </form>
        </li>
    `
    event.preventDefault();
    titleField.value = "";
    descField.value = "";
    popup.classList.remove('active');
    let checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach((checkbox) => {
        stFunction(checkbox);
    });
    }
    else{
        window.alert("PLEASE ENTER TITLE");
    }
});

function stFunction(checkbox){
    let article = checkbox.previousElementSibling;
    while (article && article.tagName !== 'ARTICLE') {
        article = article.nextElementSibling;
    }
    if (article) {
        console.log(article);
        console.log(checkbox);
        checkbox.addEventListener('change', ()=>{
            if(checkbox.checked){
                article.classList.add('strikethrough');
                moveStrikeThroughTasksToEnd();
            }
            else{
                article.classList.remove('strikethrough');
            }
        });
    } else {
        console.log('No sibling article element found');
    }
}

function moveStrikeThroughTasksToEnd() {
    const strikeThroughTasks = document.querySelectorAll('article.strikethrough');
    strikeThroughTasks.forEach((task) => {
      const li = task.parentElement.parentElement;
      const ul = li.parentElement;
      ul.appendChild(li);
      console.log(li);
    });
  }
  
  
