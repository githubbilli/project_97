var firebaseConfig = {
    apiKey: "AIzaSyCjqg1k9qF5TmigyfYjwJvLvFDkdsR0rqk",
    authDomain: "chatter-box-5b94f.firebaseapp.com",
    databaseURL: "https://chatter-box-5b94f-default-rtdb.firebaseio.com",
    projectId: "chatter-box-5b94f",
    storageBucket: "chatter-box-5b94f.appspot.com",
    messagingSenderId: "340546779186",
    appId: "1:340546779186:web:42eb841e073ac31699a42b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+username+"!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    window.location = "chatter-boxroom.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
   document.getElementById("output").innerHTML = row;
   //End code
   });});} 
getData();

function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "chatter-boxroom.html";
}

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem(username);
    window.location = "chatter-boxlogin.html";
}
