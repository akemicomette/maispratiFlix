import './login.css';

export function Login () {
  return (
    <div className="login-container">
      <h1 className="login-title">Entrar</h1>

      <input className="login-email" type="text" placeholder="Email ou número de celular" />
      <input className="login-password" type="password" placeholder="Senha" />

      <button className="login-button">Entrar</button>
      <p className="login-or">OU</p>
      <button className="login-code-button">Usar um código de acesso</button>
      <a className="login-forgot" href="#">Esqueceu a senha?</a>

      <div>
        <input id="login-remindMe" type="checkbox" />
        <label htmlFor="login-remindMe" className="login-checkbox-label">Lembre-se de mim</label>
      </div>

      <div>
        <span className="login-signature">Novo por aqui?</span>
        <a className="login-signature-link" href="#">Assine agora.</a>
      </div>

      <div className="login-recaptcha">
        <span >Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</span>
        <a className="login-know-more" href="#">Saiba mais.</a>
      </div>

    </div>
  )
}