import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect with Expert Mentors</h1>
          <p className="text-gray-700 text-lg mb-8 text-center">
            Find the perfect mentor to guide you through your learning journey and achieve your goals.
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Mentorship"
            className="w-full max-w-2xl rounded shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Expert Mentors"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentors</h3>
              <p className="text-gray-700">
                Our mentors are industry experts with years of experience and a passion for teaching.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Personalized Learning"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-700">
                Get a customized learning plan tailored to your goals and learning style.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Flexible Scheduling"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-700">
                Schedule sessions at your convenience, with options for both online and in-person meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <p className="text-gray-700 mb-4">
                "This platform has been a game-changer for my career. My mentor provided invaluable guidance and support."
              </p>
              <h3 className="text-lg font-bold text-gray-900">- Alex Johnson</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <p className="text-gray-700 mb-4">
                "I was able to find a mentor who perfectly matched my learning style and goals. Highly recommend!"
              </p>
              <h3 className="text-lg font-bold text-gray-900">- Maria Garcia</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Join our community of learners and mentors today and take the next step in your learning journey.
          </p>
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
