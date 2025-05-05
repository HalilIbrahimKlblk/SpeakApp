import React from 'react';
import './Exercise.css';
import { Container, Row, Col } from 'react-bootstrap';
import Post from '../../components/Post/Post';

const Exercise = () => {
  return (
    <Container>
      <h2 className="exercise-title">Dil ve Konuşma Egzersizleri</h2>

      {/* Konuşma Egzersizleri */}
      <h4 className="section-title">🗣️ Konuşma Egzersizleri</h4>
      <Row>
        <Col md={4}><Post title="Harf Tekrarı" description="‘R’ harfini 10 kez net şekilde söyleyin ve ‘R’ ile başlayan 10 kelime söyleyin." level="Kolay" /></Col>
        <Col md={4}><Post title="Kelime Ayırt Etme" description="‘Kalem’ ve ‘Kalemlik’ gibi benzer kelimeleri sesli bir şekilde ayırt edin." level="Orta" /></Col>
        <Col md={4}><Post title="Cümle Kurma" description="‘Bugün parka gittim ve salıncağa bindim.’ gibi bir beş farklı cümle kurun." level="Zor" /></Col>
      </Row>

      {/* Nefes Egzersizleri */}
      <h4 className="section-title">🌬️ Nefes Egzersizleri</h4>
      <Row>
        <Col md={4}><Post title="Derin Nefes Alma" description="4 saniye nefes al, 4 saniye tut, 4 saniyede bırak." level="Kolay" /></Col>
        <Col md={4}><Post title="Uzun Ses Egzersizi" description="‘aaaa’ sesini tek nefeste olabildiğince uzun çıkar." level="Orta" /></Col>
        <Col md={4}><Post title="Nefes Sayımı" description="Nefes alırken 1'den 10'a kadar yavaşça say." level="Orta" /></Col>
      </Row>

      {/* Ses Egzersizleri */}
      <h4 className="section-title">🔊 Ses Egzersizleri</h4>
      <Row>
        <Col md={4}><Post title="Yüksek Sesle Sayma" description="1'den 10'a kadar sesli ve net şekilde sayın." level="Kolay" /></Col>
        <Col md={4}><Post title="Ses Tonlama" description="Aynı kelimeyi farklı tonlamalarla tekrar edin." level="Orta" /></Col>
        <Col md={4}><Post title="Ses Taklidi" description="Kuş, rüzgar veya motor sesi gibi seslerini taklit edin." level="Zor" /></Col>
      </Row>

      {/* Anlamlandırma Egzersizleri */}
      <h4 className="section-title">🧠 Anlamlandırma Egzersizleri</h4>
      <Row>
        <Col md={4}><Post title="Nesne Tanımı" description="Yakınınızdaki 3 nesneyi sesli bir şekilde tanımlayarak fiziksel özelliklerini anlatın." level="Kolay" /></Col>
        <Col md={4}><Post title="Duygu Cümlesi" description="‘Bugün mutlu hissediyorum çünkü...’ cümlesini tamamlayın." level="Orta" /></Col>
        <Col md={4}><Post title="Hikaye Oluşturma" description="‘Bir gün ormanda yürürken...’ ile başlayan kısa bir hikaye kurun." level="Zor" /></Col>
      </Row>
    </Container>
  );
};

export default Exercise;
