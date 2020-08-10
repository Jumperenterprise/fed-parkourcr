var firebaseConfig = {
    apiKey: "AIzaSyBnBMeYg3hsVfk31jH-WokBlEkS12xQb88",
    authDomain: "fed-parkourcr.firebaseapp.com",
    databaseURL: "https://fed-parkourcr.firebaseio.com",
    projectId: "fed-parkourcr",
    storageBucket: "fed-parkourcr.appspot.com",
    messagingSenderId: "374389594988",
    appId: "1:374389594988:web:d3222ea4bd5df5d646f149"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection 
var messagesRef = firebase.database().ref('messages');

// Add Even Listener
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    var name = getInputVal('name');
    var last_name = getInputVal('last_name');
    var email = getInputVal('email');
    var comment = getInputVal('comment');
 //Save Message
 saveMessage(name, last_name, email, comment);
 //Show Alert
 document.querySelector('.alert').style.display = 'block';
 //Hide Alert after 3 seconds
 setTimeout(function(){
 document.querySelector('.alert').style.display = 'none';
 },3000);
 
 //Clear Form
 document.getElementById('contactForm').reset();
}

// Function to get from values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, last_name, email, comment) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        last_name: last_name,
        email: email,
        comment: comment
    });
}