import { useState } from 'react';
import logoimg from './imagens/logotipo.png'
import imgetec from './imagens/logotipo.png'
import './styles.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  return (
    <div className="container">
      <div className='imgEtec'>
        <img src={imgetec} id="etechub" alt='logotipo'></img>
      </div>
      
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"></span>
            <span className="login-form-title">
              <img src={logoimg} alt="logotipo"></img>
            </span>
            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email}
              onChange={e => setEmail(e.target.value)}
              ></input>
              <span className="focus-input" data-placeholder="Email:"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password}
              onChange={e => setPassword(e.target.value)}
              ></input>
              <span className="focus-input" data-placeholder="Senha:"></span>
            </div>

            <div className="wrap-input">
              <input className={password2 !== "" ? 'has-val input' : 'input'} type="password" value={password2}
              onChange={e => setPassword2(e.target.value)}
              ></input>
              <span className="focus-input" data-placeholder="Repita a senha:"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar-se</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui conta?</span>

              <a className="txt2" href='https://tic-em-trilhas.github.io/Tela-login/'>Entrar.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
