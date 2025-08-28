'use client'
import P5Sketch from '@/components/p5sketch'
import p5 from 'p5'

export default function Home() {
  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(800, 600)
      p.background(20)
    }

    p.draw = () => {
      p.fill(255, 100, 150, 100)
      p.ellipse(p.mouseX, p.mouseY, 50, 50)
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Creative Coding Project
        </h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <P5Sketch sketch={sketch} />
        </div>
      </div>
    </main>
  )
}