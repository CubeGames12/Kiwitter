
const firebaseConfig = {
  apiKey: "AIzaSyASXJTUwWW1oD5_E6z8aajjY325p9uvqbw",
  authDomain: "kiwitter-eb56c.firebaseapp.com",
  databaseURL: "https://kiwitter-eb56c-default-rtdb.firebaseio.com",
  projectId: "kiwitter-eb56c",
  storageBucket: "kiwitter-eb56c.appspot.com",
  messagingSenderId: "545535225152",
  appId: "1:545535225152:web:17d5f7496c3ec2291b1ea5"
};

 
firebase.initializeApp(firebaseConfig)

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
