import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOvYbAL0PlZXLD7LySLSR_X8LzLO1QEpk",
  authDomain: "tyitcareerproject.firebaseapp.com",
  databaseURL: "https://tyitcareerproject-default-rtdb.firebaseio.com",
  projectId: "tyitcareerproject",
  storageBucket: "tyitcareerproject.appspot.com",
  messagingSenderId: "117747467896",
  appId: "1:117747467896:web:a7fac3469fe666f1398f8d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);