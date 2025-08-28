'use client'
import { useEffect, useRef } from 'react'
import p5 from 'p5'

interface P5SketchProps {
  sketch: (p: p5) => void
}

export default function P5Sketch({ sketch }: P5SketchProps) {
  const sketchRef = useRef<HTMLDivElement>(null)
  const p5Instance = useRef<p5 | null>(null)

  useEffect(() => {
    if (sketchRef.current && !p5Instance.current) {
      p5Instance.current = new p5(sketch, sketchRef.current)
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove()
        p5Instance.current = null
      }
    }
  }, [sketch])

  return <div ref={sketchRef} className="w-full h-full" />
}