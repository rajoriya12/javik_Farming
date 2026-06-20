import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="bg-green-600 text-white py-4">
            <div className="container mx-auto flex justify-between px-6">
                <h1 className="text-2xl font-bold">
                    🌱 Javik Farming
                </h1>

                <ul className="flex gap-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/gallery" className="hover:underline">Gallery</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </ul>
            </div>
        </nav>
    );
}