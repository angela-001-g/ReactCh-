/* eslint-disable react/prop-types */
import "../styles/alerts.css";

function Alert({ msg }) {
  const message = msg.msg;

  return (
    <>
      <div className="error">{message}</div>
    </>
  );
}

export default Alert;
