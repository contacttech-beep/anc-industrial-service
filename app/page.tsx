export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        ANC Servicios Industriales
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Soluzioni complete per aziende internazionali di packaging. 
        Dalla linea di produzione in vetro e PET a robot cartesiani e antropomorfi, 
        avvolgitrici, PAL/DEPAL, AGV, macchine di controllo e molto altro.
      </p>
      <div className="mt-8">
        <a
          href="mailto:info@ancindustrialservice.com"
          className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Contattaci
        </a>
      </div>
    </main>
  );
}
