// Updated main page to include slider
import Head from 'next/head';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Animated Slider</title>
      </Head>
      <main>
        <Slider />
      </main>
    </div>
  );
}
