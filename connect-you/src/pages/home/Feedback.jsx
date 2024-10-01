import React from "react";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/feedback/feedback.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Feedback</p>
            <h2 className="title">What Our Previous Client Say About Us</h2>
            <blockquote className="my-5 text-secondary leadind-[30px]">
              "This online event management platform makes it easy to register,
              sell tickets, and manage events with ease. Its user-friendly
              interface simplifies the entire process!"
            </blockquote>

            {/* Avatar  */}
            <div className="flex items-center gap-4 flex-warp">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/feedback/avatar/1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/feedback/avatar/2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/feedback/avatar/3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+9</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>{" "}
                  <span className="text-[#807E7E]">87 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
