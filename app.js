const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

const skills = document.querySelector(".soft-skills");
const tecs = document.getElementById("tec-list");
const con = document.getElementById("contacts-list");

const list = document.getElementById("skills-list");
const tec = document.getElementById("list-tec");
const list_contacts = document.getElementById("list-contacts");

skills.addEventListener("click", function(){
  list.classList.toggle("show");
  
  
});
tecs.addEventListener("click", function(){
  tec.classList.toggle("show");
  
  
});

con.addEventListener("click", function(){
  list_contacts.classList.toggle("show");
})


