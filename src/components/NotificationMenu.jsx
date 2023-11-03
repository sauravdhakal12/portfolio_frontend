const Notification = ({ message }) => {
  if (message === "") return null;

  return (
    <div id="notification-menu">
      {message}
    </div>
  )
}

export default Notification;