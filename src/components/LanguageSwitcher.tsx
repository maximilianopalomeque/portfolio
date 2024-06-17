"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { IoLanguage } from "react-icons/io5";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const router = useRouter();

  function switchLanguage(newLocale: string) {
    router.push(newLocale);
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm xl:hover:bg-accent"
      >
        <IoLanguage />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button
            onClick={() => {
              switchLanguage("/es");
            }}
            disabled={locale === "es"}
            className={`${
              locale === "es"
                ? "bg-accent hover:bg-accent hover:cursor-not-allowed"
                : "bg-none"
            }`}
          >
            Español
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              switchLanguage("/en");
            }}
            disabled={locale === "en"}
            className={`${
              locale === "en"
                ? "bg-accent hover:bg-accent hover:cursor-not-allowed"
                : "bg-none"
            }`}
          >
            English
          </button>
        </li>
      </ul>
    </div>
  );
}
