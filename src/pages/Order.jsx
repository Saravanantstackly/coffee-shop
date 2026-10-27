import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons & Graphics from asset folder
import iconIphoneStatus from "../assets/icons/Iphone.svg";
import iconHomeIndicator from "../assets/icons/Home Indicator.svg";
import iconArrowLeft from "../assets/icons/Arrow Left.svg";
import iconEdit from "../assets/icons/Edit.svg";
import iconNote from "../assets/icons/Note.svg";
import iconDiscount from "../assets/icons/Discount Icon.svg";
import iconArrowRight from "../assets/icons/Arrow Right.svg";
import iconWallet from "../assets/icons/Wallet.svg";
import iconArrowDown from "../assets/icons/Arrow Down.svg";

// Coffee Product Image Asset
import coffeeItemImg from "../assets/images/Caffe Mocha.png";

export default function Order() {
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState("Deliver");
  const [count, setCount] = useState(1);

  return (
    <div className="flex-1 w-full bg-[#F9F9F9] relative flex flex-col justify-between overflow-hidden">
      {/* Top System Status Bar Layout Overlay */}
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
          <h2 className="text-lg font-semibold text-coffee-dark">Order</h2>
          <div className="w-6 h-6" />
        </div>

        {/* Segmented Selector Toggle Switch */}
        <div className="p-1 bg-[#EDEDED] rounded-2xl flex">
          {["Deliver", "Pick Up"].map((type) => {
            const isSelected = deliveryType === type;
            return (
              <button
                key={type}
                onClick={() => setDeliveryType(type)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? "bg-coffee-primary text-white shadow-sm"
                    : "text-[#2F2D30] font-light"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Delivery Address Layout Card */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-coffee-dark tracking-tight">
            Delivery Address
          </h3>
          <p className="text-sm font-bold text-coffee-dark mt-3">
            Jl. Kpg Sutoyo
          </p>
          <p className="text-xs text-[#9B9B9B] mt-1 font-light">
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </p>

          <div className="flex gap-2 mt-4">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 bg-white rounded-full text-xs text-coffee-dark font-light cursor-pointer active:bg-neutral-50 transition-colors">
              <img src={iconEdit} alt="" className="w-3.5 h-3.5 opacity-60" />{" "}
              Edit Address
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 bg-white rounded-full text-xs text-coffee-dark font-light cursor-pointer active:bg-neutral-50 transition-colors">
              <img src={iconNote} alt="" className="w-3.5 h-3.5 opacity-60" />{" "}
              Add Note
            </button>
          </div>
        </div>

        {/* Coffee Basket Item Row */}
        <div className="mt-6 pt-6 border-t border-neutral-100 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img
              src={coffeeItemImg}
              alt="Caffe Mocha"
              className="w-14 h-14 object-cover rounded-2xl shadow-sm"
            />
            <div>
              <h4 className="text-base font-semibold text-coffee-dark tracking-tight">
                Caffe Mocha
              </h4>
              <p className="text-xs text-[#9B9B9B] mt-0.5 font-light">
                Deep Foam
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount(Math.max(1, count - 1))}
              className="w-5 h-5 bg-white rounded-full border border-neutral-200 flex items-center justify-center text-coffee-dark font-light cursor-pointer active:bg-neutral-50"
            >
              -
            </button>
            <span className="text-sm font-semibold text-coffee-dark w-4 text-center">
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-5 h-5 bg-white rounded-full border border-neutral-200 flex items-center justify-center text-coffee-dark font-light cursor-pointer active:bg-neutral-50"
            >
              +
            </button>
          </div>
        </div>

        {/* Promo Applied Action Row Block */}
        <button className="mt-6 w-full p-4 bg-white border border-neutral-200 rounded-2xl flex items-center justify-between active:bg-neutral-50 transition-colors cursor-pointer shadow-sm">
          <div className="flex items-center gap-3">
            <img
              src={iconDiscount}
              alt=""
              className="w-5 h-5 text-coffee-primary"
            />
            <span className="text-sm font-semibold text-coffee-dark">
              1 Discount is Applies
            </span>
          </div>
          <img src={iconArrowRight} alt="" className="w-4 h-4 opacity-60" />
        </button>

        {/* Payment Calculation Details Wrapper Section */}
        <div className="mt-6 pt-6 border-t border-neutral-100 pb-6">
          <h3 className="text-base font-semibold text-coffee-dark mb-3 tracking-tight">
            Payment Summary
          </h3>

          <div className="flex justify-between items-center text-sm mb-3">
            <span className="text-coffee-dark font-light">Price</span>
            <span className="font-semibold text-coffee-dark font-sora">
              $ 4.53
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-coffee-dark font-light">Delivery Fee</span>
            <div className="flex items-center gap-2 font-sora">
              <span className="text-xs text-[#9B9B9B] line-through font-light">
                $ 2.00
              </span>
              <span className="font-semibold text-coffee-dark">$ 1.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Base Component Card Block */}
      <div className="bg-white border-t border-neutral-100 flex flex-col items-center">
        {/* Cash / Wallet Dynamic Picker Selector Row Option */}
        <div className="w-full px-8 pt-4 flex justify-between items-center cursor-pointer active:bg-neutral-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100">
              <img
                src={iconWallet}
                alt=""
                className="w-5 h-5 text-coffee-primary"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-coffee-dark leading-none">
                Cash/Wallet
              </h4>
              <p className="text-[11px] text-coffee-primary font-bold font-sora mt-1">
                $ 5.53
              </p>
            </div>
          </div>
          {/* Down Arrow */}
          <img src={iconArrowDown} alt="" className="w-4 h-4 opacity-60" />
        </div>

        {/* Main Form Confirmation Action Execution Trigger Button */}
        <div className="w-full px-8 pt-4 pb-2">
          <button
            onClick={() => navigate("/tracking")}
            className="w-full py-4 bg-coffee-primary text-white font-semibold text-base rounded-2xl active:scale-95 transition-transform cursor-pointer shadow-lg shadow-coffee-primary/10"
          >
            Order
          </button>
        </div>

        {/* Home Indicator Layout */}
        <div className="w-full flex justify-center pointer-events-none pb-2 mt-1">
          <img src={iconHomeIndicator} alt="" className="w-36 opacity-150" />
        </div>
      </div>
    </div>
  );
}
