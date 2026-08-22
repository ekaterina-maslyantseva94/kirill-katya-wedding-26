import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Алина & Максим — 06.09.2026', description: 'Приглашение на нашу свадьбу в усадьбе Архангельское' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
