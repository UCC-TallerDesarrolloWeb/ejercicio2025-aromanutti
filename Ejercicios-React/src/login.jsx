import { useState } from "react";
import './styles/login.scss';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(usuario === 'admin' && password === 'admin'){
            console.log('Login exitoso');
            setMessage('Login exitoso');
            navigate('/actividades');
        }else{
            console.log('Login error');
        }
    }
    return(
        <div className="login-container">
            <p>{message}</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar sesion</h2>
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" required/>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}