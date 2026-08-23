import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Кирилл & Катя — 25.09.2026',
  description: 'Приглашение на регистрацию брака Кирилла и Кати',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
