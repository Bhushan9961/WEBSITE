// "use client";
// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// const Approach = () => {


//   return (
//     <section className="w-full py-20 pt-0">

//       <h1 className="heading mb-16">
//         Your Partner in <span className="text-purple">Digital Excellence</span> and <strong>Web Development Success</strong>
//       </h1>


//       <div className="mt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 ">

//         <Card
//           title="Empowering Innovation"
//           icon={<AceternityIcon order="Our Vision" />}
//           des="At GlobalWebMinds, our mission is to ignite innovation and empower businesses through web development to excel in a rapidly evolving digital landscape. We are dedicated to being your strategic partner in navigating transformation, ensuring you thrive at every step."
//         >
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
//           />
//         </Card>

//         <Card
//           title="Your Success Matters"
//           icon={<AceternityIcon order=" Mission" />}
//           des="We prioritize your success with a collaborative approach to web development , customizing solutions to meet your unique needs while ensuring transparency and flexibility throughout the process."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}

//             containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[

//               [255, 166, 158],
//               [221, 255, 247],
//             ]}
//             dotSize={2}
//           />

//         </Card>

//         <Card
//           title="Committed to Excellence"
//           icon={<AceternityIcon order="Commitment" />}
//           des="We are committed to delivering <strong>web development solutions that ensure excellence, from project initiation to completion. Our team is dedicated to maintaining high standards of quality, transparency, and innovation in every project."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Approach;

// const Card = ({
//   title,
//   icon,
//   children,
//   // add this one for the desc
//   des,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
//   des: string;
// }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}

//       className="border border-black/[0.2] group/canvas-card flex items-center justify-center
//        dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
//       style={{

//         background: "rgb(4,7,29)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >

//       <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20 px-10">
//         <div
//           // add this for making it center
//           // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
//           className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
//         group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
//         >
//           {icon}
//         </div>
//         <h2
//           // change text-3xl, add text-center
//           className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//         >
//           {title}
//         </h2>
//         {/* add this one for the description */}
//         <p
//           className="text-sm opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//           style={{ color: "#E4ECFF" }}
//         >
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };

// const AceternityIcon = ({ order }: { order: string }) => {
//   return (
//     <div>
//       {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
//       {/* change rounded-lg, text-purple px-5 py-2 */}
//       {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
//       {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
//       <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
//         <span
//           className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
//          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
//         />
//         <span
//           className="inline-flex h-full w-full cursor-pointer items-center 
//         justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
//         >
//           {order}
//         </span>
//       </button>
//     </div>
//     // remove the svg and add the button
//     // <svg
//     //   width="66"
//     //   height="65"
//     //   viewBox="0 0 66 65"
//     //   fill="none"
//     //   xmlns="http://www.w3.org/2000/svg"
//     //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     // >
//     //   <path
//     //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//     //     stroke="currentColor"
//     //     strokeWidth="15"
//     //     strokeMiterlimit="3.86874"
//     //     strokeLinecap="round"
//     //     style={{ mixBlendMode: "darken" }}
//     //   />
//     // </svg>
//   );
// };

// export const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };






"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 pt-0">
      <h1 className="heading mb-16">
        Your Partner In <span className="text-purple">Digital Excellence</span> And <strong>Web Development Success</strong>
      </h1>

      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 ">
        <Card
          title="Empowering Innovation"
          icon={<AceternityIcon order="Our Vision" />}
          des="At GlobalWebMinds, our vision is to ignite innovation and empower businesses through transformative web development solutions. We aim to be your strategic partner in navigating the rapidly evolving digital landscape, ensuring you thrive at every stage of your growth journey."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Your Success Matters"
          icon={<AceternityIcon order="Mission" />}
          des="We prioritize your success by adopting a collaborative approach to freelancing web development. Our team customizes solutions to meet your unique needs while ensuring transparency and flexibility throughout the entire process."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[ [255, 166, 158], [221, 255, 247], ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Committed to Excellence"
          icon={<AceternityIcon order="Commitment" />}
          des="We are committed to delivering exceptional web development solutions that ensure excellence from project initiation to completion. Our dedicated team upholds the highest standards of quality, transparency, and innovation in every project we undertake."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

// Use SVGProps to define props for the Icon component
import { SVGProps } from "react";

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
