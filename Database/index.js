const firebaseConfig = {
    databaseURL : "https://polling-registration-for-25144-default-rtdb.europe-west1.firebasedatabase.app"
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const submit = document.querySelector("button");
submit.onclick = () => sendData()


// window.location.href = "vote.html"

function sendData(){
    let fullName =document.getElementById("full-name");
    let fatherName =document.getElementById("father-name");
    let CNIC_num =document.getElementById("CNIC-num");
    let cityName =document.getElementById("city-name");
    let politicalPartyName =document.getElementById("political-party-name");
    // let voteNumber =document.getElementById("vote-num");

    // console.log("working")

    let listRef = database.ref("message/")
    let newRaf = listRef.push()
    newRaf.set({
        "Fullname": fullName.value,
        "Fathername": fatherName.value,
        "CNICnumber": CNIC_num.value,
        "Cityname": cityName.value,
        "Politicalpartyname": politicalPartyName.value,
        // "VoteNmber": vote-num
    })

    // window.location.href = "../Sing-up Sing-in/index.html";
    
}
    
const newPage = () => {
    window.location.href = "../Sing-up Sing-in/index.html"
}
    
