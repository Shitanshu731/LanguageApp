import FeedWrapper from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import Header from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/query";
import { redirect } from "next/navigation";

const page = async () => {
  const userProgress = await getUserProgress();
  const units = await getUnits();
  if(!userProgress || !userProgress.activeCourseId) {
    redirect("/courses")
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 ">
      <StickyWrapper>
        <UserProgress 
        activeCourse={userProgress.activeCourse}
        hearts={userProgress.hearts}
        points={userProgress.points}
        hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse!.title} />
        {units.map((unit) => (
          <div key={unit.id}>
            {JSON.stringify(unit)}
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default page;
