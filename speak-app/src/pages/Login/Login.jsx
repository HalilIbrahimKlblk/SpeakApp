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
        window.location.href = '/Admin';
      }, 1000);
    } else {
      setError('Kullanıcı adı veya parola hatalı.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <a href='/'><img src='/img/logo.png' className='login-logo'/></a>
      <div className="login-container">
        <label className="labels" htmlFor="name">Kullanıcı Adı</label>
        <input
          className="inputs"
          placeholder="Kullanıcı adını giriniz"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="labels" htmlFor="password">Parola</label>
        <input
          className="inputs"
          placeholder="Parolanızı giriniz"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="greenbutton" type="submit">Giriş</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata Mesajı */}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Başarı Mesajı */}
        <label>
          <input className="form-checkbox" type="checkbox" defaultChecked name="remember" /> Beni Hatırla
        </label>
      </div>
      <div className="login-container">
        <button type="button" className="bluebtn" onClick={() => navigate('/Logon')}>Kayıt Ol</button>
        <span className="psw"><a href="/Reset">Şifremi Unuttum?</a></span>
      </div>
    </form>
  );
};

export default Login;
