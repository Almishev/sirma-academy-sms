export default function Navigation() {
    return (
        <header className="border-b border-white/15 backdrop-blur-sm bg-black/10">
            <nav className="flex justify-between px-6 py-4 max-w-6xl mx-auto text-xl">
                <a href="/">Sirma Academy</a>

                <div className="flex gap-6">
                    <a href="/">Dashboard</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    )
}