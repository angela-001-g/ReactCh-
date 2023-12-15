/* eslint-disable react/prop-types */
import "../styles/table.css";

function Tabla({ register }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Identification</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {register.map((regist) => (
            <tr
              key={`${regist.name}-${regist.identification}-${regist.address}`}
            >
              <td>{regist.name}</td>
              <td>{regist.identification}</td>
              <td>{regist.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
