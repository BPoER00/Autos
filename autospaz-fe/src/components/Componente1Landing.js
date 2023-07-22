import Link from "next/link";

function Componente1Landing() {
  return (
    <div
      className="w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://siempreauto.com/wp-content/uploads/sites/9/2022/07/shutterstock_1814201003.jpg?w=2600')",
      }}
    >
      <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
        <div className="mx-4 text-center text-white">
          <h1 className="font-bold text-6xl mb-4">Autos Paz</h1>
          <h2 className="font-bold text-3xl mb-12">Ingreso al sistema</h2>
          <div>
            <Link href={"/Login"}>
              <span className="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                Ingresar
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Componente1Landing;
