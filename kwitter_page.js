//TUS ANLACES DE FIREBASE
var firebaseConfig={
      apiKey: "AIzaSyBzEnxNuGKYZaRoIPDoZMUVvba1yy_QN9A",
  authDomain: "kwitterapp-db965.firebaseapp.com",
  databaseURL: "https://kwitterapp-db965-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-db965",
  storageBucket: "kwitterapp-db965.appspot.com",
  messagingSenderId: "157295659370",
  appId: "1:157295659370:web:4e2c7013dbd65946063d13"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("nombredeusuario");
room_name=document.getElementById("room_name").value;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
      getData();
//Inica código
function enviar(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
//Termina código
     

