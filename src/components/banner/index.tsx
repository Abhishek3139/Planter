function Banner() {
  return (
    <section>
      <div className="grid  grid-cols-2 text-right shop-now-background">
        <div></div>
        <div className="text-left m-10">
          <h1 className="text-5xl m-2">Quality Plant</h1>
          <h1 className="text-4xl m-2">Case & Accessories</h1>
          <button className="bg-green-700 text-white p-4 m-3">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
