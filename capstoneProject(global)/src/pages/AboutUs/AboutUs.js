import React from 'react'
import "./aboutus.css"
import Safe from 'react-safe'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const AboutUs = () => {
    return (
        <>
        <div className="section">
          <h1>Tentang website kami</h1>
          <p>Kami menyediakan layanan konsultasi yang berkaitan psikologi</p> 
        </div>
        <div className="container">
            <div class="deskripsi_container">
              <div class="deskripsi about-us"></div>
              <div class="deskripsi deskripsi-2"><h1 class="judul_deskripsi">Kami adalah Agent of Change Sehat Mental di Indonesia</h1></div>
              <div class="deskripsi deskripsi-3"><p class="teks_deskripsi">MindHealth adalah aplikasi kesehatan mental di Indonesia, kami mempunyai misi untuk memberikan kemudahan kepada semua orang dalam mengakses layanan kesehatan mental yang terintegratif.</p></div>
            </div>
        </div>
        <div className="container">
            <div class="deskripsi_container">
              <div class="deskripsi deskripsi-2"><h1 class="judul_deskripsi">Kami memulainya dari...</h1></div>
              <div class="deskripsi deskripsi-3"><p class="teks_deskripsi">Self Diagnose atau Upaya Mendiagnosa Diri Sendiri sebenarnya menunjukkan bahwa ada kesadaran masyarakat dalam hal ini individunya akan kesehatan mental dirinya sendiri. Namun, tetap harus melibatkan peran profesional untuk menganalisis lebih lanjut serta memberikan penanganan. Dengan begitu kami Tim MindHealth memiliki tujuan untuk membuka layanan kesehatan mental kepada masyarakat untuk bisa menjadi individu yang lebih optimal.</p></div>
              <div class="deskripsi about-us-2"></div>
            </div>
        </div>
        <div className='saran'>
          <p>Punya saran, pertanyaan, masukan, kritik, atau menemukan bugs di website ini?</p>
        </div>
        <div id="disqus_thread" className='disqus' />
        <Safe.script>
          {
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://tangandiatas-id.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })()
          }
        </Safe.script>
        </>
    )
}
export default AboutUs;