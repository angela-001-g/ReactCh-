/* eslint-disable react/prop-types */
function Alert({ msg }) {
  const message = msg.msg;

  return (
    <>
      <div>{message}</div>
    </>
  );
}

export default Alert;
