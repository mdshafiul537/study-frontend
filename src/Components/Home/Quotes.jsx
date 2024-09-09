import React from "react";
import QuoteItem from "./QuoteItem";

const Quotes = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-7">
        <QuoteItem
          title="Study Together is great"
          quote="Study Together is perfect no flaws no nothing. It gives me a purpose
          and before this I did not study a lot now I do. Thanks Study Together."
        />

        <QuoteItem
          title="Thank you"
          quote={`Yesterday I completed my one year in this community. I feel so amazed that I have so many study hours without even noticing them, just cuz I was so focused with my study pals to achieve what I wanted to!!`}
        />

        <QuoteItem
          title="The level system is pog "
          quote={`The VC level system keeps me motivated — the more time spent studying, the more levels you gain and the fancier your role becomes. There’s even silent study calls with lofi music, silence, nature sounds and other types of ambience. 10/10 would recommend it to a friend.`}
        />

        <QuoteItem
          title="Awesome Community"
          quote={`As a chronic procrastinator, this community really helps me motivate myself to get my homework done. Has cool leaderboards, timers, and study tips. It’s a really large community so it’s pretty easy to meet people, too.`}
        />

        <QuoteItem
          title="Productivity Booster "
          quote={`I have never been so focused and productive when studying by myself before. I can study with someone basically 24/7 if I really wanted too. It has been an amazing help! 💜 Thanks Study Together!`}
        />

        <QuoteItem
          title="Goals"
          quote={`I’ve been a part of it for probably a little over a month and I’ve noticed how it’s improved my ability to stay focused. Since everyone is also studying in the call and working hard, I feel obliged to stay on task as well.`}
        />
      </div>
    </div>
  );
};

export default Quotes;
