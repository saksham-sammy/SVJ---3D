import './Collections.css'
import { useRef, useState } from 'react'

const cards = [
  {
    tag: 'Signature',
    name: 'Bridal Collection',
    desc: 'Complete sets crafted for the most important day. Gold, kundan, and diamond ensembles.',
    icon: '◆',
    image: '/images/hero-editorial.jpg',
    span: 'tall',
  },
  {
    tag: 'Everyday',
    name: 'Gold Necklaces',
    desc: 'Delicate chains to layered statement pieces in 22K gold.',
    icon: '✦',
    image: '/images/col-diamond-pendant-set.jpg',
  },
  {
    tag: 'Premium',
    name: 'Earrings',
    desc: 'Jhumkas, studs, drops and chandeliers — for every occasion.',
    icon: '✧',
    image: '/images/col-gold-hoops.jpg',
  },
  {
    tag: 'Traditional',
    name: 'Bangles & Kadas',
    desc: 'Precision-crafted traditional and contemporary bangles.',
    icon: '◇',
    image: '/images/col-gold-kada.jpg',
  },
  {
    tag: 'Luxury',
    name: 'Diamond Rings',
    desc: 'Solitaires and pavé settings that celebrate your milestones.',
    icon: '◆',
    image: '/images/col-halo-ring.jpg',
  },
]

const galleryHighlights = [
  {
    title: 'Rajwada Bridal Thali',
    meta: '22K Heritage Gold',
    image: '/images/col-bridal-thali.jpg',
  },
  {
    title: 'Lumière Solitaire Suite',
    meta: 'Natural Diamonds',
    image: '/images/col-diamond-suite.jpg',
  },
  {
    title: 'Seraphina Pavé Cuff',
    meta: '18K Champagne Gold',
    image: '/images/col-serpenti-cuff.jpg',
  },
  {
    title: 'Vikram Sovereign Edit',
    meta: "Men's 22K Gold",
    image: '/images/col-mens-gold.jpg',
  },
  {
    title: 'Quiet Brilliance',
    meta: 'Bridal Solitaires',
    image: '/images/editorial-campaign.jpg',
  },
  {
    title: 'Karigar Atelier',
    meta: 'Handcrafted in Pune',
    image: '/images/craftsmanship-atelier.jpg',
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
        {/* 3D Depth Layer + Curated Photography */}
        <div className="coll-card-depth">
          <img
            src={card.image}
            alt={card.name}
            loading="lazy"
            className="coll-card-photo"
          />
        </div>

        {/* Radial glow on hover */}
        <div className="coll-card-glow" />

        {/* Corner accent */}
        <div className="coll-card-corner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 24 L0 0 L24 0" stroke="rgba(201,168,76,0.55)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="coll-card-corner coll-card-corner--br">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 0 L24 0 L24 24" stroke="rgba(201,168,76,0.55)" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <div className="coll-card-content">
          <span className="coll-card-tag">{card.tag}</span>
          <h3 className="coll-card-name">{card.name}</h3>
          <p className="coll-card-desc">{card.desc}</p>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi SVJ, I would like to enquire about your ${card.name}.`)}`}
            target="_blank"
            rel="noreferrer"
            className="coll-card-link"
          >
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

      {/* Curated Photographic Showcase Strip */}
      <div className="showcase-strip reveal">
        <div className="showcase-strip-head">
          <span className="section-label">
            <span className="gold-line" />
            Atelier Gallery
          </span>
          <span className="showcase-strip-note">Handpicked Gold, Diamond &amp; Bridal Creations</span>
        </div>

        <div className="showcase-strip-grid">
          {galleryHighlights.map((item, idx) => (
            <a
              key={idx}
              href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi SVJ, I saw "${item.title}" (${item.meta}) on your website and would like to know more.`)}`}
              target="_blank"
              rel="noreferrer"
              className="showcase-tile"
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="showcase-tile-overlay">
                <span className="showcase-tile-meta">{item.meta}</span>
                <span className="showcase-tile-title">{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
