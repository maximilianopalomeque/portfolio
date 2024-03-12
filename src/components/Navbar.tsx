import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar z-50 bg-base-100 fixed top-0">
      <div className="mx-auto px-2 xl:px-0 flex items-center justify-between max-w-[1280px] 2xl:max-w-[1520px] w-full py-1">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">MP</h2>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-3">
            <Link
              className="text-xs link xl:hover:text-emerald-500"
              href="https://www.linkedin.com/in/maximilianopalomeque/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <h2 className="text-sm text-gray-400">/</h2>
            <Link
              className="text-xs link xl:hover:text-emerald-500"
              href="https://github.com/maximilianopalomeque"
              target="_blank"
            >
              Github
            </Link>
          </div>
          {/* copy to clipboard and show alert */}
          <div className="relative -right-2.5">
            <button className="text-sm btn btn-ghost btn-xs font-normal">
              maximilianopalomeque@gmail.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
