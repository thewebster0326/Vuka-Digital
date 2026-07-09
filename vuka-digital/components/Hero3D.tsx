'use client'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GlobePoints() {
  const groupRef = useRef<THREE.Group>(null)
  const count = 900

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const blue = new THREE.Color('#2E7CF6')
    const green = new THREE.Color('#39FF6A')
    const radius = 2.4

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.set([x, y, z], i * 3)

      const t = (y / radius + 1) / 2
      const color = blue.clone().lerp(green, t)
      colors.set([color.r, color.g, color.b], i * 3)
    }

    return { positions, colors }
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.12
    const { pointer } = state
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.2,
      0.05
    )
    groupRef.current.rotation.y += pointer.x * 0.0006
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors sizeAttenuation transparent opacity={0.9} />
      </points>
      <mesh>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial color="#2E7CF6" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <GlobePoints />
      </Canvas>
    </div>
  )
}
