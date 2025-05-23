import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const images = [image1, image2, image3, image4, image5];

const imageTexts = [
  {
    title: "Oshi no Ko",
    description:
      "In the entertainment world, celebrities often show exaggerated versions of themselves to the public, concealing their true thoughts and struggles beneath elaborate lies. Fans buy into these fabrications, showering their idols with undying love and support, until ...",
    dynamicLabel1: "Ep-11",
    dynamicLabel2: "11",
    dynamicLabel3: "MAL Score: 9.33",
    showExtras: true,
    updateDate: "25-Mar-2025",
  },
  {
    title: "Record of Ragnarok",
    description:
      "Record of Ragnarok Season 3 New Teaser is out! The production has officially started, no release date as of now.",
    dynamicLabel1: "Ep-4",
    dynamicLabel2: "170",
    dynamicLabel3: "MAL Score: 7.29",
    showExtras: false,
    updateDate: "16-Sep-2024",
  },
  {
    title: "Classroom of the Elite",
    description:
      "On the surface, Koudo Ikusei Senior High School is a utopia. The students enjoy an unparalleled amount of freedom, and it is ranked highly in Japan. However, the reality is less than ideal. Four classes, A through D, are ranked in order of merit, and only the top...",
    dynamicLabel1: "Ep-12",
    dynamicLabel2: "12",
    dynamicLabel3: "MAL Score: 7.86",
    showExtras: true,
    updateDate: "16-Sep-2024",
  },
  {
    title: "One-Punch Man",
    description:
      "One-Punch Man Season 3 begins in October 2025, took them 6 years to make a sequel!",
    dynamicLabel1: "Ep-2",
    dynamicLabel2: "12",
    dynamicLabel3: "MAL Score: 7.64",
    showExtras: false,
    updateDate: "16-Sep-2024",
  },
  {
    title: "Solo Leveling",
    description: "Solo Leveling beats One Piece! on crunchyroll (4.9/598.2k)",
    dynamicLabel1: "Ep-4",
    dynamicLabel2: "23",
    dynamicLabel3: "MAL Score: 8.85",
    showExtras: false,
    updateDate: "16-Sep-2024",
  },
];

const imageUrls = [
  "/Mystar",
  "/BlackClover",
  "/ClassroomoftheElite",
  "/7th-Time-Loop-The-Villainess-Enjoys-a-Carefree-Life-Married-to-Her-Worst-Enemy",
  "/Ranking-of-Kings",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const totalImages = images.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((img) => (img + 1) % totalImages);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [totalImages]);

  const changeImage = (step) => {
    setCurrentImage((img) => (img + step + totalImages) % totalImages);
  };

  return (
    <div className="relative w-full h-[40vh] lg:h-[100vh] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img
              className="w-full h-full object-cover object-center"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-1 p-1 md:bottom-5 md:left-4 md:right-16 md:p-4 flex flex-col">
              <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl font-nsansTitle">
                {imageTexts[index].title}
              </h2>

              {imageTexts[index].showExtras ? (
                <div className="flex flex-col">
                  <div className="flex gap-1 md:gap-2 mt-0 md:mt-4">
                    <span className="px-1 md:px-2 py-1 text-xs lg:text-sm text-white bg-green-600 rounded">
                      PG-13
                    </span>
                    <span className=" px-1 py-1 text-xs lg:text-sm text-white bg-blue-600 rounded">
                      {imageTexts[index].dynamicLabel1}
                    </span>
                    <span className="px-1 py-1 text-xs lg:text-sm text-white bg-gray-600 rounded">
                      {imageTexts[index].dynamicLabel2}
                    </span>
                    <span className="px-1 py-1 text-xs lg:text-sm text-white bg-purple-600 rounded">
                      {imageTexts[index].dynamicLabel3}
                    </span>
                  </div>
                  <p className="hidden lg:mt-4 lg:mb-4 lg:block overflow-hidden lg:max-h-[7em] lg:leading-tight lg:w-[40%]">
                    {imageTexts[index].description}
                  </p>

                  <div className="flex gap-2">
                    <button
                      className="px-2 py-1 mt-3 text-xs lg:text-base lg:px-4 lg:py-2 bg-blue-500 text-white rounded-l-full rounded-r-full hover:bg-blue-700 transition-all duration-300"
                      onClick={() => navigate(imageUrls[index])}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col w-[50%]">
                  <span className="px-3 w-36 lg:px-3 lg:py-1 lg:w-36 text-white bg-red-600 rounded lg:mb-4">
                    News Update
                  </span>
                  <p className="mt-4 mb-1 lg:mb-4 lg:text-lg text-xs w-72 lg:w-auto lg:leading-relaxed">
                    {imageTexts[index].description}
                  </p>
                </div>
              )}
              <p className="text-gray-400 mt-4 text-xs lg:text-base ">
                Updated on: {imageTexts[index].updateDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 right-4 flex flex-col gap-2">
        <button
          className="lg:p-3 p-1 bg-gray-700 text-white rounded hover:bg-blue-600 hover:text-black transition-all duration-300"
          onClick={() => changeImage(1)}
        >
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
        <button
          className="lg:p-3 p-1 bg-gray-700 text-white rounded hover:bg-blue-600 hover:text-black transition-all duration-300"
          onClick={() => changeImage(-1)}
        >
          <MdOutlineKeyboardArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
