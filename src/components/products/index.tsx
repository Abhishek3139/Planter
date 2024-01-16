// import * as React from 'react';

// import { FilterProducts } from "../filterProduct";

// export interface IAppProps {
// }

export function Products() {
  return (
    <div>
      {/* <FilterProducts /> */}
      <div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-3">
        <div>
          <img src="public\p2.jpg" />
          <p>Aloe</p>
          <span>$200</span>
        </div>
        <div>
          <img src="public\p2.jpg" />
          <p>Aloe</p>
          <span>$200</span>
        </div>
        <div>
          <img src="public\p2.jpg" />
          <p>Aloe</p>
          <span>$200</span>
        </div>
        <div>
          <img src="public\p2.jpg" />
          <p>Aloe</p>
          <span>$200</span>
        </div>
        <div>
          <img src="public\p2.jpg" />
          <p>Aloe</p>
          <span>$200</span>
        </div>
        <div>
          <img src="public\p2.jpg" />
          <p>Aloe</p>
          <span>$200</span>
        </div>
      </div>
    </div>
  );
}
