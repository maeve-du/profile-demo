import './style.css';
import data from './data/db.json';

const users = data.users;

const app = document.getElementById("app");
const h1 = document.createElement("h1");
h1.textContent = "User List";
const section = document.createElement("section");
section.classList.add("cards");

app.append(h1);
app.append(section);

users.forEach(user => {
  const div = document.createElement("div");
  section.append(div);
  div.classList.add("card");

  const pName = document.createElement("p");
  pName.textContent = `Name: ${user.name}`;
  div.append(pName);
  const pAge = document.createElement("p");
  pAge.textContent = `Age: ${user.age}`;
  div.append(pAge);
  const pIncome = document.createElement("p");
  pIncome.textContent = `Income: ${user.income}`;
  div.append(pIncome);
})


