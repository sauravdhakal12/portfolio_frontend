const Menu = ({currentScreen, setCurrentScreen}) => {
  //todo: screens come as a list. Create a li for each and with appropriate text

  const switchScreen = (event) => {
    const targetScreen = event.target.innerText;

    if(targetScreen != currentScreen) setCurrentScreen(targetScreen);
  }
  return (
    <div>
      <li><a href="#" onClick={switchScreen}>Home</a></li>
      <li><a href="#" onClick={switchScreen}>Insert</a></li>
    </div>
  )
}

export default Menu;
