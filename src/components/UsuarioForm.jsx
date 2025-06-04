import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsuarioForm() {
  const [roles, setRoles] = useState([]);
  const [usuario, setUsuario] = useState({
    nombres: '',
    apellidos: '',
    identificacion: '',
    correo: '',
    rolId: ''
  });

  useEffect(() => {
    axios.get('http://localhost:3001/roles').then(res => setRoles(res.data));
  }, []);

  const enviar = async () => {
    const { nombres, apellidos, identificacion, correo, rolId } = usuario;
    if (!nombres || !apellidos || !identificacion || !correo || !rolId) return alert("Todos los campos son obligatorios");

    await axios.post('http://localhost:3001/agregarUsuario', usuario);
    alert("Usuario creado correctamente");
    setUsuario({ nombres: '', apellidos: '', identificacion: '', correo: '', rolId: '' });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Agregar Usuario</h2>
      <input type="text" placeholder="Nombres" className="w-full border p-2 mb-2 rounded" value={usuario.nombres} onChange={e => setUsuario({ ...usuario, nombres: e.target.value })} />
      <input type="text" placeholder="Apellidos" className="w-full border p-2 mb-2 rounded" value={usuario.apellidos} onChange={e => setUsuario({ ...usuario, apellidos: e.target.value })} />
      <input type="text" placeholder="Identificación" className="w-full border p-2 mb-2 rounded" value={usuario.identificacion} onChange={e => setUsuario({ ...usuario, identificacion: e.target.value })} />
      <input type="email" placeholder="Correo" className="w-full border p-2 mb-2 rounded" value={usuario.correo} onChange={e => setUsuario({ ...usuario, correo: e.target.value })} />
      <select className="w-full border p-2 mb-2 rounded" value={usuario.rolId} onChange={e => setUsuario({ ...usuario, rolId: e.target.value })}>
        <option value="">Seleccione un rol</option>
        {roles.map(rol => <option key={rol.id} value={rol.id}>{rol.nombre}</option>)}
      </select>
      <button onClick={enviar} className="bg-green-600 text-white w-full p-2 rounded">Crear Usuario</button>
    </div>
  );
}
