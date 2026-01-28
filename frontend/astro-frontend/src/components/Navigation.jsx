import { Button } from "./ui/button";

export default function Navigation() {
   return (
      <header className="border-b border-white/15 backdrop-blur-sm bg-black/10">
         <nav className="flex justify-between px-6 py-4 max-w-6xl mx-auto">
            <a href="/" className="text-xl font-semibold">
               Sirma Academy
            </a>

            <div className="flex gap-6">
               <Button variant="ghost" asChild>
                  <a href="/">Dashboard</a>
               </Button>

               <Button variant="ghost" asChild>
                  <a href="/login">Login</a>
               </Button>

               <Button variant="ghost" asChild>
                  <a href="/register">Register</a>
               </Button>
            </div>
         </nav>
      </header>
   );
}
