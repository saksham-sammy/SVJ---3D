import './Collections.css'
import { useRef, useState } from 'react'

const cards = [
  {
    tag: 'Signature',
    name: 'Bridal Collection',
    desc: 'Complete sets crafted for the most important day. Gold, kundan, and diamond ensembles.',
    icon: '◆',
    span: 'tall',
  },
  {
    tag: 'Everyday',
    name: 'Gold Necklaces',
    desc: 'Delicate chains to layered statement pieces in 22K gold.',
    icon: '✦',
  },
  {
    tag: 'Premium',
    name: 'Earrings',
    desc: 'Jhumkas, studs, drops and chandeliers — for every occasion.',
    icon: '✧',
  },
  {
    tag: 'Traditional',
    name: 'Bangles & Kadas',
    desc: 'Precision-crafted traditional and contemporary bangles.',
    icon: '◇',
  },
  {
    tag: 'Luxury',
    name: 'Diamond Rings',
    desc: 'Solitaires and pavé settings that celebrate your milestones.',
    icon: '◆',
  },
]

function CollectionCard({ card, index }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    setTransform(`perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`)
  }
  const onMouseLeave = () => setTransform('')

  return (
    <div
      ref={cardRef}
      className={`coll-card reveal${card.span === 'tall' ? ' coll-card--tall' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="coll-card-inner" style={{ transform }}>
        {/* 3D Depth Layer */}
        <div className="coll-card-depth" />

        {/* Radial glow on hover */}
        <div className="coll-card-glow" />

        {/* Corner accent */}
        <div className="coll-card-corner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 24 L0 0 L24 0" stroke="rgba(201,168,76,0.4)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="coll-card-corner coll-card-corner--br">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 0 L24 0 L24 24" stroke="rgba(201,168,76,0.4)" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <div className="coll-card-icon-wrap">
          <span className="coll-card-icon">{card.icon}</span>
        </div>

        <div className="coll-card-content">
          <span className="coll-card-tag">{card.tag}</span>
          <h3 className="coll-card-name">{card.name}</h3>
          <p className="coll-card-desc">{card.desc}</p>
          <a href="#contact" className="coll-card-link">
            Enquire <span className="coll-card-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="collections-header">
        <div className="reveal">
          <div className="section-label">
            <span className="gold-line" />
            Our Collection
          </div>
          <h2 className="section-title">
            Timeless <em>Pieces</em><br />for Every Occasion
          </h2>
        </div>
        <a href="#contact" className="btn-ghost reveal reveal-delay-2">
          View All <span>→</span>
        </a>
      </div>

      <div className="collections-grid">
        {cards.map((card, i) => (
          <CollectionCard key={i} card={card} index={i} />
        ))}
      </div>

      <p className="collections-swipe">← Swipe to explore →</p>
    </section>
  )
}
