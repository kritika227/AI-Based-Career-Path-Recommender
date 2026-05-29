import { auth } from "./firebase.js";
import { signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const ADMIN_EMAIL = "ghanatekritika@gmail.com";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 🔐 ADMIN CHECK
    if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      window.location.href = "admin.html";   // ✅ ADMIN PANEL
    } else {
      window.location.href = "index.html";   // ✅ CAREER QUIZ
    }

  } catch (error) {
    alert(error.message);
  }
});