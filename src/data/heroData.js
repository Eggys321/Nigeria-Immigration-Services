import homeBg from "@/assets/home-hero.svg";
import smImg from "@/assets/home-hero-sm.png";
import logo from "@/assets/react.svg";
import hrLogo from "@/assets/hr-img.png";
import startAppLogo from "@/assets/start-app.png";
import uploadDocsLogo from "@/assets/upload-docs.png";
import makePaymentLogo from "@/assets/make-payment.png";
import trackProgressLogo from "@/assets/track-progress.png";

export const heroData = {
  home: {
    bgImage: homeBg,
    smImg:smImg,
    title: "Nigeria Immigration Service",
      highlightStart: 8, 
    highlightEnd: 19,  
    highlightColor: "#6BCE9C", 
    subtitle:  "Begin your journey with confidence. Whether you're pursuing growth, or a better future for your family, is ready to welcome you." ,
    buttonText1: "Apply now",
    buttonText2: "Explore services",
  },
  about: {
    bgImage: "/assets/about-bg.jpg",
    title: "About Us",
    subtitle: "Discover our journey and what makes us different.",
    buttonText: "Learn More",
  },
};

export const steps = [
    {
      logo: startAppLogo,
      title: "Start your application",
      desc: "Create an account or log in to begin your process",
      showHr: true,
    },
    {
      logo: uploadDocsLogo,
      title: "Upload required document",
      desc: "Scan and upload necessary files like ID passport photos.",
      showHr: true,
    },
    {
      logo: makePaymentLogo,
      title: "Make secure payment",
      desc: "Pay using approved payment channels and receive confirmation.",
      showHr: true,
    },
    {
      logo: trackProgressLogo,
      title: "Track progress",
      desc: "Use your tracking ID to monitor updates and get notified.",
      showHr: false,
    },
  ];