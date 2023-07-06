const firebaseConfig = {
    databaseURL: "https://polling-registration-for-25144-default-rtdb.europe-west1.firebasedatabase.app"
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const dataContaner = document.querySelector("div")


let fetchedData = database.ref('message/');
fetchedData.on("value", (snapshot) => {
    let data = snapshot.val()
    console.log(data);

    

    let htmlData = ""

    for (let key in data) {
        let value = data[key]
        console.log("value", value)


        htmlData += `
        <div class="contaner">
        <h1>Leader name <span>${value.Fullname}</span></h1>
        <h2>Party name<span>${value.Politicalpartyname}</span></h2>
        <h2>City name. <span>${value.Cityname}</span></h2>

        <div id="vote-num">
            <h3>${value.VoteNmber}</h3>
        </div>

        <button id="Button" onclick="disableButton(); incrementNumber(); sendData()">Add vote</button>

        </div>

        <hr>

        <hr>
        `;
    }

    dataContaner.innerHTML = htmlData;
})




function sendData(){
    
    let voteNumber =document.getElementById("vote-num");

    // console.log("working")

    let listRef = database.ref("message/")
    let newRaf = listRef.push()
    newRaf.set({
        
        "VoteNmber": vote-num
    })

    window.location.href = "vote.html";
}    


