const items = [
    'AVAILABLE FOR WORK', 'REACT', 'CSS', 'JAVASCRIPT',
    'UI/UX', 'NEXT.JS', 'TYPESCRIPT', 'FRAMER MOTION',
    'AVAILABLE FOR WORK', 'REACT', 'CSS', 'JAVASCRIPT',
    'UI/UX', 'NEXT.JS', 'TYPESCRIPT', 'FRAMER MOTION',
]

export default function Ticker() {
    return (
        <div className="bg-black overflow-hidden h-11 flex items-center border-b-4 border-black">
            <div className="flex animate-ticker whitespace-nowrap">
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="font-mono font-bold text-[13px] tracking-widest uppercase text-yellow px-10 flex items-center gap-5"
                    >
                        <span className="text-neon">&gt;</span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
