
const navArray = [document.querySelector (".nav-item")] ;



function applyListeners () { // Create listener function
    
    (navArray)? navArray.addEventListener('click', getListener) : console.log("Can't get main Div"); }

    //evalutates that we have a main div  to set listener on, if we do we add an evenet listener, passes a function as anarguement

console.log("hello")