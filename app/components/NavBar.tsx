function NavBar() {
    return <div className="flex justify-between items-center border-b border-gray-400 p-5">
            <img src="logo.png" alt="Upstart Logo" />
            <nav className="flex space-x-20">
                <a href="#" className="text-black">About</a>
                <a href="#" className="text-black">Calender</a>
                <a href="#" className="text-black">Contact</a>
            </nav>
            <button className="button-primary">Join</button>
        </div>;
}
  
  export default NavBar;