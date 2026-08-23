import type { Metadata } from 'next';
import './globals.css';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = 'https://ekaterina-maslyantseva94.github.io/kirill-katya-wedding-26';
export const metadata: Metadata = {
  title: 'Кирилл & Катя — 25.09.2026',
  description: 'Приглашение на регистрацию брака Кирилла и Кати',
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: `${siteUrl}/`,
    siteName: 'Кирилл & Катя',
    title: 'Кирилл & Катя — 25.09.2026',
    description: 'Приглашение на регистрацию брака Кирилла и Кати',
    images: [{
      url: `${siteUrl}/og.png`,
      width: 2990,
      height: 1544,
      alt: 'Кирилл и Катя — приглашение на свадьбу',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кирилл & Катя — 25.09.2026',
    description: 'Приглашение на регистрацию брака Кирилла и Кати',
    images: [`${siteUrl}/og.png`],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
