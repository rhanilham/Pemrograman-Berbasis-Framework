import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Esai',
    description: 'Halaman kumpulan esai.',
    openGraph: {
      title: 'Esai',
      description: 'Halaman kumpulan esai.',
    },
  };
};

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
      </header>
    </div>
  );
}
