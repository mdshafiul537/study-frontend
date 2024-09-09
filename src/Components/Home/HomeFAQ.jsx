/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HomeFAQ = ({ ...props }) => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 gap-5">
        <div className="text-2xl font-bold">
          <h2 className="text-center">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-7 gap-5 border-b border-emerald-400 py-3">
          <div className="col-span-2  py-2">
            <h3 className="text-xl font-bold">
              <span className="border border-gray-400 py-1 px-2 rounded-lg bg-emerald-500">
                <i className="fa-solid fa-q"></i>
              </span>{" "}
              Is it Free?
            </h3>
          </div>
          <div className="col-span-5  py-2">
            <span className="bg-emerald-600 border border-gray-400 py-1 px-2 rounded-lg">
              <i className="fa-solid fa-a"></i>
            </span>
            <p>
              The majority of our challenges are free, yes. We do have some that
              are premium and require a Pro subscription to access. It will say
              on each challenge whether they are free or premium, so it's easy
              to tell the difference.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-5 border-b border-emerald-400 py-3">
          <div className="col-span-2  py-2">
            <h3 className="text-xl font-bold">
              <span className="border border-gray-400 py-1 px-2 rounded-lg bg-emerald-500">
                <i className="fa-solid fa-q"></i>
              </span>{" "}
              Can I take the assignments as a beginner??
            </h3>
          </div>
          <div className="col-span-5  py-2">
            <span className="bg-emerald-600 border border-gray-400 py-1 px-2 rounded-lg">
              <i className="fa-solid fa-a"></i>
            </span>
            <p>
              For sure! Our challenges have five different 3 of difficulty. We'd
              recommend starting with the newbie ones. You might also want to
              start with the Easy Task. As you build up your skills and
              confidence, you can take on more complex assignments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-5 border-b border-emerald-400 py-3">
          <div className="col-span-2  py-2">
            <h3 className="text-xl font-bold">
              <span className="border border-gray-400 py-1 px-2 rounded-lg bg-emerald-500">
                <i className="fa-solid fa-q"></i>
              </span>{" "}
              How do I start?
            </h3>
          </div>
          <div className="col-span-5 py-2">
            <span className="bg-emerald-600 border border-gray-400 py-1 px-2 rounded-lg">
              <i className="fa-solid fa-a"></i>
            </span>
            <p>
              You can see all of our assignments here. To start a assignments,
              click the "Start assignments" button on the assignments page. This
              will take you to the Assignment Hub, where you can start.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-5 border-b border-emerald-400 py-3">
          <div className="col-span-2  py-2">
            <h3 className="text-xl font-bold">
              <span className="border border-gray-400 py-1 px-2 rounded-lg bg-emerald-500">
                <i className="fa-solid fa-q"></i>
              </span>{" "}
              How can I get help if I'm stuck on a Assignment?
            </h3>
          </div>
          <div className="col-span-5  py-2">
            <span className="bg-emerald-600 border border-gray-400 py-1 px-2 rounded-lg">
              <i className="fa-solid fa-a"></i>
            </span>
            <p>
              The best (and quickest) way to get help on a challenge is in our
              Discord server. There are students of other st in there, so it's a
              great place to ask questions. We even have a dedicated "help"
              channel! If you haven't joined yet, you can get an invite to our
              Discord server here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
