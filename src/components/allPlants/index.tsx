// import * as React from 'react';

// export interface IAppProps {
// }

export function AllPlants() {
  return (
    <section>
      <>
        <div className='m-4 grid gap-2 md:m-10 md:grid-cols-2 md:grid-rows-2 md:gap-4   bg-[#f5f5f5]'>
          <div className=''>
            <img src='/static/images/banner-2.jpg' alt='...' />
          </div>
          <div className='row-span-2'>
            <img src='/static/images/banner.jpg' alt='...' />
          </div>
          <div className=''>
            <img src='/static/images/banner-3.jpg' alt='...' />
          </div>
        </div>
      </>
    </section>
  );
}
