import RolForm from './components/RolForm';
import UsuarioForm from './components/UsuarioForm';
import UsuarioLista from './components/UsuarioLista';

function App() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-4">
      <RolForm />
      <UsuarioForm />
      <UsuarioLista />
    </div>
  );
}

export default App;
