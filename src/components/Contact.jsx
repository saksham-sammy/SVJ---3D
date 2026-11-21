import './Contact.css'
import { useState } from 'react'

const contactInfo = [
  {
    icon: '◆',
    label: 'Address',
    value: 'Pashan Gaon, Near K.C. Oza,\nPune – 411021, Maharashtra',
  },
  {
    icon: '✦',
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: '✧',
    label: 'Store Hours',
    value: 'Mon – Sat: 10:00 AM – 8:30 PM\nSunday: 11:00 AM – 5:00 PM',
  },
  {
    icon: '◇',
    label: 'Instagram',
    value: '@suraj_varma_jewellars',
    href: 'https://www.instagram.com/suraj_varma_jewellars/',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', category: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', phone: '', category: '', message: '' })
    }, 4000)
  }

  return (
    <section className="contact" id="contact">
      {/* Ambient glow */}
      <div className="contact-glow" />

      {/* Info side */}
      <div className="contact-info">
        <div className="section-label reveal">
          <span className="gold-line" />
          Find Us
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          Visit Our <em>Store</em>
        </h2>
        <p className="contact-intro reveal reveal-delay-2">
          We'd love to welcome you. Walk in to browse our collections
          or send us a message for a custom order or enquiry.
        </p>

        <div className="contact-items">
          {contactInfo.map((item, i) => (
            <div key={i} className={`contact-item reveal reveal-delay-${i + 1}`}>
              <span className="contact-item-icon">{item.icon}</span>
              <div>
                <div className="contact-item-label">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="contact-item-value contact-item-value--link"
                     target={item.href.startsWith('http') ? '_blank' : undefined}
                     rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <div className="contact-item-value">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/919876543210?text=Hi%20SVJ%2C%20I%20am%20interested%20in%20your%20jewellery%20collection."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-cta reveal reveal-delay-4"
        >
          <span className="whatsapp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          Chat on WhatsApp
        </a>
      </div>

      {/* Enquiry form */}
      <div className="contact-form-wrap reveal reveal-delay-2 glass-card">
        <div className="contact-form-header">
          <h3 className="contact-form-title">Send an Enquiry</h3>
          <p className="contact-form-sub">We'll get back to you within 2 hours</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Aarav Shah"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                className="form-input"
                type="tel"
                placeholder="+91 9XXXXXXXXX"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Interested In</label>
            <select
              className="form-select"
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              required
            >
              <option value="" disabled>Select a category…</option>
              <option>Bridal Gold Set</option>
              <option>Diamond Ring</option>
              <option>Gold Necklace / Earrings</option>
              <option>Bangles / Kadas</option>
              <option>Polki / Kundan</option>
              <option>Custom Design</option>
              <option>Repair &amp; Polishing</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Message (Optional)</label>
            <textarea
              className="form-textarea"
              placeholder="Tell us about your dream jewellery…"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>

          <button type="submit" className={`form-submit${sent ? ' sent' : ''}`}>
            {sent ? '✓ Enquiry Sent!' : 'Send Enquiry →'}
          </button>

          {sent && (
            <p className="form-success">
              ✦ Your message has been sent. We'll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
