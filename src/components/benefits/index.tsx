// import * as React from 'react';

import { ShopNowButton } from "../buttons/shopNow";

// export interface IAppProps {
// }

export function Benefits() {
  return (
    <div className="m-4 bg-[#f5f5f5] p-6">
      <h3 className="text-3xl font-semibold my-4">
        The Benefits of Indoor Plants
      </h3>
      <p className="text-sm mb-4 p-2">
        “Phasellus tempus dignissim nisl, eu interdum felis interdum consequat.
        Vestibulum varius dui vel tincidunt convallis.”
      </p>
      <ShopNowButton />
    </div>
  );
}
