import { useState } from 'react';
import axios from 'axios';

export default function RolForm() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const enviar = async () => {
    if (!nombre.trim()) return alert("Nombre obligatorio");
    await axios.post('http://localhost:3001/agregarRol', { nombre, descripcion });
    alert("Rol creado correctamente");
    setNombre('');
    setDescripcion('');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Agregar Rol</h2>
      <input type="text" placeholder="Nombre del rol" value={nombre} onChange={e => setNombre(e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <button onClick={enviar} className="bg-blue-600 text-white w-full p-2 rounded">Crear Rol</button>
    </div>
  );
}
