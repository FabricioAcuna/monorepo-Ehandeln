import Navbar from "./components/navbar";



export default function Page() {
  return (
    <>
      <main className="flex justify-center">
        <Navbar/>
        <h1>Välkommen till vår butik!</h1>
        <h2 className=" text-red-500">hej</h2>
      </main>
    </>
  );
}
