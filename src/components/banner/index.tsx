function Banner() {
  return (
    <section>
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 shop-now-background">
        <div className="hidden md:block "></div>

        <div
          className="text-left p-16 my-auto
          "
        >
          <h1 className="text-5xl m-2">Quality Plant</h1>
          <h1 className="text-4xl m-2">Case & Accessories</h1>
          <button className="bg-green-700  p-4 m-3">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
