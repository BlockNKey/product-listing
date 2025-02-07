import Image from "next/image";
import { Metadata } from "next";

import ProductListing from "@/components/Product/ProductListing";
import Header from "@/components/GlobalHeader";
import Footer from "@/components/GlobalFooter";

const baseUrl=process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Premium Products Collection | VitaliiStore',
  description: 'Browse our curated collection of premium products. Find the best deals on electronics, fashion, and more.',
  keywords: ['products', 'online store', 'electronics', 'fashion', 'premium products', 'shopping'],
  authors: [{ name: 'Vitalii Prihotskiy' }],
  creator: 'VitaliiStore',
  publisher: 'VitaliiStore',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-us',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'VitaliiStore',
    title: 'VitaliiStore - Premium Products Collection',
    description: 'Discover our premium collection of high-quality products. From electronics to fashion, find the best deals on authentic items.',
  },
};

const Home = () => (
  <div>
    <Header />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to VitaliiStore
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stacks Used:</h2>
          <div className="flex justify-center">
            <Image
              src="https://skillicons.dev/icons?i=ts,nextjs,tailwind,docker"
              alt="Tech Stack: TypeScript, Next.js, Tailwind CSS, Docker"
              width={200}
              height={50}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <ProductListing />
    </main>
    <Footer />
  </div>
);

export default Home;
