// Import the functions you need from the Firebase CDN modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey-form');
    if (!form) {
        console.error('Survey form not found in the DOM.');
        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('feedback').value;
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
    });
});
