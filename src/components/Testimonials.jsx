import './Testimonials.css'

const testimonials = [
  {
    stars: 5,
    text: '"We got our entire bridal set made here. The craftsmanship is unmatched and Suraj bhai guided us so patiently through every single decision."',
    name: 'Priya Sharma',
    loc: 'Pashan, Pune',
    init: 'P',
  },
  {
    stars: 5,
    text: '"Bought a gold necklace for my mother\'s birthday. The quality is exceptional and the price was very fair. Highly recommended to everyone!"',
    name: 'Rohit Kulkarni',
    loc: 'Baner, Pune',
    init: 'R',
  },
  {
    stars: 5,
    text: '"I\'ve been coming here for over 10 years. The trust, quality and service keep me coming back. SVJ is truly our family jeweller."',
    name: 'Anita Deshmukh',
    loc: 'Aundh, Pune',
    init: 'A',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      {/* Giant decorative quote */}
      <div className="testimonials-quote" aria-hidden="true">"</div>

      <div className="testimonials-header">
        <div className="section-label reveal">
          <span className="gold-line" />
          Client Love
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          What Our <em>Customers</em> Say
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className={`testi-card reveal reveal-delay-${i + 1} glass-card`}>
            <div className="testi-stars">
              {'★'.repeat(t.stars)}
            </div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.init}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-loc">{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
