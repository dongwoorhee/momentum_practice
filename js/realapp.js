// const loginForm = document.getElementById("login-form");
const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");
const HIDDENCLASSNAME = "hidden";
const USERNAMEKEY = "username";
// Do not use too many strings. transfet every strings you use often to variables.
// that will prevent unforced errors on coding.

// querySelector grab the first-child if there are sevral element with same tag or class.
// const loginButton = loginForm.querySelector("button");

const linkpage = document.querySelector("a");

// to check the saved info of users
// let username ="";

const savedusername = localStorage.getItem(USERNAMEKEY);
console.log(savedusername);

function paintgreetings(username) {
    greetings.classList.remove(HIDDENCLASSNAME);
    greetings.innerText = `Hello, welcome ${username}`;
     // same as above, but you can avoid odd expression or combination of many strings
}

if(savedusername === null){
    //show forms
    loginform.classList.remove(HIDDENCLASSNAME);
    loginform.addEventListener("submit",onloginsubmit); // move add Eventlistner from bottom to here

}else {
    //show greetings
    paintgreetings(savedusername);
}

function onloginsubmit(event) {
    
    // if(username ===""){
    //     alert("please enter your name");
    // } else if(username.length > 10) {
    //     alert("Your Name is too long");
    //     loginInput.value = "";
    // } else {
    //     document.write("Hello " + username);
    // }
    // console.log(username);

    event.preventDefault();    // stop the default behavior of the event
    const username = loginInput.value;
    loginform.classList.add(HIDDENCLASSNAME);
    
    console.dir(greetings);
    // usernameh1.innerText = "Hello, welcome Mr. " + username;
    localStorage.setItem(USERNAMEKEY,username);
    paintgreetings(username);
    
    //`${username}`;
    // console.log(event);
    // console.log(loginInput.value);
    // if you add an argument, that browser will hand over an event object to the argument.
}

function handleLinkClick (event) {
    console.log(event); // hand over an object for the event as an argument
    alert("page was clicked!");
    // event.preventDefault();
}

// linkpage.addEventListener("click",handleLinkClick);
// hand over mouse or pointer event which depends on your input device type as an object

// hand over submit event as an object of the function

// () in the end of function represent function is conducted. 
//so when event happen brower will put the () in the last automatically.
//and deliver an argument of the function as an event object handler.

// form tag always refresh the document whenever submit is conducted.

// if you want to know which property you should handle, please use console.dir API, you can see which properties they have.

// loginButton.addEventListener("click", onbtnclick);