import React from "react";
import Feedbackcard from "../cards/feedbackcard";

const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Food Critic | Cambridge",
    comment: "The food was delivered hot and on time. Great service!",
  },
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Chef | Quarter Ltd.",
    comment: "Excellent delivery! The dishes were well-packed and delicious.",
  },
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Culinary Student | Zimbabwe",
    comment: "Fast delivery and the food was still fresh and tasty.",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Chef | Indonesia",
    comment:
      "Great experience! The food arrived quickly and was very delicious.",
  },
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full Stack Web Developer | Algeria",
    comment: "The food was good, but the delivery took longer than expected.",
  },
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full Stack Web Developer | Canada",
    comment:
      "Join this service! The focus on timely delivery and food quality is impressive.",
  },
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full Stack Web Developer | Canada",
    comment:
      "Join this service! The focus on timely delivery and food quality is impressive.",
  },
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full Stack Web Developer | Canada",
    comment:
      "Join this service! The focus on timely delivery and food quality is impressive.",
  },
];
const Feedback = () => {
  return (
    <div className="flex flex-col items-center justify-end  bg-gray-800">
      <div className=" text-xl md:text-3xl p-2 border-b text-white">
        <h1>Customer's FeedBack</h1>
      </div>
      <div className="md:w-[90%] h-[70vh] p-2 800px:w-[85%] m-auto overflow-y-scroll  ">
        <div className="flex flex-col items-center justify-between ">
          {reviews &&
            reviews.map((i, index) => <Feedbackcard item={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
