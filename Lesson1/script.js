const title=document.querySelector("#title");//selecting element h1
const paragraphs=document.getElementsByTagName("p");
const button=document.getElementById("btn");
let link=document.querySelector("a")

title.textContent="DOM Manipulation started"
title.innerHTML="<span style='color:red'>Updated Title</span>"
title.innerText="DOM manipulation with innerText"

//inline style
title.style.color="blue"
title.style.backgroundColor=""
title.style.fontSize="20px"
title.style.fontWeight="bold"

// work with attributes
link.setAttribute("href","https://youtube.com/")
link.removeAttribute("href")

button.addEventListener("click",()=>{
	title.textContent="Text Changed";
	title.style.color="red";
	link.setAttribute("href","https://youtube.com/")
})