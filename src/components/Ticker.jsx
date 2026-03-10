const items = [
    'AVAILABLE FOR WORK', 'PYTHON', 'MACHINE LEARNING', 'JAVASCRIPT',
    'N8N AUTOMATION', 'AI AGENTS', 'REACT', 'DATA SCIENCE',
    'AVAILABLE FOR WORK', 'PYTHON', 'MACHINE LEARNING', 'JAVASCRIPT',
    'N8N AUTOMATION', 'AI AGENTS', 'REACT', 'DATA SCIENCE',
]

export default function Ticker() {
    return (
        <div className="overflow-hidden h-10 sm:h-12 flex items-center"
            style={{
                background: 'rgba(201, 168, 76, 0.04)',
                borderTop: '1px solid rgba(201, 168, 76, 0.08)',
                borderBottom: '1px solid rgba(201, 168, 76, 0.08)',
            }}>
            <div className="flex animate-ticker whitespace-nowrap">
                {items.map((item, i) => (
                    <span key={i} className="font-mono font-medium text-[10px] sm:text-[12px] tracking-[0.1em] sm:tracking-[0.15em] uppercase px-5 sm:px-8 flex items-center gap-3 sm:gap-4"
                        style={{ color: i % 2 === 0 ? '#C9A84C' : '#7A7A92' }}>
                        <span style={{ color: 'rgba(201, 168, 76, 0.3)', fontSize: '5px' }}>◆</span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
