import React from "react";
import { useNavigate } from "react-router-dom";

// Icons & Graphics from asset folder
import iconIphoneStatus from "../assets/icons/Iphone.svg";
import iconHomeIndicator from "../assets/icons/Home Indicator.svg";
import trackingMapBg from "../assets/images/Maps.png";
import driverProfileImg from "../assets/images/Driver Profile.png";
import iconArrowLeft from "../assets/icons/Arrow Left.svg";
import iconGps from "../assets/icons/Gps.svg";
import iconBike from "../assets/icons/Delivery Icon.svg";
import iconCall from "../assets/icons/Call Icon.svg";

// Tracking map layout vector assets
import iconRutePath from "../assets/icons/Rute.svg";
import iconLocationPin from "../assets/icons/Location.svg";
import iconLocationShadow from "../assets/icons/Shadow Location.svg";
import iconBikeDriver from "../assets/icons/Driver Icon.svg";

export default function Tracking() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 w-full relative h-[915px] overflow-hidden bg-white">
      {/* Top System Status Bar Layout Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50 px-6 pt-3 pointer-events-none">
        <img
          src={iconIphoneStatus}
          alt=""
          className="w-full object-contain brightness-0 opacity-80"
        />
      </div>

      {/* --- LIVE MAP LAYOUT ENGINE START --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Full Bleed Background Map Graphic layer */}
        <img
          src={trackingMapBg}
          alt="Tracking Map Base"
          className="w-full h-full object-cover"
        />

        {/* 1. Precise Route Overlay SVG  */}
        <div className="absolute top-[20%] left-[20%] right-[32%] pointer-events-none">
          <img
            src={iconRutePath}
            alt="Route Path Trace"
            className="w-full object-contain mix-blend-multiply"
          />
        </div>

        {/* 2. Driver Icon Overlay Moving Along Vector Path */}
        <div className="absolute top-[38%] left-[62%] z-10 w-12 h-12 bg-white rounded-full border border-neutral-100 shadow-md flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src={iconBikeDriver} alt="Driver Marker" className="w-8 h-8" />
          </div>
        </div>

        {/* 3. Destination Target Location Pin Marker Asset */}
        <div className="absolute top-[27%] left-[15%] z-10 transform translate-x-1/2 -translate-y-1/2">
          <img
            src={iconLocationPin}
            alt="Destination Pin Marker"
            className="w-5 h-5 drop-shadow-md"
          />
          <div className="absolute top-[110%] left-[1%] z-10 transform translate-x-1/2 -translate-y-1/2">
            <img
              src={iconLocationShadow}
              alt="Destination Marker"
              className="w-3 h-3"
            />
          </div>
        </div>
      </div>
      {/* --- LIVE MAP LAYOUT ENGINE END --- */}

      {/* Floating Action UI Buttons Header */}
      <div className="absolute top-14 left-8 right-8 flex justify-between items-center z-20">
        <button
          onClick={() => navigate("/home")}
          className="w-11 h-11 bg-white rounded-xl shadow-md flex items-center justify-center active:scale-95 transition-all border border-neutral-100 cursor-pointer"
        >
          <img src={iconArrowLeft} alt="Back to home" className="w-6 h-6" />
        </button>
        <button className="w-11 h-11 bg-white rounded-xl shadow-md flex items-center justify-center border border-neutral-100">
          <img src={iconGps} alt="Recenter GPS" className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Status Drawer Sheet Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-white px-8 pt-4 pb-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] z-20 flex flex-col items-center">
        <div className="w-11 h-1 bg-[#EAEAEA] rounded-full mb-4" />

        <h3 className="text-lg font-semibold text-coffee-dark text-center tracking-tight">
          10 minutes left
        </h3>
        <p className="text-xs text-[#9B9B9B] text-center mt-1 font-light">
          Delivery to{" "}
          <span className="font-semibold text-coffee-dark">Jl. Kpg Sutoyo</span>
        </p>

        <div className="w-full flex gap-2.5 mt-5 px-1">
          <div className="h-1 flex-1 bg-[#36C07E] rounded-full" />
          <div className="h-1 flex-1 bg-[#36C07E] rounded-full" />
          <div className="h-1 flex-1 bg-[#36C07E] rounded-full" />
          <div className="h-1 flex-1 bg-[#DFDFDF] rounded-full" />
        </div>

        <div className="mt-5 w-full border border-neutral-100 p-4 rounded-2xl flex items-center gap-4 bg-white shadow-sm">
          <div className="w-13 h-13 bg-white rounded-xl border border-neutral-100 flex items-center justify-center flex-shrink-0">
            <img src={iconBike} alt="" className="w-9 h-9" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-coffee-dark tracking-tight leading-tight">
              Delivered your order
            </h4>
            <p className="text-[11px] text-[#9B9B9B] mt-1 font-light leading-snug max-w-[210px]">
              We will deliver your goods to you in the shortest possible time.
            </p>
          </div>
        </div>

        <div className="mt-4 mb-4 w-full flex items-center justify-between px-1">
          <div className="flex gap-3 items-center">
            <div className="w-13 h-13 bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center border border-neutral-200 shadow-inner">
              <img
                src={driverProfileImg}
                alt="Brooklyn Simmons avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-coffee-dark tracking-tight">
                Brooklyn Simmons
              </h4>
              <p className="text-xs text-[#9B9B9B] mt-0.5 font-light">
                Personal Courier
              </p>
            </div>
          </div>

          <button className="w-13 h-13 border border-neutral-200 rounded-2xl flex items-center justify-center bg-white active:scale-90 transition-transform cursor-pointer shadow-sm hover:bg-neutral-50">
            <img
              src={iconCall}
              alt="Call driver"
              className="w-5 h-5 opacity-70"
            />
          </button>
        </div>

        <div className="w-full flex justify-center pointer-events-none pb-2 mt-1">
          <img src={iconHomeIndicator} alt="" className="w-36 opacity-30" />
        </div>
      </div>
    </div>
  );
}
