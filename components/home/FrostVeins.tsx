'use client'

import { useEffect, useRef } from 'react'

export default function FrostVeins() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    ctx.strokeStyle = 'rgba(255,255,255,0.06)'
    ctx.lineWidth = 1

    class Branch {
      x: number
      y: number
      angle: number
      speed: number
      life: number

      constructor(x: number, y: number, angle: number) {
        this.x = x
        this.y = y
        this.angle = angle
        this.speed = Math.random() * 1.5 + 0.5
        this.life = Math.random() * 100 + 50
      }

      draw() {
        if (this.life <= 0) return

        const nx = this.x + Math.cos(this.angle) * this.speed

        const ny = this.y + Math.sin(this.angle) * this.speed

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(nx, ny)
        ctx.stroke()

        this.x = nx
        this.y = ny

        this.angle += (Math.random() - 0.5) * 0.3

        this.life--

        requestAnimationFrame(() => this.draw())

        if (Math.random() < 0.02) {
          new Branch(this.x, this.y, this.angle + (Math.random() - 0.5)).draw()
        }
      }
    }

    for (let i = 0; i < 40; i++) {
      new Branch(
        Math.random() * width,
        Math.random() * height,
        Math.random() * Math.PI * 2
      ).draw()
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
    />
  )
}
