import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Comment from '../../components/Comment/Comment';
import Faq from '../../components/Faq/Faq';

const images = [
  '/img/slayder1.png',
  '/img/slayder2.png',
  '/img/slayder3.png',
  '/img/slayder4.png',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız alınmıştır.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <div className="slider-container">
        <button className="nav-button left" onClick={goToPrev}>&lt;</button>
        <img src={images[currentIndex]} className="speak-img" alt={`slide-${currentIndex}`} />
        <button className="nav-button right" onClick={goToNext}>&gt;</button>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <h1 className="speak-h1">Konuşma Terapisti</h1>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="text-center">
            <div className='speak-genel'>
              <h2>🗣️ Konuşmaya Güç Kat, Terapiyi Dijitale Taşı!</h2>
              <p className='speak-p'>Yapay zekâ destekli mobil uygulamamız, dil ve konuşma bozukluğu yaşayan bireyler için kişiselleştirilmiş egzersizler, ses tanıma ve oyunlaştırma teknikleriyle terapi sürecini daha etkili, keyifli ve erişilebilir hale getiriyor. Artık konuşmak daha kolay, gelişmek daha hızlı!</p>
              <p className='speak-p'>Dil ve konuşma bozukluklarıyla mücadele eden bireyler için geliştirilen bu yenilikçi mobil uygulama, yapay zekâ ile güçlendirilmiş interaktif egzersizlerle terapi sürecini dijital ortama taşıyor. Kişiye özel geri bildirimler, eğlenceli görevler ve motivasyon artırıcı ödüllerle konuşma gelişimi artık daha etkili ve sürdürülebilir!</p>
              <div className='div-login-flex'>
                <a href='/Logon' className='login-a'>HEMEN KAYIT OL</a>
                <img src='/img/logo2.png' width={180} />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="text-center">
            <img src='/img/app.png' className='app-img' />
          </Col>
        </Row>
      </Container>
      <h1 className="speak-h1">Uygulamanın Özellikleri</h1>
      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-user-check"></i>
          <h3>Kişiselleştirilmiş Egzersizler</h3>
          <p>İhtiyaçlara özel konuşma, okuma ve anlama egzersizleri.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-microphone"></i>
          <h3>Yapay Zekâ Destekli Konuşma Tanıma</h3>
          <p>Telaffuz analizi ve anında geri bildirim.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h3>Gelişim Takibi</h3>
          <p>Performans analizleri ile ilerlemeyi izleme.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-headset"></i>
          <h3>Uzman Desteği</h3>
          <p>Canlı terapist bağlantısı ile profesyonel destek.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-gamepad"></i>
          <h3>Oyunlarla Terapi</h3>
          <p>Eğlenceli görevler ile süreci keyifli hale getirin.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-brain"></i>
          <h3>Psikolojik Destek</h3>
          <p>Rehberlik ve destekleyici içerikler.</p>
        </div>
      </div>
      <h1 className="speak-h1">Kullanıcı Yorumları</h1>
      <Comment img={"/img/ahmet.jpg"} username={"Ahmet"} comment={"Uygulamayı yaklaşık bir aydır kullanıyorum ve konuşma bozukluğum üzerinde ciddi etkileri oldu. Egzersizler hem eğlenceli hem de hedefe yönelik hazırlanmış. Günlük tekrarlar sayesinde kelimeleri daha rahat telaffuz edebiliyorum. Özellikle yapay zekâ destekli geri bildirim sistemi çok etkileyici çok hoşuma gitti."} />
      <Comment img={"/img/mehmet.jpg"} username={"Mehmet"} comment={"Başta biraz tereddüt etmiştim ama düzenli kullandıkça gerçekten işe yaradığını gördüm. Özellikle kişiselleştirilmiş içerikler oldukça motive edici oluyor."} />
      <Comment img={"/img/hasan.png"} username={"Hasan"} comment={"Uzun süredir kekemelik problemi yaşıyordum ve bu uygulamayı öneri üzerine denemeye karar verdim. İlk başta biraz zorlandım ama düzenli kullanım sonrası özgüvenim arttı. Özellikle doğru nefes alma ve sesli okuma bölümleri benim için çok yararlı oldu."} />
      <h1 className="speak-h1">Sıkça Sorulan Sorular (SSS)</h1>
      <Faq question={"1. Uygulama üzerinden gerçek bir konuşma terapistiyle görüşebilir miyim?"} answer={"Evet, uygulama içerisinde randevu alarak terapistlerle canlı görüşme yapabilirsiniz."} />
      <Faq question={"2. Uygulamayı kullanmak için konuşma terapisti desteği şart mı?"} answer={"Hayır, bireysel kullanım mümkündür. Ancak bir terapist eşliğinde kullanıldığında daha etkili sonuçlar alınabilir."} />
      <Faq question={"3. Uygulama hangi konuşma bozukluklarına yönelik destek sunar?"} answer={"Artikülasyon bozuklukları, akıcılık sorunları, dil gelişimi ve ses bozukluklarına yönelik egzersizler içerir."} />
      <Faq question={"4. Uygulama internet bağlantısı olmadan çalışır mı?"} answer={"Bazı içeriklere çevrimdışı erişilebilir, ancak egzersizlerin güncellenmesi ve terapist desteği gibi özellikler için internet bağlantısı gereklidir."} />
      <Faq question={"5. Egzersizler yaşa göre uyarlanıyor mu?"} answer={"Evet, uygulama kullanıcıların yaşına ve seviyesine göre egzersizler önerir. Kayıt sırasında verilen bilgilere göre kişiselleştirilmiş içerik sunulur."} />
      <Faq question={"6. Verilerim güvende mi?"} answer={"Evet, kullanıcı verileri yüksek güvenlik standartlarına uygun şekilde şifrelenerek saklanır ve üçüncü kişilerle paylaşılmaz."} />
      <div className="row form-genel">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="contact-form sol-from">
            <h2>Bize Ulaşın <i className="fa-regular fa-comment-dots"></i></h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">Adınız:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="email">E-posta:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="subject">Konu:</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              <label htmlFor="message">Mesajınız:</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Gönder</button>
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="contact-form sağ-from">
            <div className="location">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="yazi">Mersin Türkiye 33770</div>
            </div>
            <div className="location">
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="yazi">
                <a href="mailto:technolasteam@gmail.com">konusmaterapıstı@gmail.com</a>
              </div>
            </div>
            <div className="location">
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="yazi">
                <a href="https://www.instagram.com/">Instagram</a>
              </div>
            </div>
            <div className="location">
              <div className="icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="yazi">
                <a href="https://www.youtube.com/">Youtube</a>
              </div>
            </div>
            <div className="location">
              <div className="logolar">
                <img src="img/t3.png" alt="logo1" />
                <img src="img/mersintto.png" alt="logo2" />
                <img src="img/mthh.jpg" alt="logo3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;