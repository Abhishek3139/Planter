// import * as React from 'react';

// export interface IAppProps {
// }

export function AllPlants() {
  return (
    <section>
      <div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 m-10">
          <div className="row-span-3 ">
            <img src="public\banner.jpg" alt="..." />
          </div>
          <div className="col-span-2 ">
            <img src="public\banner-2.jpg" alt="..." />
          </div>
          <div className=" col-span-2 ">
            <img src="public\banner-3.jpg" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
}
