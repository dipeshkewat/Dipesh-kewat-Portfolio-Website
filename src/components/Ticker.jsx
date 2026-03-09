const items = [
    'AVAILABLE FOR WORK', 'PYTHON', 'MACHINE LEARNING', 'JAVASCRIPT',
    'N8N AUTOMATION', 'AI AGENTS', 'REACT', 'DATA SCIENCE',
    'AVAILABLE FOR WORK', 'PYTHON', 'MACHINE LEARNING', 'JAVASCRIPT',
    'N8N AUTOMATION', 'AI AGENTS', 'REACT', 'DATA SCIENCE',
]

const tickerColors = ['#FE90E8', '#F7CB46', '#C0F7FE', '#99E885']

export default function Ticker() {
    return (
        <div className="overflow-hidden h-11 flex items-center border-b-4" style={{ background: '#000000', borderColor: '#000000' }}>
            <div className="flex animate-ticker whitespace-nowrap">
                {items.map((item, i) => (
                    <span key={i} className="font-mono font-bold text-[13px] tracking-widest uppercase px-10 flex items-center gap-5"
                        style={{ color: tickerColors[i % tickerColors.length] }}>
                        <span style={{ color: '#FFFFFF' }}>&gt;</span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
