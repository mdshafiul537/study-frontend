import React from "react";
import Lottie from "lottie-react";
import createFile from "../../../public/assets/lottie/create.json";
import perticipateFile from "../../../public/assets/lottie/perticipate.json";
import communicateFile from "../../../public/assets/lottie/communicate.json";
import shareFile from "../../../public/assets/lottie/share.json";
import knowledgeFile from "../../../public/assets/lottie/knowledge.json";
import difficultyFile from "../../../public/assets/lottie/difficulty.json";
import resourcesFile from "../../../public/assets/lottie/resources.json";

const FeatureSection = ({ ...props }) => {
  return (
    <div className="w-full grid grid-cols-1 font-bold py-8 gap-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-center py-4">
          <span className="px-8 border-b border-gray-400">Our Feature</span>
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2 flex flex-col p-4 border ">
          <div className="w-full h-52 ">
            <Lottie animationData={createFile} className="h-full" />
          </div>
          <h3>Publish Assignment </h3>
        </div>

        <div className="col-span-2 flex flex-col p-4 border">
          <div className="w-full h-52">
            <Lottie animationData={perticipateFile} className="h-full" />
          </div>
          <h3>Perticipate Assignment </h3>
        </div>

        <div className="col-span-2 flex flex-col p-4 border">
          <div className="w-full h-52">
            <Lottie animationData={knowledgeFile} className="h-full" />
          </div>
          <h3>Knowledge Sharing </h3>
        </div>

        <div className="col-span-2 flex flex-col p-4 border">
          <div className="w-full h-52">
            <Lottie animationData={difficultyFile} className="h-full" />
          </div>
          <h3>Chose Difficulty Levels </h3>
        </div>

        <div className="col-span-2 flex flex-col p-4 border">
          <div className="w-full h-52">
            <Lottie animationData={communicateFile} className="h-full" />
          </div>
          <h3>Communication</h3>
        </div>

        <div className="col-span-2 flex flex-col p-4 border">
          <div className="w-full h-52">
            <Lottie animationData={resourcesFile} className="h-full" />
          </div>
          <h3>Resources </h3>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
