import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tailwind from "../../assets/tailwind.png";
import nextJs from "../../assets/nextjs.png";
import mysql from "../../assets/mysql.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.svg";
import firebase from "../../assets/firebase.png";
import {
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function SkallIcon() {
  const icons = [
    { icon: faFigma, name: "Figma", style: "text-pink-500" },
    { icon: faHtml5, name: "HTML5", style: "text-orange-500" },
    { icon: faCss3Alt, name: "CSS3", style: "text-blue-500" },
    { icon: faBootstrap, name: "Bootstrap", style: "text-purple-500" },
    { img: tailwind, name: "Tailwind", style: "w-15 h-12" },
    { icon: faJs, name: "JavaScript", style: "text-yellow-500" },
    { icon: faReact, name: "React", style: "text-cyan-500" },
    {
      img: nextJs,
      name: "Next.js",
      style: "bg-black p-1 rounded-full w-12 h-12",
    },
    { icon: faNode, name: "Node.js", style: "text-green-500" },
    { img: express, name: "Express.js", style: "w-20 h-12" },
    { img: mongodb, name: "MongoDB", style: "w-20 h-12" },
    { img: firebase, name: "Firebase", style: "w-9 h-12" },
    { img: mysql, name: "MySQL", style: "w-12 h-12" },
    { icon: faGit, name: "Git", style: "text-red-500" },
    { icon: faGithub, name: "GitHub", style: "text-gray-500" },
  ];

  return (
    <div className="bg-gray-800 py-8 px-4 text-white">
      <div className=" container mx-auto flex flex-wrap justify-evenly items-center gap-6 p-6 ">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center min-w-[80px]">
            {item.icon ? (
              <FontAwesomeIcon
                icon={item.icon}
                className={`text-5xl ${item.style}`}
              />
            ) : (
              <img src={item.img} alt={item.name} className={item.style} />
            )}
            <span className="mt-2 text-sm font-semibold text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkallIcon;
