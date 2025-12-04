import React from "react";
import { steps } from "@/data/heroData";
import hrLogo from "@/assets/hr-img.png";
import startAppLogo from "@/assets/start-app.png";
import uploadDocsLogo from "@/assets/upload-docs.png";
import makePaymentLogo from "@/assets/make-payment.png";
import trackProgressLogo from "@/assets/track-progress.png";

const GetStarted = () => {
  console.log(steps);

  return (
    <>
      <main className="wrapper ">
        <section className="text-center pt-8 md:pt-24 md:px-14">
          <h1 className="text-[#212121] font-semibold md:font-bold text-[24px] md:text-[44px] ">
            Get Started
          </h1>
          <p className="text-[#474747] text-[16px] md:text-[24px] font-normal pt-6 ">
            Whether you're applying for a passport, visa, or travel certificate,
            getting started is simple. Just follow these clear steps to complete
            your process quickly, securely, and with confidence.
          </p>
        </section>
         <div className="flex flex-col md:flex-row justify-center items-center md:gap-8 gap-12  mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-[220px] "
              >
                <div className="rounded-full w-16 h-16  flex items-center justify-center mb-8">
                  <img src={step.logo} alt="" />
                  
                </div>
                <h3 className="text-[15px] font-semibold text-[#212121] my-3">
                  {step.title}
                </h3>
                <p className="text-[#474747] text-sm mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        {/* <section className=" borde py-10  ">
          <div className="px-30 flex justify-center ">
            <div className="md:flex gap-5 flex-wra">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <div key={index} className="borde w-[280px] ">
                    <div className="flex  items-center gap-5 py-10 px-3 ">
                      <img src={step.logo} alt="" />
                      {!isLast && (
                        <div className="bg-[#006834] w-[182px] h-1 hidden md:block "></div>
                      )}
                    </div>
                    <h2 className="text-[#212121] text-[28px] font-semibold text-ce ">{step.title}</h2>
                    <p className="text-[#474747] text-[20px]  "> {step.desc} </p>
                  </div>
                );
              })}
            </div>
          </div>
        
        </section> */}
      </main>
    </>
  );
};

export default GetStarted;
