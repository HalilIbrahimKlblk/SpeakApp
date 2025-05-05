import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (username === 'admin' && password === 'admin') {
      setSuccessMessage('Admin Olarak Giriş Yapıldı!');
      setTimeout(() => {
        navigate('/Admin');
      }, 1000);
    } else {
      setError('Kullanıcı adı veya parola hatalı.');
    }
  };

  return (
    <>
      <p className="info-text"> Dijital Konuşma Terapisi sistemine hoş geldiniz. Giriş yaparak terapi sürecinize kaldığınız yerden devam edebilirsiniz.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <a href='/'><img src='/img/logo.png' alt="Logo" className='login-logo' /></a>
        <div className="login-container">
          <label className="labels" htmlFor="username">Kullanıcı Adı</label>
          <input
            id="username"
            className="inputs"
            placeholder="Kullanıcı adını giriniz"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="labels" htmlFor="password">Parola</label>
          <input
            id="password"
            className="inputs"
            placeholder="Parolanızı giriniz"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="greenbutton" type="submit">Giriş</button>

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <label>
            <input className="form-checkbox" type="checkbox" defaultChecked name="remember" />
            Beni Hatırla
          </label>
        </div>

        <div className="login-container">
          <button type="button" className="bluebtn" onClick={() => navigate('/Logon')}>Kayıt Ol</button>
          <span className="psw"><a href="/Reset">Şifremi Unuttum?</a></span>
        </div>
      </form>
      <p className="info-text">
        Herhangi bir sorunla karşılaşırsanız lütfen sistem yöneticisiyle iletişime geçin veya destek sayfamızı ziyaret edin.
      </p>
      <p className="info-text">
        Giriş yapmak istemiyorsanız <a href="/" className="link-text">ana menüye</a> dönebilirsiniz.
      </p>
    </>
  );
};

export default Login;
