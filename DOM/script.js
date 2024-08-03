var head = document.querySelector("h1");
head.innerText = head.innerText + " Finally done!";
head.style.backgroundColor = "Yellow"
var h3 = document.createElement("h3");
h3.innerText = "This is dyanmic heading";
console.log(h3);
head.after(h3);

let btn = document.createElement("button");
btn.innerText = "Test here";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("h2").before(btn);


let para = document.querySelectorAll("p");
var final = para.getAttribute("class");
para.setAttribute("class", "about")