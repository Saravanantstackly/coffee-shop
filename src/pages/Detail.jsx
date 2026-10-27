import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons & Graphics from assets folder
import iconIphoneStatus from "../assets/icons/Iphone.svg";
import iconHomeIndicator from "../assets/icons/Home Indicator.svg";
import iconArrowLeft from "../assets/icons/Arrow Left.svg";
import iconHeart from "../assets/icons/Heart.svg";
import iconStar from "../assets/icons/star.svg";

// Figma Specification Badges
import iconDelivery from "../assets/icons/Delivery Icon.svg";
import iconBean from "../assets/icons/Bean Icon.svg";
import iconMilk from "../assets/icons/Milk Icon.svg";

// Coffee Image Asset
import detailCoffeeImg from "../assets/images/Caffe Mocha.png";

export default function Detail() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="flex-1 w-full bg-white relative flex flex-col justify-between overflow-hidden">
      {/* Top System Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 px-6 pt-3 pointer-events-none">
        <img
          src={iconIphoneStatus}
          alt=""
          className="w-full object-contain brightness-0 opacity-80"
        />
      </div>

      {/* Main Form Scrolling Body */}
      <div className="px-8 pt-14 overflow-y-auto flex-1 scrollbar-none">
        {/* Navigation Header Bar */}
        <div className="flex justify-between items-center mb-6 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 active:scale-90 transition-transform cursor-pointer"
          >
            <img src={iconArrowLeft} alt="Go Back" className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold text-coffee-dark">Detail</h2>
          <button className="p-2 -mr-2 active:scale-90 transition-transform cursor-pointer">
            <img src={iconHeart} alt="Add to favorites" className="w-6 h-6" />
          </button>
        </div>

        {/* Caffe Mocha Graphic Display */}
        <img
          src={detailCoffeeImg}
          alt="Caffe Mocha View"
          className="w-full h-56 object-cover rounded-3xl mt-2"
        />

        <div className="flex justify-between items-start mt-5">
          <div>
            <h1 className="text-xl font-semibold text-coffee-dark tracking-tight">
              Caffe Mocha
            </h1>
            <p className="text-xs text-[#9B9B9B] mt-1 font-light">Ice/Hot</p>
            <div className="flex items-center gap-1 mt-3">
              <img src={iconStar} alt="" className="w-3.5 h-3.5" />
              <span className="text-sm font-semibold text-coffee-dark ml-0.5">
                4.8
              </span>
              <span className="text-xs text-[#9B9B9B] font-light">(230)</span>
            </div>
          </div>

          {/* Functional Layout Icon Badges Tray */}
          <div className="flex gap-2.5">
            {/* Delivery Icon */}
            <div className="w-11 h-11 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100">
              <img
                src={iconDelivery}
                alt="Delivery available badge"
                className="w-8 h-8"
              />
            </div>
            <div className="w-11 h-11 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100">
              <img
                src={iconBean}
                alt="Coffee bean details"
                className="w-6 h-6"
              />
            </div>
            <div className="w-11 h-11 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100">
              <img
                src={iconMilk}
                alt="Milk base configuration details"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 pt-5 border-t border-coffee-gray">
          <h3 className="text-base font-semibold text-coffee-dark">
            Description
          </h3>
          <p className="text-sm leading-[22px] text-[#9B9B9B] mt-2 font-light">
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml
            of espresso coffee and 85ml of fresh milk the fo...{" "}
            <span className="text-coffee-primary font-semibold cursor-pointer">
              Read More
            </span>
          </p>
        </div>

        {/* Size Selector Framework Options */}
        <div className="mt-6 pb-6">
          <h3 className="text-base font-semibold text-coffee-dark">Size</h3>
          <div className="flex gap-4 mt-3">
            {["S", "M", "L"].map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 py-3 text-sm rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? "border-coffee-primary bg-coffee-primary/5 text-coffee-primary font-semibold shadow-sm shadow-coffee-primary/5"
                      : "border-coffee-gray text-coffee-dark bg-transparent font-light"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Sticky Segment */}
      <div className="bg-white border-t border-coffee-gray flex flex-col items-center">
        <div className="w-full px-8 pt-5 pb-2 flex justify-between items-center gap-6">
          <div>
            <p className="text-xs text-[#9B9B9B] font-light">Price</p>
            <p className="text-xl font-bold text-coffee-primary mt-1 font-sora">
              $ 4.53
            </p>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="flex-1 py-5 bg-coffee-primary text-white font-semibold text-base rounded-2xl active:scale-95 transition-transform cursor-pointer shadow-lg shadow-coffee-primary/10"
          >
            Buy Now
          </button>
        </div>

        {/* Home Indicator strip */}
        <div className="w-full flex justify-center pointer-events-none pb-2 mt-1">
          <img src={iconHomeIndicator} alt="" className="w-36 opacity-150" />
        </div>
      </div>
    </div>
  );
}
