// Custom typewriter hook
import { useState, useEffect } from 'react'

export default function useTypewriter(words, typeSpeed = 110, deleteSpeed = 60, pauseMs = 1800) {
    const [text, setText] = useState('')
    const [wordIdx, setWordIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = words[wordIdx]
        let timeout

        if (!deleting) {
            if (charIdx < current.length) {
                timeout = setTimeout(() => setCharIdx(i => i + 1), typeSpeed)
            } else {
                timeout = setTimeout(() => setDeleting(true), pauseMs)
            }
        } else {
            if (charIdx > 0) {
                timeout = setTimeout(() => setCharIdx(i => i - 1), deleteSpeed)
            } else {
                setDeleting(false)
                setWordIdx(i => (i + 1) % words.length)
            }
        }

        setText(current.slice(0, charIdx))
        return () => clearTimeout(timeout)
    }, [charIdx, deleting, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

    return { text }
}
