import React from 'react'
import './Logon.css'
import { useNavigate } from 'react-router-dom';

const Logon = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="info-text"> Dijital Konuşma Terapisi sistemine hoş geldiniz. Giriş yaparak terapi sürecinize kaldığınız yerden devam edebilirsiniz.</p>
      <form className="logon-form" onSubmit={(e) => { e.preventDefault(); navigate('/Login'); }}>
        <div className="imgcontainer">
          <img src="/img/user.svg" alt="Avatar" className="avatar" />
        </div>
        <div className="logon-container">
          <label className="labels" htmlFor="firstName">Ad</label>
          <input className="inputs" id="firstName" name="firstName" type="text" placeholder="*Adınızı giriniz" required />

          <label className="labels" htmlFor="lastName">Soyad</label>
          <input className="inputs" id="lastName" name="lastName" type="text" placeholder="*Soyadınızı giriniz" required />

          <label className="labels" htmlFor="email">E-Posta</label>
          <input className="inputs" id="email" name="email" type="email" placeholder="*E-Posta adresini giriniz" required />

          <label className="labels" htmlFor="username">Kullanıcı Adı</label>
          <input className="inputs" id="username" name="username" type="text" placeholder="*Kullanıcı adını giriniz" required />

          <label className="labels" htmlFor="password">Parola</label>
          <input className="inputs" id="password" name="password" type="password" placeholder="*Parolanızı giriniz" required minLength={6} />

          <label className="labels" htmlFor="confirmPassword">Parola Tekrar</label>
          <input className="inputs" id="confirmPassword" name="confirmPassword" type="password" placeholder="*Parolanızı tekrar giriniz" required minLength={6} />

          <label className="checkbox-label">
            <input className="form-checkbox" type="checkbox" name="dataTransfer" required />Verilerimin yurt dışına aktarılmasını onaylıyorum.
          </label>

          <label className="checkbox-label">
            <input className="form-checkbox" type="checkbox" name="kvkk" required /><a className="form-kvk" href='/Kvk'>KVKK</a> okudum, onaylıyorum.
          </label>

          <button type="submit" className="greenbutton">Kayıt Ol</button>
        </div>
        <div className="login-container container-flex">
          <label className="checkbox-label">
            <input className="form-checkbox" type="checkbox" name="rememberMe" />Beni Hatırla
          </label>
          <a className="redbtn" href='/'>Ana Menü</a>
        </div>
      </form>
      <p className="info-text">
        Herhangi bir sorunla karşılaşırsanız lütfen sistem yöneticisiyle iletişime geçin veya destek sayfamızı ziyaret edin.
      </p>
    </>
  )
}

export default Logon


