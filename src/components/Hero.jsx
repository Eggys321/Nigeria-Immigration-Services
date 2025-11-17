import Button from "./Button.jsx";

const Hero = ({
  bgImage,
  smImg,
  title,
  subtitle,
  highlightStart,
  highlightEnd,
  highlightColor,
  buttonText1,
  buttonText2,
}) => {
  const hasHighlight =
    highlightStart !== undefined && highlightEnd !== undefined;

  let before = "";
  let highlight = "";
  let after = "";

  if (hasHighlight) {
    before = title.slice(0, highlightStart);
    highlight = title.slice(highlightStart, highlightEnd);
    after = title.slice(highlightEnd);
  }

  return (
    <section
      className="flex items-center h-[424px] md:h-[600px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${window.innerWidth < 885 ? smImg : bgImage})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-black/60" /> */}

      <div className="wrapper text-[#FEFEFE] text-center md:text-start">
        <h1 className="text-[28px] md:text-[60px] font-bold md:w-[650px] ">
          {hasHighlight ? (
            <>
              {before}
              <span style={{ color: highlightColor }}>{highlight}</span>
              {after}
            </>
          ) : (
            title
          )}
        </h1>

        <p className="text-[#F1F1F1] font-normal md:text-[24px] md:w-[620px]">
          {subtitle}
        </p>
        <div className="pt-10 lg:flex gap-10 justify-cente ">
          <div>

          {buttonText1 && (
            <Button
              variant="success"
              className="text-[16px] hidde lg:bloc  font-semibold w-[175px]    md:w-36 h-[55px]"
            >
              Apply now
            </Button>
          )}
          </div>
          <div className="mt-3 md:mt-0">

          {buttonText2 && (
            <Button
              variant="outline"
              className="hidde lg:bloc font-semibold  p-14  md:w-[200px] md:h-[55px] "
            >
              Explore services
            </Button>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
