export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between">
      <h1 className="font-bold text-xl text-blue-700">IUT</h1>
      <ul className="flex gap-6 text-gray-600">
        <li>Accueil</li>
        <li>S'informer</li>
        <li>S'orienter</li>
        <li>Connexion</li>
      </ul>
    </nav>
  );
}
