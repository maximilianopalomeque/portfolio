import LayoutContainer from "../LayoutContainer";

export default function Header() {
  return (
    <LayoutContainer>
      <div className="h-[100vh] flex flex-col justify-center">
        <h2 className="text-center xl:text-left text-3xl xl:text-6xl xl:max-w-3xl">
          Transformando <span className="font-semibold">tu visión</span> en
          <span className="font-semibold"> experiencias web</span>.
        </h2>
        <h2 className="text-gray-600 mt-2 text-center xl:text-left">
          Desarrollador full stack, elevando tus proyectos digitales.
        </h2>
        <div className="mt-8">
          <div className="flex gap-3 justify-center xl:justify-start">
            <button className="btn btn-primary">Trabajos</button>
            <button className="btn btn-outline">Contacto</button>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}
