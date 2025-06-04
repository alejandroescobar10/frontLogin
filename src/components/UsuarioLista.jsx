import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsuarioLista() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios').then(res => setUsuarios(res.data));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Usuarios Registrados</h2>
      <ul className="list-disc ml-6 space-y-1">
        {usuarios.map((u, i) => (
          <li key={i}>
            {u.nombreCompleto} <span className="text-blue-600 font-semibold">({u.rol})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
