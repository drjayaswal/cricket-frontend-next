import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function navbar() {
  return (
    <>
      <header className="border-b border-gray-800 bg-[#030712]/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Cricstock11
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/live-matches"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Live Matches
            </a>
            <a href="/portfolio" className="text-white font-medium">
              Portfolio
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/aboutus"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-white"
            ></Button>
            <Avatar className="h-9 w-9 border-2 border-purple-500">
              <AvatarImage
                src="/placeholder.svg?height=36&width=36"
                alt="User"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </>
  );
}
