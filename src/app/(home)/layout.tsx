import Description from "@/components/home/Description/Description";
import Hero from "@/components/home/Hero/Hero";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
};

export default HomeLayout;
