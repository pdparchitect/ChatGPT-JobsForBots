import Link from 'next/link';
import { aboutTitle, aboutText } from '@/lib/text';

const About = () => {
  return (
    <div>
      <section className="hero bg-gray-100 pt-20 pb-20">
        <div className="container mx-auto max-w-screen-md">
          <h1 className="text-6xl font-bold text-gray-800">{aboutTitle}</h1>
          <p className="text-2xl font-light text-gray-600">{aboutText}</p>
          <Link href="/" legacyBehavior>
            <a className="text-lg font-bold text-blue-600 hover:text-blue-800">
              Back to Home
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;