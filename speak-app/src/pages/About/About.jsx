import React from 'react';
import './About.css';
import Team from '../../components/Team/Team';

export const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Dil ve Konuşma Terapisinde Dijital Dönüşüm</h1>
        <p>
          Yapay zekâ destekli egzersizler ve oyunlaştırılmış terapi süreçleriyle, iletişimi yeniden tanımlıyoruz.
        </p>
        <img src="/img/speak.png" alt="Dijital Terapi" className="hero-image" width={250}/>
      </section>

      {/* About Section */}
      <section className="section">
        <h2>Hakkımızda</h2>
        <p>
          Biz, dil ve konuşma bozukluğu yaşayan bireylerin hayatlarını kolaylaştırmak amacıyla bir araya gelmiş bir ekip olarak, teknoloji ve insan odaklı çözümler üretmeye odaklanıyoruz.
          Yapay zeka destekli egzersizler, oyunlaştırma unsurları ve kişiselleştirilmiş gelişim planları sunarak, terapi sürecini daha verimli, eğlenceli ve erişilebilir hale getirmeyi amaçlıyoruz.
          Ekibimiz, yazılım geliştiricilerinden oyun tasarımcılarına kadar farklı alanlarda uzmanlaşmış profesyonellerden oluşuyor.
        </p>
        <p>
          Projemiz, dil ve konuşma bozukluğu yaşayan bireylerin toplumsal yaşamda karşılaştığı iletişim zorluklarına dikkat çekerek doğdu.
          Gerçek gözlemler ve bireylerle yapılan görüşmeler, bu insanların terapi süreçlerinde karşılaştıkları engelleri ortaya koydu.
          Bu sorunlara çözüm üretmek amacıyla, dijital terapilerin etkisini artıran bir platform geliştirmeye karar verdik.
        </p>
      </section>
      {/* Mission & Vision */}
      <section className="section">
        <h2>Misyonumuz</h2>
        <p>
        Bireylerin konuşma ve dil gelişim süreçlerine bilimsel temelli, kişiselleştirilmiş ve oyunlaştırılmış dijital egzersizlerle katkıda bulunmak; terapi sürecini daha etkili, sürdürülebilir ve motive edici hale getirmek. Aynı zamanda uzmanlarla bireyleri güvenli bir platformda buluşturarak sürekli destek sağlamak.
        </p>

        <h2>Vizyonumuz</h2>
        <p>
        Dil ve konuşma bozuklukları yaşayan bireylerin hayat kalitesini artırmak amacıyla, yapay zeka destekli dijital terapilerle herkese eşit, erişilebilir ve etkili bir destek sunarak alanında öncü bir platform olmak.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Ekibimiz</h2>
        <div className="team-grid">
          {/* Team Member */}     
          <Team img="/img/halilibrahimkalabalik.jpg" name="Halil İbrahim Kalabalık" duty="Proje Yürütücüsü" mail="halilkalabalik64@gmail.com" linkedln="halil-ibrahim-kalabalik" github="HalilIbrahimKlblk" instagram="h_ibrahim_klblk"/>
          <Team img="/img/ozgegenc.jpg" name="Özge Genç" duty="Web Tasarımcı" mail="ozge.gnc3@gmail.com" linkedln="%C3%B6zge-gen%C3%A7-08162228a" github="default" instagram="default"/>
          <Team img="/img/aysenurer.jpg" name="Ayşenur Er" duty="Oyun Tasarımı" mail="aysenurer2018@gmail.com" linkedln="ay%C5%9Fenur-er-78061a172" github="default" instagram="default"/>
          <Team img="/img/huseyinyanik.jpg" name="Hüseyin Yanık" duty="Danışman" mail="huseyinyanik@mersin.edu.tr" linkedln="default" github="default" instagram="h_ibrahim_klblk"/>
        </div>
      </section>
    </div>
  );
};

export default About;
