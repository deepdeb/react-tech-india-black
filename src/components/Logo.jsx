import logoImg from "../assets/images/techindialogo.png";
const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center justify-center">
                <img src={logoImg} alt="Logo" className="h-7 w-7" />
                <span className="absolute inset-0 border-2 border-cyan-400/40 rounded-lg" />
            </div>
            <span className="text-lg font-bold tracking-[0.2em] text-cyan-400">
                TECH-INDIA
            </span>
        </div>
    )
}

export default Logo