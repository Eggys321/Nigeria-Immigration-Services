import Button from "./Button";

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

        {buttonText1 && <Button text={buttonText1} />}
        {buttonText2 && <Button text={buttonText2} />}
      </div>
    </section>
  );
};

export default Hero;
