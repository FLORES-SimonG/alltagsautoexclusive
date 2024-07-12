"use client";

import ModuleBestViewedArray from "@/components/ModuleBestViewedArray";

import MobileFilterProducts from "@/components/MobileFilterProducts";
import AsideMenuFilter from "@/components/AsideMenuFilter";

export default function Store() {
  return (
    <div>
      <div>
        {/* //!Mobile Filter */}
        {/* <MobileFilterProducts /> */}
        {/* //!FIN Mobile Filter */}

        <section className="mx-auto max-w-7xl px-4 pt-6 pb-24 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <AsideMenuFilter />

            <div className="lg:col-span-3 ">
              <ModuleBestViewedArray number={5} strict={true} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
