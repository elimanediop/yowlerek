import "./globals.css";
import type {Metadata} from "next";
export const metadata:Metadata={title:{default:"YOW LE REK | Streetwear Sénégal",template:"%s | YOW LE REK"},description:"YOW LE REK — marque streetwear inspirée du Sénégal. Cela ne dépend que de toi. / It's up to you."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
