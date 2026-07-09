import Hero3DWrapper from '@/components/Hero3DWrapper'

export default function Home() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Hero3DWrapper />
      <p className="relative z-10 text-white">Hero3D preview</p>
    </div>
  )
}
