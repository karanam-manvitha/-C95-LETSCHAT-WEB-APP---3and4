//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD42-qi0NomkG3xGVcjpWWQwkGJhWGiyJI",
    authDomain: "kwitterproject1.firebaseapp.com",
    projectId: "kwitterproject1",
    storageBucket: "kwitterproject1.appspot.com",
    messagingSenderId: "124567440086",
    appId: "1:124567440086:web:0fcb4f93a49f981068d777",
    measurementId: "G-GRRJNG8F43"
  };

  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(name)
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}