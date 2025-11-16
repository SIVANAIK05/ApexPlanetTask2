 // MOBILE MENU TOGGLE
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

// CONTACT FORM
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    msg.textContent = "⚠ Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "❌ Enter a valid email.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✅ Message Sent Successfully!";
  msg.style.color = "green";
  form.reset();
});

// TO-DO LIST
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if (!input.value.trim()) return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => li.remove());

  list.appendChild(li);
  input.value = "";
});
