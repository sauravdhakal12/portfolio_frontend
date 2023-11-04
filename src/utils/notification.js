//TODO: stack notifications

const notifiy = async (msg, displayMessage, state) => {

  // Await, make sure changes are made. Else, '#notification-menu' will not be found.
  await displayMessage(msg);
  // Add style
  if(state === "error") {
    document.querySelector("#notification-menu").style.borderLeft = "10px solid #c24444";
    document.querySelector("#notification-menu").style.backgroundColor = "#dfcaca";
  } else if (state === "success") {
    document.querySelector("#notification-menu").style.borderLeft = "10px solid #4fc244";
    document.querySelector("#notification-menu").style.backgroundColor = "#c4e8cc";
  }
  
  // Displays for 3s
  setTimeout(() => {
    displayMessage("")
  }, 3000);
}

export default notifiy