const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our planter application! 🌱 We're passionate about helping you grow and care for your plants with ease.
      </p>
      <p className="text-gray-600 mb-4">
        Our mission is to make plant care simple, beautiful, and joyful. Whether you're a beginner or a seasoned plant parent, we offer tools to track your plant's needs, learn new tips, and connect with a community of green thumbs.
      </p>
      <p className="text-gray-600 mb-8">
        Built by a small team of plant lovers and developers, we’re committed to delivering a delightful experience with every update. Thank you for growing with us!
      </p>

      <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Our Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.0015%2C32.1358%2C76.0215%2C32.1558&marker=32.1458%2C76.0115"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
