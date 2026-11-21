import './Hero.css'

export default function Hero() {
  const stats = [
    { num: '25+',   label: 'Years of Trust'  },
    { num: '2000+', label: 'Happy Clients'   },
    { num: '22K',   label: 'Gold Purity'     },
    { num: '500+',  label: 'Designs'         },
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero-showcase">
        <video 
          src="/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
        ></video>
        <div className="hero-showcase-fade" />
      </div>

      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />

      <div className="hero-content">
        <div className="hero-eyebrow reveal">
          <span className="gold-line" />
          Est. in Pune &nbsp;·&nbsp; Pashan Gaon
        </div>
        <h1 className="hero-title reveal reveal-delay-1">
          Crafted<br />with <em>Gold,</em><br />Worn with<br /><em>Pride.</em>
        </h1>
        <p className="hero-desc reveal reveal-delay-2">
          At SVJ, every piece tells a story. Rooted in tradition,
          refined by artistry — our jewellery is made for moments
          that last a lifetime.
        </p>
        <div className="hero-actions reveal reveal-delay-3">
          <a href="#collections" className="btn-gold">Explore Collections</a>
          <a href="#contact" className="btn-ghost">Visit Store <span>→</span></a>
        </div>
      </div>

      <div className="hero-scroll reveal reveal-delay-4">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="hero-stats">
        {stats.map(({ num, label }, i) => (
          <div key={i} className="hero-stat reveal" style={{ transitionDelay: `${0.5 + i * 0.08}s` }}>
            <span className="hero-stat-num">{num}</span>
            <span className="hero-stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
