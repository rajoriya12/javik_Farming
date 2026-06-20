export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between px-6">
        <h1 className="text-2xl font-bold">
          🌱 Javik Farming
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}