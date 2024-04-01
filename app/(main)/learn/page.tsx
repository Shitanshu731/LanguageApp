import FeedWrapper from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import Header from "./header";
import { UserProgress } from "@/components/user-progress";

const page = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 ">
      <StickyWrapper>
        <UserProgress activeCourse={{title:"Spanish", imageSrc: "/es.svg"}}
        hearts={5}
        points={5}
        hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="spanish" />
      </FeedWrapper>
    </div>
  );
};

export default page;
