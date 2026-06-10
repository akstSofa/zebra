
const glob = {
    store: []
}
function validName(inputName) {
    return inputName.value.length >= 4
}

function validJob(inputJob) {
    return inputJob.value.length >= 6
}
function validNumber(inputNumber) {
    const value = inputNumber.value;
    return value !== "" && /^[0-9]+$/.test(value);
}

let inputName = document.getElementById('name')
let inputJob = document.getElementById('job')
let inputNumber = document.getElementById('num')
let addbutton = document.getElementById('add')
let currentId = 1;
const errorBlock = document.getElementById('errorBlock')
function addUs(n,j,num) {
    const us = {
        name: n,
        job: j,
        number: num,
        id: Date.now()
    }
    return us
}

const addb = document.getElementById('add')
addb.addEventListener("click", () => {
    errorBlock.textContent = "";
     if (!validName(inputName)) {
        errorBlock.textContent = 'неправильный ввод имени!'
        return;
    }
    if (!validNumber(inputNumber)) {
        errorBlock.textContent = 'неправильный ввод номера!!'
        return;
    }
    if (!validJob(inputJob)) {
        errorBlock.textContent = 'неправильный ввод должности!'
        return;
    }
    glob.store.push(addUs(inputName.value,inputJob.value,inputNumber.value))
    table()
    console.log(glob.store)
  });
function clearS () {
    if (glob.store.length === 0) {
        console.log()
        return;
    }
    glob.store = [];
     table()
    console.log(glob.store)
}

const clearbt = document.getElementById('clear')
clearbt.addEventListener("click", clearS);
function deleteUser(id){
glob.store = glob.store.filter(user => user.id !== id);
table()
}
function table() {
    let tbody = document.getElementById('table-d');
     if (!tbody) return;
    tbody.innerHTML = "";
    for(let i = 0; i < glob.store.length; i++) {
        tbody.innerHTML += `
        <tr>
        <td>${glob.store[i].name}</td>
        <td>${glob.store[i].job}</td>
        <td>${glob.store[i].number}</td>
        <td><button onclick="deleteUser(${glob.store[i].id})">x<button></td>
        </tr>
        `;
        console.log(glob.store[i].name,glob.store[i].job,glob.store[i].number)
    }
}