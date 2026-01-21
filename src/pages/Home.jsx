import Navbar from "../component/Navbar";
import Hero from "../component/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Hero />
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">S'informer</h3>
          <input
            type="text"
            placeholder="Rechercher une information..."
            className="w-full border p-2 rounded"
          />
        </div>
      </main>
    </>
  );
}
