import { CheckCircle2Icon, InfoIcon } from "lucide-react";



export default function Home() {
  return (
    <div className="flex min-h-screen justify-center ">
      <header className="bg-red-700 w-1/2 h-20 fixed rounded-b-xl">

      </header>
       <div className="flex min-h-screen w-1/3 flex-col items-center justify-center  ">
      <div className="flex items-center justify-center text-center h-200 w-full rounded-lg">
            <div className="start-auto mr-80">
            <h1 className="text-8xl font-extrabold"> <span className=" text-red-700">Matias</span> Estofados</h1>
            <p className="text-2xl font-bold">Qualidade é aqui</p>
            </div>
      </div>
      </div>

      <div className="flex min-h-screen w-1/2 flex-col items-center justify-center  ">
      <div className="bg-orange-700 h-200 w-full rounded-lg mt-5">
          <h1 className="text-9xl text-gray-400">Video passando sofás diversos</h1>
      </div>
      </div>
    </div>
  );
}