const inputBox = document.getElementById('input-box')
const listItems = document.getElementById('list-items')
function addTask() {
  if (inputBox.value == '') {
    alert('Write Something')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listItems.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = ''
}

listItems.addEventListener('click', function (e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem('data', listItems.innerHTML);
    saveData()
}
function showTask(){
    listItems.innerHTML = localStorage.getItem('data')
}
showTask()