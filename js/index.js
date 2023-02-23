// Get Username
var nameInput = prompt("Masukan nama Anda sebelum akses.");
var nameUser;
if (nameInput === null || nameInput.trim() === "") {
    nameUser = "Kamu";
} else {
    nameUser = nameInput;
}
document.getElementById("nameUser").innerText = nameUser;

// Get Current Time
// let today = new Date();
// let dateWithoutTime = moment(today).format("MM/DD/YYYY");

// document.getElementById("date-today").innerHTML = dateWithoutTime;

// function updateClock() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let time = `${hours}:${minutes}:${seconds}`;

//     document.getElementById("current-time").textContent = time;
// }

// setInterval(updateClock, 1000);

// Function Validate
function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages-user"].value;

    if(name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Form tidak boleh ada yang kosong!");
        return false;
    }
    
    setSenderUI(name, birthDate, gender, messages);
    
    return false;
}

function setSenderUI(name, birthDate, gender, messages){
    var dt = new Date();
    document.getElementById('current-time').innerText=dt;
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
}