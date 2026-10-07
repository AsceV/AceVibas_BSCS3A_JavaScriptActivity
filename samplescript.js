const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const changeBG = document.getElementById('changeBackground');
const prof = document.getElementById('profile');
const toggleD = document.getElementById('toggleDetails');
const dtls = document.getElementById('details');
let chill = false;

const studentDetails = {
    "Juan Dela Cruz": "Juan is a third-year BS Computer Science student who enjoys programming and web development.",
    "Maria Santos": "Maria  is a third-year BS Computer Science student who enjoys programming and web development."
};

buttonname.addEventListener("click", function(){
    if (studentname.textContent === "Juan Dela Cruz") {
        studentname.textContent = "Maria Santos";
        dtls.textContent = studentDetails["Maria Santos"];
    } else {
        studentname.textContent = "Juan Dela Cruz";
        dtls.textContent = studentDetails["Juan Dela Cruz"];
    }
});

changeBG.addEventListener("click", function(){
    if (chill == false){
        prof.style.backgroundColor = "#abece1e1";
        chill = true;
    }
    else{
        prof.style.backgroundColor = "";
        chill = false;
    }
});

toggleD.addEventListener("click", function(){
    dtls.classList.toggle("hidden");

    if (dtls.classList.contains("hidden")){
        toggleD.textContent = "Show Details";
    }
    else{
        toggleD.textContent = "Hide Details";
    }
});