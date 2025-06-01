let head = document.createElement("h1");
head.innerText = "Form Page";
document.body.appendChild(head);

document.body.style.backgroundColor = "aliceblue";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";


let div = document.createElement("div");
div.style.border = "1px solid black";
div.style.padding = "20px";
div.style.borderRadius = "10px";
div.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
div.style.width = "300px";
div.style.margin = "0 auto";    


let form = document.createElement("form");
form.setAttribute("id", "form");

let label = document.createElement("label");
label.setAttribute("for", "input");
label.innerText = "Enter your name:";
label.style.display = "block";
label.style.marginBottom = "10px";
label.style.fontSize = "16px";
label.style.fontWeight = "bold";
label.style.color = "#333";
label.style.textAlign = "left";
form.appendChild(label);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.style.width = "90%";
input.style.padding = "10px";
input.style.border = "1px solid #ccc";
input.style.borderRadius = "5px";
input.setAttribute("id", "input");
form.appendChild(input);

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.innerText = "Submit";
button.style.marginTop = "20px";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
form.appendChild(button);

div.appendChild(form);
document.body.appendChild(div);