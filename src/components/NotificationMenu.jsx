const Notification = ({ message }) => {
  if (message[0] === "") return null;

  // Add style
  const errorStyle = {
    borderLeft: "10px solid #c24444",
    backgroundColor: "#dfcaca"
  };
  const successStyle = {
    borderLeft: "10px solid #4fc244",
    backgroundColor: "#c4e8cc"
  };

  const style = (message[1] === "success" ? successStyle : errorStyle);
  return (
    <div id="notification-menu" style={style}>
      {message[0]}
    </div>
  )
}

export default Notification;