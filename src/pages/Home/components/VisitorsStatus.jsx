import React from "react";
import hrImg from "@/assets/horizontal-img.png";
import Button from "@/components/Button";

const VisitorsStatus = () => {
  return (
    <>
      <main className="bg-[#006834] py-[60px] px-14 ">
        <section className="wrapper grid lg:grid-cols-4 items-center">
          <div className="grid lg:grid-cols-6 items-center col-span-3 ">
            <h2 className="text-[#FEFEFE] font-semibold text-[28px] col-span-2 ">Visitors with irregular status</h2>
            <div className="hidden lg:flex justify-center col-span-1">
              <img src={hrImg} alt="" />
            </div>
            <p className="col-span-3 text-[#FEFEFE] font-normal text-[18px] ">
              Regularize your immigration status in Nigeria before the grace
              period ends on 1st August 2025. Take advantage of this chance to
              regularize your stay and avoid future immigration complications.
            </p>
          </div>
          <div className="flex justify-end">

          <Button variant='success' className='p-3.5 text-[#FEFEFE] font-semibold text-[18px] '>Click Here Now</Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default VisitorsStatus;
