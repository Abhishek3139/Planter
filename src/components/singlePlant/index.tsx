const SinglePlant = () => {
  return (
    <div className=" grid grid-cols-2 gap-5 m-4 lg:grid-cols-3 lg:gap-10 lg:mx-60 lg:mb-30">
      <div>
        <img src="public/p1.jpg" alt="plant" className="" />
        <p className="m-3">Italian Stone Pine</p>
        <span>200$</span>
      </div>
      <div className="">
        <img src="public/p1.jpg" alt="plant" className="" />
        <p className="m-3">Italian Stone Pine</p>
        <span>200$</span>
      </div>
      <div className="hidden lg:block">
        <img src="public/p1.jpg" alt="plant" className="" />
        <p className="m-3">Italian Stone Pine</p>
        <span>200$</span>
      </div>
    </div>
  );
};

export default SinglePlant;
