"use client";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useState } from "react";

const comments = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Das Mieten eines Luxusautos bei Alltagsauto-Exclusive war eine fantastische Erfahrung! Der Service war erstklassig und das Auto war in perfektem Zustand.",
    name: "Hans Müller",
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/94.jpg",
    text: "Ein Luxusauto bei Alltagsauto-Exclusive zu mieten hat meinen Urlaub unvergesslich gemacht. Der Fahrspaß und der Komfort waren einfach unschlagbar.",
    name: "Anna Schmidt",
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    text: "Ich habe noch nie ein so großartiges Fahrerlebnis gehabt. Das Luxusauto von Alltagsauto-Exclusive war makellos und der Service hervorragend.",
    name: "Peter Fischer",
  },
];

const CommentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevComment = () => {
    const isFirstComment = currentIndex === 0;
    const newIndex = isFirstComment ? comments.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextComment = () => {
    const isLastComment = currentIndex === comments.length - 1;
    const newIndex = isLastComment ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (

    <div className="flex flex-row justify-around  flex-nowrap bg-gray-600 text-customWhite h-screen items-center lg:p-10 ">
      <div className="flex items-center bg-green-700/50 text-white p-2 m-1 rounded-full cursor-pointer">
        <div className="" onClick={prevComment}>
          <MdOutlineNavigateBefore />
        </div>
        
      </div>
      <div className="flex flex-col items-center p-4 ">
        <div className="w-full flex flex-col items-center">
          <img
            src={comments[currentIndex].photo}
            alt="User"
            className=" w-48 h-48 rounded-full mb-4"
          />
          <p className=" text-2xl text-center mb-4 w-2/3">
            {comments[currentIndex].text}
          </p>
          <p className=" text-sm text-gray-500">
            - {comments[currentIndex].name}
          </p>
        </div>
      </div>
      <div className="flex items-center cursor-pointer bg-green-700/50 text-white p-2 m-1 rounded-full">
        <div  onClick={nextComment}>
          <MdOutlineNavigateNext />
        </div>
        
      </div>
    </div>
  );
};

export default CommentCarousel;
