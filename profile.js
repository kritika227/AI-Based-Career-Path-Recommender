import { auth, database } from './firebase.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const nameSpan = document.getElementById("name");
const emailSpan = document.getElementById("email");
const timestampSpan = document.getElementById("timestamp");
const careerDiv = document.getElementById("career");
const logoutBtn = document.getElementById("logoutBtn");

auth.onAuthStateChanged(async (user) => {
  if (!user) {
    alert("Please login first!");
    window.location.href = "login.html";
    return;
  }

  try {
    const userRef = ref(database, 'users/' + user.uid);
    const snapshot = await get(userRef);
    const userData = snapshot.val();

    if (!userData) {
      alert("User data not found!");
      await auth.signOut();
      window.location.href = "login.html";
      return;
    }

    // Redirect admin to admin panel
    if (userData.role === "admin") {
      window.location.href = "admin.html";
      return;
    }

    // Display Name & Email
    nameSpan.textContent = userData.name || "Anonymous";
    emailSpan.textContent = userData.email || "-";

    // Display Last Updated
    const timestamp = userData.updatedAt || userData.createdAt || userData.timestamp || "-";
    timestampSpan.textContent = timestamp !== "-" ? new Date(timestamp).toLocaleString() : "-";

    // Display Top 3 Careers
    careerDiv.innerHTML = "";
    if (userData.top3 && Array.isArray(userData.top3)) {
      userData.top3.forEach(c => {
        const p = document.createElement("p");
        if (c.percent >= 70) p.className = "green";
        else if (c.percent >= 40) p.className = "yellow";
        else p.className = "red";
        p.textContent = `${c.career} - ${c.percent}%`;
        careerDiv.appendChild(p);
      });
    } else {
      careerDiv.textContent = "Not Assigned";
    }

  } catch (error) {
    console.error("Error fetching profile:", error);
    alert("Unable to load profile. Try again later.");
  }
});

// Logout
logoutBtn.addEventListener("click", async () => {
  try {
    await auth.signOut();
    alert("Logged out successfully!");
    window.location.href = "login.html";
  } catch (error) {
    console.error("Logout error:", error);
  }
});