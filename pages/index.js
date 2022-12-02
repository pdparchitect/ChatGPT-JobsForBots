import SignupForm from '@/components/SignupForm';
import FAQ from '@/components/FAQ';
import faqEntries from '@/lib/faq';
import { heroTitle, heroSubtitle, valuePropositionTitle, valuePropositionText } from '@/lib/text';

const Home = () => {
  return (
    <div>
      <section className="logo bg-gray-100 text-center">
        <div className="container mx-auto max-w-screen-md">
          <h1 className="text-8xl font-bold text-gray-800">🤖</h1>
        </div>
      </section>
      <section className="hero bg-gray-100 pt-20 pb-20">
        <div className="container mx-auto max-w-screen-md flex justify-between items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-800">{heroTitle}</h1>
            <p className="text-2xl font-light text-gray-600">{heroSubtitle}</p>
          </div>
        </div>
      </section>
      <section className="value-proposition py-8 bg-gray-200">
        <div className="container mx-auto max-w-screen-md">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">
            {valuePropositionTitle}
          </h2>
          <p className="text-2xl font-light mb-4 text-gray-600">
            {valuePropositionText}
          </p>
        </div>
      </section>
      <section className="faq py-8 bg-gray-400">
        <div className="container mx-auto max-w-screen-md">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">Frequently asked questions</h2>
          {faqEntries.map((entry, index) => (
            <FAQ key={index} question={entry.question} answer={entry.answer} />
          ))}
        </div>
      </section>
      <section className="signup-form py-8 bg-gray-300">
        <div className="container mx-auto max-w-screen-md">
          <SignupForm />
        </div>
      </section>
      <footer className="py-4 bg-gray-100 text-gray-600">
        <div className="container mx-auto max-w-screen-md text-center">
          &copy; JobsForBots 2022
        </div>
      </footer>
    </div>
  );
};

export default Home;
