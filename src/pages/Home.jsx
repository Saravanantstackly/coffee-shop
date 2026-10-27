import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

// System Icons & Graphics from assets
import iconIphoneStatus from "../assets/icons/Iphone.svg";
import iconArrowDown from "../assets/icons/Arrow Down.svg";
import iconSearch from "../assets/icons/Search.svg";
import iconFilet from "../assets/icons/Filet Icon.svg";
import iconAdd from "../assets/icons/Add Icon.svg";
import iconStar from "../assets/icons/star.svg";

// Image Assets
import bannerHome from "../assets/images/Banner Home.png";
import caffeMocha from "../assets/images/Caffe Mocha.png";
import flatWhite from "../assets/images/Flat White.png";
import mochaFusi from "../assets/images/Mocha Fusi.png";
import caffePanna from "../assets/images/Caffe Panna.png";

const CATEGORIES = ["All Coffee", "Machiato", "Latte", "Americano"];

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Coffee");

  return (
    <div className="flex-1 w-full pb-28 relative flex flex-col overflow-hidden bg-[#F9F9F9]">
      {/* Top System Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 px-6 pt-3 pointer-events-none">
        <img
          src={iconIphoneStatus}
          alt=""
          className="w-full object-contain invert brightness-0"
        />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none">
        {/* Dark Charcoal Top Banner Layout Section */}
        <div className="bg-[#1C1C1C] px-8 pt-16 pb-24">
          <div className="mt-2">
            <p className="text-xs text-[#B7B7B7] font-light">Location</p>
            <div className="flex items-center gap-1 mt-1 cursor-pointer">
              <p className="text-sm font-semibold text-white">
                Bilzen, Tanjungbalai
              </p>
              <img
                src={iconArrowDown}
                alt=""
                className="w-3 h-3 brightness-700"
              />
            </div>
          </div>

          {/* Search bar input container block */}
          <div className="mt-6 flex gap-3 h-13">
            <div className="flex-1 bg-[#313131] rounded-2xl flex items-center px-4 gap-2 border border-[#313131] focus-within:border-coffee-primary/40 transition-colors">
              <img src={iconSearch} alt="" className="w-5 h-5 opacity-70" />
              <input
                type="text"
                placeholder="Search coffee"
                className="bg-transparent flex-1 outline-none text-sm text-white placeholder-[#989898] font-light"
              />
            </div>
            <button className="w-13 h-13 bg-coffee-primary rounded-2xl flex items-center justify-center active:scale-95 transition-all shadow-md shadow-coffee-primary/10 cursor-pointer">
              <img
                src={iconFilet}
                alt="Filter layout"
                className="w-5 h-5 invert brightness-10"
              />
            </button>
          </div>
        </div>

        {/* Dynamic Typography Promo Banner Area */}
        <div className="mx-8 -mt-14 rounded-3xl overflow-hidden shadow-lg h-36 relative flex flex-col justify-center px-6">
          <img
            src={bannerHome}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Banner Area Text */}
          <div className="relative z-10 flex flex-col items-start">
            <span className="bg-[#ED5151] text-white text-[10px] font-semibold px-2 py-0.5 rounded-md tracking-wide">
              Promo
            </span>
            <h2 className="text-[32px] font-semibold text-white mt-2 leading-none tracking-tight">
              Buy one get
            </h2>
            <h2 className="text-[32px] font-semibold text-white leading-tight tracking-tight mt-1">
              one FREE
            </h2>
          </div>
        </div>

        {/* Horizontal Category Tab Navigation Tray */}
        <div className="mt-6 overflow-x-auto flex gap-2 px-8 scrollbar-none py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-coffee-primary text-white font-semibold"
                    : "bg-white text-[#2F2D30] border border-neutral-100 font-light shadow-sm"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid Area with Two Rows */}
        <div className="mt-5 px-8 grid grid-cols-2 gap-x-4 gap-y-4 pb-6">
          {/* ROW 1 - Item 1: Caffe Mocha */}
          <div
            onClick={() => navigate("/detail")}
            className="bg-white p-2.5 rounded-[24px] flex flex-col justify-between shadow-sm border border-neutral-50 active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={caffeMocha}
                alt="Caffe Mocha drink"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/15 backdrop-blur-md px-2 py-0.5 rounded-lg">
                <img src={iconStar} alt="" className="w-2.5 h-2.5" />
                <span className="text-white text-[10px] font-semibold">
                  4.8
                </span>
              </div>
            </div>
            <div className="mt-3 px-1 pb-1">
              <h3 className="text-base font-semibold text-coffee-dark tracking-tight leading-none">
                Caffe Mocha
              </h3>
              <p className="text-[11px] text-[#9B9B9B] mt-1 font-light">
                Deep Foam
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-[#2F4B4E] font-sora">
                  $ 4.53
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/order");
                  }}
                  className="w-8 h-8 bg-coffee-primary rounded-xl flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <img src={iconAdd} alt="Add drink" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* ROW 1 - Item 2: Flat White */}
          <div
            onClick={() => navigate("/detail")}
            className="bg-white p-2.5 rounded-[24px] flex flex-col justify-between shadow-sm border border-neutral-50 active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={flatWhite}
                alt="Flat White espresso"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/15 backdrop-blur-md px-2 py-0.5 rounded-lg">
                <img src={iconStar} alt="" className="w-2.5 h-2.5" />
                <span className="text-white text-[10px] font-semibold">
                  4.8
                </span>
              </div>
            </div>
            <div className="mt-3 px-1 pb-1">
              <h3 className="text-base font-semibold text-coffee-dark tracking-tight leading-none">
                Flat White
              </h3>
              <p className="text-[11px] text-[#9B9B9B] mt-1 font-light">
                Espresso
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-[#2F4B4E] font-sora">
                  $ 3.53
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/order");
                  }}
                  className="w-8 h-8 bg-coffee-primary rounded-xl flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <img src={iconAdd} alt="Add drink" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* ROW 2 - Item 1: Mocha Fusi */}
          <div
            onClick={() => navigate("/detail")}
            className="bg-white p-2.5 rounded-[24px] flex flex-col justify-between shadow-sm border border-neutral-50 active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={mochaFusi}
                alt="Caffe Mocha drink"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/15 backdrop-blur-md px-2 py-0.5 rounded-lg">
                <img src={iconStar} alt="" className="w-2.5 h-2.5" />
                <span className="text-white text-[10px] font-semibold">
                  4.8
                </span>
              </div>
            </div>
            <div className="mt-3 px-1 pb-1">
              <h3 className="text-base font-semibold text-coffee-dark tracking-tight leading-none">
                Mocha Fusi
              </h3>
              <p className="text-[11px] text-[#9B9B9B] mt-1 font-light">
                Ice/Hot
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-[#2F4B4E] font-sora">
                  $ 7.53
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/order");
                  }}
                  className="w-8 h-8 bg-coffee-primary rounded-xl flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <img src={iconAdd} alt="Add drink" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* ROW 2 - Item 2: Caffe Panna */}
          <div
            onClick={() => navigate("/detail")}
            className="bg-white p-2.5 rounded-[24px] flex flex-col justify-between shadow-sm border border-neutral-50 active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={caffePanna}
                alt="Caffe Panna Drink"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/15 backdrop-blur-md px-2 py-0.5 rounded-lg">
                <img src={iconStar} alt="" className="w-2.5 h-2.5" />
                <span className="text-white text-[10px] font-semibold">
                  4.8
                </span>
              </div>
            </div>
            <div className="mt-3 px-1 pb-1">
              <h3 className="text-base font-semibold text-coffee-dark tracking-tight leading-none">
                Caffe Panna
              </h3>
              <p className="text-[11px] text-[#9B9B9B] mt-1 font-light">
                Ice/Hot
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-[#2F4B4E] font-sora">
                  $ 5.53
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/order");
                  }}
                  className="w-8 h-8 bg-coffee-primary rounded-xl flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <img src={iconAdd} alt="Add drink" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Application Navigation Bar */}
      <BottomNav />
    </div>
  );
}
