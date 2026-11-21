import './About.css'

// SVJ brand logo (the ornate crown design)
const SVJ_LOGO = 'data:image/jpeg;base64,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'

const values = [
  { icon: '◆', name: 'Purity', desc: 'Hallmarked 22K gold. BIS-certified. No compromises on quality.' },
  { icon: '◆', name: 'Trust', desc: 'Fair pricing, transparent dealings — since day one.' },
  { icon: '◆', name: 'Custom', desc: 'Bring your vision. We\'ll craft it into reality.' },
  { icon: '◆', name: 'Legacy', desc: 'Jewellery meant to be passed down through generations.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      {/* Background 3D grid lines */}
      <div className="about-grid-lines" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="about-grid-line" />
        ))}
      </div>

      <div className="about-visual reveal">
        {/* Layered 3D frames */}
        <div className="about-frame about-frame--3" />
        <div className="about-frame about-frame--2" />
        <div className="about-frame about-frame--1">
          <div className="about-frame-inner">
            {/* Emblem */}
            <div className="about-emblem">
              <div className="about-emblem-visual">
                {/* Rotating ring */}
                <div className="about-ring">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" stroke="rgba(201,168,76,0.2)" strokeWidth="1" strokeDasharray="4 8"/>
                    <circle cx="100" cy="100" r="70" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
                    <circle cx="100" cy="10" r="3" fill="rgba(201,168,76,1)" />
                  </svg>
                </div>
                <div className="about-emblem-circle">
                  <img src={SVJ_LOGO} alt="SVJ — Suraj Varma Jewellers" />
                </div>
              </div>
              <span className="about-emblem-sub">Suraj Varma Jewellers</span>
            </div>
          </div>
        </div>

        <div className="about-badge">
          <span className="about-badge-num">25+</span>
          <span className="about-badge-label">Years</span>
        </div>

        {/* Floating 3D accent */}
        <div className="about-float-gem">◆</div>
      </div>

      <div className="about-text">
        <div className="section-label reveal">
          <span className="gold-line" />
          Our Story
        </div>
        <h2 className="section-title reveal reveal-delay-1">
          Where <em>Tradition</em><br />Meets Craft
        </h2>
        <p className="about-body reveal reveal-delay-2">
          Suraj Varma Jewelers was built on a simple belief: every person deserves
          jewellery that feels personal, precious, and perfectly made. Nestled in
          Pashan Gaon, Pune, our store has served generations of families who trust
          us with their most meaningful moments — weddings, anniversaries, and everyday joy.
          <br /><br />
          We source the finest gold and gemstones, and each piece passes through
          the skilled hands of our craftsmen before it reaches yours.
        </p>

        <div className="about-values">
          {values.map((v, i) => (
            <div key={i} className={`about-value reveal reveal-delay-${i + 1}`}>
              <div className="about-value-icon">{v.icon}</div>
              <div className="about-value-name">{v.name}</div>
              <div className="about-value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
