
interface TechCardProps {
  name: string
}
export default function TechCard({ name }: TechCardProps) {
  return (
    <div className="border border-zinc-800 rounded-xl px-6 py-4
                    hover:border-white/40 transition-all duration-300
                    hover:scale-105 bg-zinc-900/40 backdrop-blur">
      <p className="text-lg font-medium">{name}</p>
      
    </div>

    
  )
}

