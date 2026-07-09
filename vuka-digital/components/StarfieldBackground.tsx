'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Trail } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

interface ShootingStarProps {
  startDelay: number
  color: string
}

function ShootingStar({ startDelay, color }: ShootingStarProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const t = useRef(startDelay)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    t.current += delta
    const cycle = 6
    const local = t.current % cycle
    const visible = local < 1.4
    meshRef.current.visible = visible
    if (visible) {
      const travel = local / 1.4
      meshRef.current.position.set(
        THREE.MathUtils.lerp(9, -9, travel),
        THREE.MathUtils.lerp(4, -4, travel),
        THREE.MathUtils.lerp(-3, 1, travel)
      )
    }
  })

  return (
    <Trail width={1.5} length={5} color={color} attenuation={(w) => w * w}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  )
}

interface StarfieldBackgroundProps {
  simplified?: boolean
}

export default function StarfieldBackground({ simplified = false }: StarfieldBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={simplified ? [1, 1] : [1, 1.5]}>
        <Stars
          radius={60}
          depth={30}
          count={simplified ? 800 : 2200}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />
        <ShootingStar startDelay={0} color="#2E7CF6" />
        <ShootingStar startDelay={3.2} color="#39FF6A" />
      </Canvas>
    </div>
  )
}
