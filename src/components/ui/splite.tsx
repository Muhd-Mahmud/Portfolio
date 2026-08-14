'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Only mount the heavy Spline runtime once the hero scrolls into view.
  // This keeps the ~2.7MB WebGL/physics bundle off the critical first paint.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setOffset({ x: x * 20, y: y * 20 })
  }

  const handleLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Instant poster + spinner shown until the scene finishes loading. */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900/40 to-black">
          <span className="loader" aria-label="Loading 3D scene" />
        </div>
      )}

      {inView && (
        <Suspense fallback={null}>
          <div
            className="w-full h-full transition-transform duration-150 ease-out"
            style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
          >
            <Spline
              scene={scene}
              className={className}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Suspense>
      )}
    </div>
  )
}
