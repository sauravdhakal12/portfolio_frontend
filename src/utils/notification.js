const notifiy = (msg, displayMessage) => {
  displayMessage(msg);
  
  setTimeout(() => {
    displayMessage("")
  }, 3000);
}

export default notifiy