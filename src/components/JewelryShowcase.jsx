import { useState, useRef, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './JewelryShowcase.css'

const jewelryItems = [
  {
    id: 'necklace',
    name: '22K Gold Necklace',
    splineUrl: 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode', // Placeholder Spline URL
    hotspots: [
      { id: 1, title: '22K Hallmarked Gold', desc: 'Pure, radiant, and crafted for eternity.', position: { top: '30%', left: '20%' } },
      { id: 2, title: 'VS1 Diamonds', desc: 'Flawless brilliance hand-set by master artisans.', position: { top: '50%', right: '15%' } },
      { id: 3, title: 'Heritage Design', desc: 'Inspired by royal archives, modernized for today.', position: { bottom: '20%', left: '30%' } }
    ]
  },

  {
    id: 'bangles',
    name: 'Royal Heritage Bangles',
    splineUrl: 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode', // Placeholder Spline URL
    hotspots: [
      { id: 1, title: 'Intricate Filigree', desc: 'Hand-woven gold threads forming delicate patterns.', position: { top: '40%', left: '15%' } },
      { id: 2, title: 'Seamless Clasp', desc: 'Hidden locking mechanism for a flawless look.', position: { bottom: '30%', right: '20%' } }
    ]
  }
]

export default function JewelryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  const currentItem = jewelryItems[currentIndex]

  const nextItem = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev + 1) % jewelryItems.length)
  }

  const prevItem = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev - 1 + jewelryItems.length) % jewelryItems.length)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div 
      className={`jewelry-showcase ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <div className="jewelry-glow"></div>
      
      {/* 3D Spline Container */}
      <div className="spline-container">
        {isLoading && (
          <div className="spline-loader">
            <div className="loader-ring"></div>
            <span>Loading 3D Model...</span>
          </div>
        )}
        <Spline 
          scene={currentItem.splineUrl} 
          onLoad={handleLoad}
          className="spline-canvas"
        />
      </div>

      {/* Hover Hint */}
      <p className="showcase-hover-hint">Hover the jewelry to see details ✦</p>

      {/* Navigation Arrows */}
      <div className="showcase-nav">
        <button onClick={prevItem} className="nav-btn prev" aria-label="Previous Item">
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <div className="item-indicator">
          <span className="item-name">{currentItem.name}</span>
          <div className="dots">
            {jewelryItems.map((_, idx) => (
              <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
        </div>
        <button onClick={nextItem} className="nav-btn next" aria-label="Next Item">
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Expanding Detail Hotspots (Highly Reactive) */}
      <AnimatePresence>
        {isHovered && !isLoading && currentItem.hotspots.map((hotspot) => (
          <motion.div 
            key={`${currentItem.id}-${hotspot.id}`}
            className="reactive-hotspot"
            style={hotspot.position}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="hotspot-core">
              <div className="core-dot"></div>
              <div className="core-pulse"></div>
            </div>
            
            <motion.div 
              className="hotspot-panel"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="panel-content">
                <div className="panel-header">
                  <Maximize2 size={14} className="panel-icon" />
                  <span className="panel-title">{hotspot.title}</span>
                </div>
                <div className="panel-desc">{hotspot.desc}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
