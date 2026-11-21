import './Marquee.css'

const ITEMS = [
  'Gold Jewellery', 'Diamond Rings', 'Bridal Sets',
  'Earrings', 'Bangles & Kadas', 'Necklaces',
  'Custom Orders', 'Repair & Polish', 'Kundan',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
