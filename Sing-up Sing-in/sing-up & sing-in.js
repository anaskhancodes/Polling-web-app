// firebase setup code

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAz-oQj_u34pyBPhPLy88_Li1aT8IW4-Uk",
    authDomain: "login-singup-d4f3b.firebaseapp.com",
    projectId: "login-singup-d4f3b",
    storageBucket: "login-singup-d4f3b.appspot.com",
    messagingSenderId: "267749745148",
    appId: "1:267749745148:web:63024a21e4c90595169279",
    measurementId: "G-Y5WJ923E7T"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



const singUp = () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log("email =>", email, "password =>", password)
    

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "otherpage.html";
            // ...
        })
        .catch((error) => {
            alert("error try again")
            console.log(error.code);
            console.log(error.message);
            // ..
        });
}






//Sing_In function

const singIn = () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log("email =>", email, "password =>", password)

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            // alert("Your successfully Sing In")
            window.location.href = "otherpage.html";
            // ...
        })
        .catch((error) => {
            alert("error try again")
            console.log(error.code);
            console.log(error.message);
        });
}


