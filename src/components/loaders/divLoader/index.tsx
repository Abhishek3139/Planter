const arr = [1, 2, 3, 4];
function DivLoader() {
  return (
    <div className='flex'>
      {arr.map((num) => {
        return (
          <div className='rounded-md  max-w-sm w-full mx-auto' key={num}>
            <div className='animate-pulse  space-x-4'>
              <div className='bg-slate-700 h-[420px] w-[340px]'></div>
              <div className='flex justify-center'>
                <p className='h-2 bg-slate-700 rounded w-40 mt-2'></p>
              </div>
              <div className='flex justify-center'>
                <span className='h-2 bg-slate-700 rounded w-20 mt-2'></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DivLoader;
