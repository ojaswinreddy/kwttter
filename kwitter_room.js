const firebaseConfig = {
      apiKey: "AIzaSyBaqn6ARZiPxqdMb3Vg07Qd0g5O35sRttQ",
      authDomain: "kwitter-25df4.firebaseapp.com",
      databaseURL: "https://kwitter-25df4-default-rtdb.firebaseio.com",
      projectId: "kwitter-25df4",
      storageBucket: "kwitter-25df4.appspot.com",
      messagingSenderId: "673026654523",
      appId: "1:673026654523:web:c8466aa9c1a03b284a371e"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
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


