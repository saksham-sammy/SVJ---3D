import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-map">
        <iframe
          title="SVJ Location"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7884877766064!2d73.79048018478285!3d18.538457923672656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1d96270dbf%3A0xc8f86d77e4cd471e!2sSuraj%20varma%20jewellars!5e0!3m2!1sen!2sin!4v1778078113898!5m2!1sen!2sin"
        />
        <div className="footer-map-bar">
          <div>
            <span className="footer-map-label">Our Location</span>
            <span className="footer-map-address">Pashan Gaon, Near K.C. Oza, Pune – 411021</span>
          </div>
          <a
            href="https://maps.app.goo.gl/TmudB25bEKmSKpD26"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Open in Maps →
          </a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <div className="footer-logo-emblem">SVJ</div>
            <span className="footer-logo-name">Suraj Varma Jewellers</span>
          </div>
          <p className="footer-brand-desc">
            Crafting fine jewellery in Pune since decades. Every piece
            is a promise of purity, artistry, and timeless elegance.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Collections</h4>
          <ul>
            {['Bridal Sets','Necklaces','Earrings','Bangles','Diamond Rings'].map(l => (
              <li key={l}><a href="#collections">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul>
            {['Custom Orders','Repair & Polish','Gold Exchange','Consultation'].map(l => (
              <li key={l}><a href="#contact">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Visit</h4>
          <ul>
            <li><a href="#contact">Our Store</a></li>
            <li><a href="https://www.instagram.com/suraj_varma_jewellars/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#process">Craftsmanship</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © {year} SVJ — Suraj Varma Jewellers &nbsp;·&nbsp; Pashan Gaon, Pune
        </span>
        <div className="footer-social">
          <a href="https://www.instagram.com/suraj_varma_jewellars/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
