import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Watertank = () => {

  const container = useRef(null);


  useGSAP(() => {
    gsap.to(".box", {
      x: 1400,
      rotate: 360,
      duration: 4,
      repeat: -1,
      yoyo: true, 
      delay:1,
      ease: "power1.inOut"
    });
  }, { scope: container }); 

  return (
 
    <div ref={container} className="p-10 border-2 border-gray-200">
      <div className="box w-[200px] h-[200px] bg-red-500 flex items-center justify-center text-white">
       
      </div>
    </div>
  );
};

export default Watertank;