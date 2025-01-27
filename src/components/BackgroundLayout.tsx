export const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[var(--hero-gradient-from)] bg-grid-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[var(--hero-gradient-from)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
