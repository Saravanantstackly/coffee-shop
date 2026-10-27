import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconHome from "../assets/icons/Home.svg";
import iconHeart from "../assets/icons/Heart.svg";
import iconBag from "../assets/icons/Bag.svg";
import iconBell from "../assets/icons/Bell.svg";
import iconDotHome from "../assets/icons/Dot Home.svg";
import iconHomeIndicator from "../assets/icons/Home Indicator.svg";

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/home", icon: iconHome, name: "Home" },
    { path: "/favorites", icon: iconHeart, name: "Favorites" },
    { path: "/order", icon: iconBag, name: "Cart" },
    { path: "/notifications", icon: iconBell, name: "Alerts" },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-white border-t border-coffee-gray flex flex-col justify-between items-center px-6 pt-2 pb-2 z-50">
      {/* Icon Action Grid Tray */}
      <div className="w-full flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => {
                if (
                  item.path === "/favorites" ||
                  item.path === "/notifications"
                ) {
                  return; // disables click event!
                }
                navigate(item.path);
              }}
              className="relative flex flex-col items-center justify-center w-12 h-12"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              {isActive && (
                <img
                  src={iconDotHome}
                  alt="active indicator"
                  className="absolute bottom-0 w-2 h-1"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Home Indicator */}
      <div className="w-full flex justify-center pointer-events-none mt-1">
        <img src={iconHomeIndicator} alt="" className="w-36 opacity-150" />
      </div>
    </div>
  );
}
