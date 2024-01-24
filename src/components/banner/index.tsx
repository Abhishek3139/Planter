function Banner() {
  return (
    <section>
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 shop-now-background">
        <div className="hidden md:block "></div>

        <div className="text-center md:text-left p-16 my-auto">
          <h1 className="text-4xl m-2 ">For The True</h1>
          <h1 className="text-4xl m-2 ">Plant Lovers</h1>
          <button className="bg-green-700 w-36 h-10 m-4">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
