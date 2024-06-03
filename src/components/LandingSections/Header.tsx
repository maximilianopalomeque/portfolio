import LayoutContainer from "../LayoutContainer";

export default function Header() {
  return (
    <LayoutContainer>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-gray-600 mb-1 text-center text-sm scale-in-ver-bottom">
          DESARROLLADOR WEB FULL STACK
        </h2>
        <h2 className="text-center text-5xl xl:text-9xl">
          <div className="scale-in-ver-bottom">Transformando</div>
          <div className="font-semibold scale-in-ver-bottom">
            tu visión <span className="font-normal">en</span>
          </div>
          <div className="font-semibold scale-in-ver-bottom">
            experiencias web
          </div>
        </h2>
        <div className="scroll-indicator absolute bottom-5">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </LayoutContainer>
  );
}
