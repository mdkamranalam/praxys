import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      {/* LOGO  */}
      <Link to="/" className="text-xl font-bold text-black">
        Praxys
      </Link>

      {/* Navigation Links  */}
      <div className="flex gap-4">
        <Link to="/login" className="hover:text-blue-600 transition-colors">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-stone-800 transition-colors"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
