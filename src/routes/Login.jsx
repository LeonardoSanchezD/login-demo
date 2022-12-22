import React from "react";
import './Login.css';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;
    const remember = e.target.remember.checked ? 'True' : 'False';
    console.log("Username: " + user, "\n", "Password: " + pass, "\n", "Remember: " + remember);
  }
  
  return (
    <div className="container">
      <div className="position-absolute top-50 start-50 translate-middle w-50 p-3">
        <form className='p-3 form cuadro' onSubmit={handleSubmit}>
          <div className="mb-3">
            <h2 className="text-center">LOGIN LP</h2>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario</label>
            <input name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Ingrese su usuario" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingrese su contraseña" />
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={'on'} name="remember" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Recordarme
            </label>
          </div>
          <div className="mb-3">
            <button type='submit' className='Botón'>Ingresar</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Login;
