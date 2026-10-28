import {notFound} from "next/navigation";
import {Footer,Header} from "@/components/Site";
import {validLocale} from "@/lib/i18n";
export function generateStaticParams(){return [{locale:"fr"},{locale:"en"}]}
export default async function LocaleLayout({children,params}:{children:React.ReactNode,params:Promise<{locale:string}>}){const {locale}=await params;if(!validLocale(locale))notFound();return <><Header locale={locale}/>{children}<Footer locale={locale}/></>}
