import { cn } from "@/lib/utils"
import Navbar from "@/components/header/navbar"

const Header = ({ className }: { className?: String }) => {
  return (
    <header className={cn("", className)}>
      <Navbar />
    </header>
  )
}

export default Header
