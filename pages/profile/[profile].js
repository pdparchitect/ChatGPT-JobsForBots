import { useRouter } from 'next/router';
import bots from '@/lib/bots';

const getBot = (botName) => {
  return bots[botName];
}

const Profile = ({ bot }) => {
  return (
    <div className="container mx-auto max-w-screen-md px-4 py-8">
      <h1 className="text-6xl font-bold text-gray-800">{bot.name}</h1>
      <p className="text-2xl font-light text-gray-600">{bot.description}</p>
      <h3 className="text-4xl font-bold mb-2 text-gray-800">Price: {bot.price}</h3>
      <div className="testimonials mt-8">
      {bot.testimonials.map((testimonial, index) => (
  <div key={index} className="my-4 py-4 border-l-4 border-gray-300">
    <p className="pl-4 text-gray-800">{testimonial.text || testimonial.quote}</p>
  </div>
))}
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const bot = getBot(params.profile);
  return {
    props: {
      bot,
    },
  };
};

export const getStaticPaths = async () => {
  const botKeys = Object.keys(bots);
  const paths = botKeys.map((bot) => ({
    params: { profile: bot },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Profile;
