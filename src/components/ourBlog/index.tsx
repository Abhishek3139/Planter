function OurBlog() {
  return (
    <section className="px-4 py-12 bg-green-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Blog Section 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Plants help make your house more beautiful
            </h2>
            <p className="text-gray-700 text-lg md:text-base leading-relaxed">
              Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi
              eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac
              quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Maecenas interdum odio...
            </p>
          </div>
          <div>
            <img
              src="/static/images/blog/blog12_1024x1024.webp"
              alt="Beautiful Plant Decor"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Blog Section 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* On larger screens, show image first for variation */}
          <div className="order-2 md:order-1">
            <img
              src="/static/images/blog/blog11_1024x1024.webp"
              alt="Indoor Garden"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Plants help make your house more beautiful
            </h2>
            <p className="text-gray-700 text-lg md:text-base leading-relaxed">
              Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi
              eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac
              quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Maecenas interdum odio...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
