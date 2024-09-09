/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FAQItem from "./FAQItem";

const HomeFAQ = ({ ...props }) => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 gap-8">
        <div className="text-2xl font-bold">
          <h2 className="text-center">Frequently Asked Questions</h2>
        </div>
        <FAQItem
          question="Is it Free?"
          answer="The majority of our challenges are free, yes. We do have some that are
          premium and require a Pro subscription to access. It will say on each
          challenge whether they are free or premium, so it's easy to tell the
          difference."
        />

        <FAQItem
          question=" Can I take the assignments as a beginner??"
          answer="For sure! Our challenges have five different 3 of difficulty. We'd
              recommend starting with the newbie ones. You might also want to
              start with the Easy Task. As you build up your skills and
              confidence, you can take on more complex assignments."
        />

        <FAQItem
          question="How do I start?"
          answer={`You can see all of our assignments here. To start a assignments,
              click the "Start assignments" button on the assignments page. This
              will take you to the Assignment Hub, where you can start.`}
        />

        <FAQItem
          question="How can I get help if I'm stuck on a Assignment?"
          answer={`The best (and quickest) way to get help on a challenge is in our
              Discord server. There are students of other st in there, so it's a
              great place to ask questions. We even have a dedicated "help"
              channel! If you haven't joined yet, you can get an invite to our
              Discord server here.`}
        />
      </div>
    </div>
  );
};

export default HomeFAQ;
