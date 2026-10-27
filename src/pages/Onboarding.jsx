import React from "react";
import { useNavigate } from "react-router-dom";
import onboardingBg from "../assets/images/Onboarding Bg.png";
import iconIphoneStatus from "../assets/icons/Iphone.svg";
import iconHomeIndicator from "../assets/icons/Home Indicator.svg";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-end w-full h-[915px] bg-black overflow-hidden">
      {/* 1. Background Hero Image Element Layer */}
      <img
        src={onboardingBg}
        alt="Coffee background"
        className="absolute top-0 left-0 w-full h-[65%] object-cover object-bottom z-0"
      />

      {/* 2. Top System Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 px-6 pt-3 pb-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <img
          src={iconIphoneStatus}
          alt="System Status Bar"
          className="w-full h-auto object-contain brightness-0 invert"
        />
      </div>

      {/* 3. Content Layout */}
      <div className="relative z-10 px-8 pb-16 pt-8 bg-gradient-to-t from-black via-black/95 to-transparent flex flex-col items-center text-center">
        <h1 className="text-[34px] font-semibold leading-[44px] text-white tracking-wide max-w-[320px]">
          Fall in Love with Coffee in Blissful Delight!
        </h1>

        <p className="mt-2 text-sm leading-[22px] text-[#A9A9A9] max-w-[280px]">
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </p>

        {/* Navigation Action Trigger Button */}
        <button
          onClick={() => navigate("/home")}
          className="mt-8 w-full py-5 bg-coffee-primary text-white font-semibold text-base rounded-2xl active:scale-[0.98] transition-transform duration-200 cursor-pointer shadow-lg shadow-coffee-primary/20"
        >
          Get Started
        </button>
      </div>

      {/* 4. Bottom System Home Indicator Strip */}
      <div className="absolute bottom-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <img src={iconHomeIndicator} alt="" className="w-36 opacity-150" />
      </div>
    </div>
  );
}
