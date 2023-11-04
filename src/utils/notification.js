//TODO: stack notifications
const notifiy = (msg, displayMessage, state) => {
  displayMessage([msg, state]);

  // Displays for 3s
  setTimeout(() => {
    displayMessage(["", ""]);
  }, 3000);
}

export default notifiy