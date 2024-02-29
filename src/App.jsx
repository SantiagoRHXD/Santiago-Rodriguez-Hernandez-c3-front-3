import { useState } from 'react'
import './App.css'
import Card from './components/Card'



function App() {
 
  const [usuario, setNombre] = useState(
    {
      nombre: '',
      animalFavorito: ''
    }
  )

  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault()

    if (usuario.nombre.length < 3 || usuario.nombre.trim() !== usuario.nombre) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (usuario.animalFavorito.length < 6) {
      setError('Por favor chequea que la información sea correcta, me parece raro pedir que el nombre del animal tenga más de 6 letras perdon :,v');
      return;
    }

    const nuevoMensaje = `Hola ${usuario.nombre}, sabemos que tu animal favorito es ${usuario.animalFavorito}.`;
    setMensaje(nuevoMensaje);

    setError(null);

  }

  return (
    <div >
      <Card />
      <h1>Escribe tu animal favorito, quiero saber cuál es!</h1>
      <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text"  onChange={(event) => setNombre({...usuario, nombre: event.target.value})}/>
            <label>animalFavorito: </label>
            <input type="text"  onChange={(event) => setNombre({...usuario, animalFavorito: event.target.value})}/>
            <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        {mensaje && <Card mensaje={mensaje} />}
    </div>

  )
}

export default App
