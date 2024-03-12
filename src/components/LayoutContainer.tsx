export default function LayoutContainer({ children }: any) {
  return (
    <main className="mx-auto px-4 xl:px-0 max-w-[1280px] 2xl:max-w-[1520px]">
      {children}
    </main>
  );
}
