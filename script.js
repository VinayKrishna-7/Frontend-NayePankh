AOS.init({
duration:1000,
once:true
});

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);

});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
+counter.dataset.target;

const current =
+counter.innerText;

const increment =
target/100;

if(current<target){

counter.innerText =
Math.ceil(current+increment);

requestAnimationFrame(updateCounter);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});

document
.getElementById("volunteerForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you for registering as a volunteer!"
);

e.target.reset();

});