// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv7nR2yf6qZDfURiG5OG7_llIQWb6EpJA",
  authDomain: "userform-cd03d.firebaseapp.com",
  projectId: "userform-cd03d",
  storageBucket: "userform-cd03d.firebasestorage.app",
  messagingSenderId: "766236048799",
  appId: "1:766236048799:web:1db4a7c3032858d61e91aa",
  measurementId: "G-EBPEMSNMKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// survey form
const form = document.getElementById('survey-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event)=>{
  e.preventDefault();
  
  // form values get through i mean html document
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const feedback = (document.getElementById('feedback') as HTMLTextAreaElement).value;

  // sending data to firestore
  addDoc(collection(db, 'surveys'), {
    name: name,
    feedback: feedback,
    timestamp: Date.now()
  }).then(() => {
    alert('Survey submitted successfully!');
    form.reset();
  }).catch((error) => {
    console.error('Error submitting survey', error);
  });
})