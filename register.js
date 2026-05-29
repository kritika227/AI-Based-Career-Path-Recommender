import { auth, database } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { ref, set } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.getElementById("registerBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // ----------------------------
  // 1️⃣ Empty fields check
  // ----------------------------
  if (!name || !email || !password) {
    errorMsg.textContent = "Please fill all fields.";
    return;
  }

  // ----------------------------
  // 2️⃣ Full Name validation: first, middle, last
  // ----------------------------
  const nameParts = name.split(/\s+/); // split by spaces
  if (nameParts.length < 3) {
    errorMsg.textContent = "Please enter First, Middle, and Last name.";
    return;
  }

  const nameRegex = /^[A-Za-z]+$/; // only letters, no spaces inside parts

  for (let i = 0; i < 3; i++) {
    const part = nameParts[i];
    if (!nameRegex.test(part)) {
      errorMsg.textContent = "Names can only contain letters (A-Z, a-z).";
      return;
    }
    if (part.length < 4 || part.length > 12) {
      const pos = ["First", "Middle", "Last"][i];
      errorMsg.textContent = `${pos} name must be 4-12 letters long.`;
      return;
    }
  }

  // ----------------------------
  // 3️⃣ Email validation: must end with @gmail.com
  // ----------------------------
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Invalid email! Must end with @gmail.com";
    return;
  }

  // ----------------------------
  // 4️⃣ Password validation: min 6 chars, letters + numbers
  // ----------------------------
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
  if (!passwordRegex.test(password)) {
    errorMsg.textContent = "Invalid password! Must be at least 6 characters, including letters and numbers. Special characters allowed.";
    return;
  }

  errorMsg.textContent = ""; // clear previous errors

  try {
    // ----------------------------
    // 5️⃣ Firebase: create user
    // ----------------------------
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, { displayName: name });

    // Save user info in database
    await set(ref(database, 'users/' + user.uid), {
  name: name,
  email: email,
  role: "user",   // 🔒 LOCKED
  career: "Not assigned"
});

    alert("Registration successful!");
    window.location.href = "login.html";

  } catch (err) {
    errorMsg.textContent = err.message;
  }
});