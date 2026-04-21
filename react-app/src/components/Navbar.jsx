function Navbar(){
    return(
        <div className="bg-amber-300 flex justify-around items-center py-2">
            <h1 className="text-white text-2xl font-bold">ReactApp</h1>
            <nav className="flex gap-2">
                <a href="" className="font-semibold">Home</a>
                <a href="" className="font-semibold">About</a>
                <a href="" className="font-semibold">Services</a>
            </nav>
        </div>
    )
}

export default Navbar