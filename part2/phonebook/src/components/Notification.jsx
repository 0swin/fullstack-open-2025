const Notification = ({ message, type = "success" }) => {
  const baseStyle = {
    padding: "5px",
    backgroundColor: "#dfffdfff",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const successStyle = {
    ...baseStyle,
    color: "green",
    backgroundColor: "#dfffdfff",
  };

  const errorStyle = {
    ...baseStyle,
    color: "red",
    backgroundColor: "#ffd6d6",
  };

  if (message === null) {
    return null;
  }

  const style = type === "error" ? errorStyle : successStyle;

  return <div style={style}>{message}</div>;
};

export default Notification;
