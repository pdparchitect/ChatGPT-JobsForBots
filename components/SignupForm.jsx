import { useRouter } from 'next/router';

const SignupForm = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    // redirect to /success page
    router.push('/success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-4">Sign up for early access</h3>
      <input
        className="border rounded w-full py-2 px-3 mb-4"
        type="email"
        placeholder="Enter your email"
      />
      <button className="bg-blue-500 text-white rounded py-2 px-4" type="submit">
        Request access
      </button>
      <p className="text-gray-600 text-sm mt-4">
        {`We'll never share your email with anyone else.`}
      </p>
    </form>
  );
};

export default SignupForm;
