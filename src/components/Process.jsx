import './Process.css'

const steps = [
  {
    num: '01',
    icon: '◆',
    title: 'Consultation',
    desc: 'We begin by listening — understanding your vision, occasion, and budget with patience and care.',
  },
  {
    num: '02',
    icon: '✧',
    title: 'Design',
    desc: 'Our craftsmen sketch and refine the design until it perfectly matches what you imagined.',
  },
  {
    num: '03',
    icon: '✦',
    title: 'Crafting',
    desc: 'Skilled artisans bring the design to life using traditional techniques and premium-grade materials.',
  },
  {
    num: '04',
    icon: '◇',
    title: 'Delivery',
    desc: 'Your piece is polished, hallmarked, and presented beautifully — ready to be cherished forever.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      {/* Spline-style 3D floating orbs */}
      <div className="process-orb process-orb--1" />
      <div className="process-orb process-orb--2" />

      <div className="process-header">
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>
          <span className="gold-line" />
          The SVJ Way
          <span className="gold-line" />
        </div>
        <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: 'center' }}>
          From <em>Concept</em> to Creation
        </h2>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={i} className={`process-step reveal reveal-delay-${i + 1}`}>
            {/* Connector line between steps */}
            {i < steps.length - 1 && <div className="process-connector" />}

            <div className="process-step-top">
              <div className="process-step-number">{step.num}</div>
              <div className="process-step-icon-ring">
                <span className="process-step-icon">{step.icon}</span>
              </div>
            </div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
