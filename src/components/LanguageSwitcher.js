import { useRouter } from "next/router";
import Link from "next/link";
import { languageDetector } from "@/lib/languageDetector";


/**
 * Renders a language switcher button that allows the user to switch between different locales.
 *
 * @param props - The props object containing the locale, href, and asPath.
 * @returns The language switcher button.
 */
export const LanguageSwitcher = ({
    locale,
    ...rest
  }) => {
    const router = useRouter();
  
    let href = rest.href || router.asPath;
    let pName = router.pathname;
    Object.keys(router.query).forEach((k) => {
      if (k === "locale") {
        pName = pName.replace(`[${k}]`, locale);
        return;
      }
      pName = pName.replace(`[${k}]`, String(router.query[k]));
    });
    if (locale) {
      href = rest.href ? `/${locale}${rest.href}` : pName;
    }
  
    return (
      <Link
        href={href}
        className="group"
        onClick={() =>
          languageDetector.cache ? languageDetector.cache(locale) : {}
        }
      >
        <button style={{ fontSize: "small", textShadow: "0 0px 2px black" }} className={`
            group-hover:border-solid group-hover:text-other
            ${router.asPath.includes(locale) ? 'border-b-other border-solid border-b-2' : 'border-none'}
            `}>{locale}
        <span >
            </span>
        </button>
        
      </Link>
    );
  };