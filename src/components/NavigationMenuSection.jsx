import { menu_items_name } from "../utils/globals";

const Menu = ({currentScreen, setCurrentScreen}) => {

  //Screens exist as a list. Create a li for each and with appropriate text
  const createMenuItem = (name, key) => {
    return (
      <li key={key}><a href="" onClick={switchScreen}>{name}</a></li>
    )
  }
  const switchScreen = (event) => {
    event.preventDefault();
    const targetScreen = event.target.innerText;

    if(targetScreen != currentScreen) setCurrentScreen(targetScreen);
  }

  return (
    <div id="nav-menu-inner">
      {menu_items_name.map((item, i) => (
        createMenuItem(item, i)
      ))}
    </div>
  )
}

export default Menu;
