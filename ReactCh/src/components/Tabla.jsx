/* eslint-disable react/prop-types */

function Tabla({ registro }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Direccion</th>
          </tr>
        </thead>
        <tbody>
          {registro.map((regist) => (
            <tr key={`${regist.name}-${regist.cedula}-${regist.direccion}`}>
              <td>{regist.name}</td>
              <td>{regist.cedula}</td>
              <td>{regist.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
