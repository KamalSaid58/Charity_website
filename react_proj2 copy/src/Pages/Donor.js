import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import SideNavBarDonor from '../Components/SideNavBarDonor';

function Donor() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const $root = useRef(null);
  const $indicator1 = useRef(null);
  const $indicator2 = useRef(null);
  const $items = useRef([]);

  const handleViewRequestedItemsClick = () => {
    navigate("/ViewReqDon");
  };

  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategory(category);
    // Implement logic to handle selected category
  };

  useEffect(() => {
    const animate = () => {
      if (
        !$root.current ||
        !$items.current[selectedCategory] ||
        !$indicator1.current ||
        !$indicator2.current
      )
        return;

      const menuOffset = $root.current.getBoundingClientRect();
      const activeItem = $items.current[selectedCategory].current;
      const { width, height, top, left } = activeItem.getBoundingClientRect();

      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: "#111", // Adjust color if needed
        ease: "elastic.out(.7, .7)",
        duration: 0.8,
      };

      gsap.to($indicator1.current, {
        ...settings,
      });

      gsap.to($indicator2.current, {
        ...settings,
        duration: 1,
      });
    };

    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [selectedCategory]);

  return (
    <div>
      {/* Render SideNavBar component */}
      {/* The rest of your Donor component content */}
    </div>
  );
}

export default Donor;
