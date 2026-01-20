import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тайфунавто — Яндекс Карты',
  description: 'Тайфунавто, Тольятти, ул. Александра Кудашева, д. 110, кв. 191 — отзывы, фото, время работы, телефон и адрес на карте',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
