import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="h-16 w-full bg-pink-950 text-white px-8 flex justify-center">
       
        <ul className="flex justify-between gap-3 items-center font-bold ">
            <Link to='/' className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to="/join-us" className="hover:text-gray-400">Join Us</Link>
        </ul>
      </div>
    );
};

export default Navbar;