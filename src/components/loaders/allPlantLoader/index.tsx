const arr = [1, 2, 3, 4, 5, 6];
function AllPlantsLoader() {
  return (
    <div className='flex'>
      <div className='w-10'></div>
      <div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'>
        {arr.map((num) => (
          <div key={num} className='group relative'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-slate-700 lg:aspect-none group-hover:opacity-75 lg:h-80'></div>
            <div className='mt-4  md:flex md:justify-between'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  <a>
                    <span aria-hidden='true' className='absolute inset-0' />
                  </a>
                </h3>
              </div>
              <p className='text-sm font-medium text-gray-900'></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlantsLoader;
