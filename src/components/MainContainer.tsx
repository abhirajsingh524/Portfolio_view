import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Education from "./Education";
import Research from "./Research";
import TechStack from "./TechStack";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import { HeadingProvider } from "./common/SectionHeading";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <HeadingProvider>
      <div className="container-main">
        <Navbar />
        <SocialIcons />
        {isDesktopView && children}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="container-main">
              {/* 1. Hero / Landing */}
              <Landing>{!isDesktopView && children}</Landing>

              {/* 2. About Me */}
              <About />

              {/* 3. Technical Skills & Algorithm Visualizer (5s loop: Bubble, Heap, Insertion, Quick, Merge, Binary Search) */}
              <TechStack />

              {/* 4. AI/ML Specialized Disciplines (ML, GenAI, NLP, Computer Vision, Data Science) */}
              <WhatIDo />

              {/* 5. Projects Showcase: Featured AI Projects + Explore All Projects (with 8 Domain Filters & Details Modal) */}
              <Work />

              {/* 6. Education & Academic Milestones */}
              <Education />

              {/* 7. Experience & Internships */}
              <Career />

              {/* 8. Academic Research */}
              <Research />

              {/* 9. Achievements & Honors */}
              <Achievements />

              {/* 10. Certifications & Credentials */}
              <Certifications />

              {/* 11. Contact */}
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </HeadingProvider>
  );
};

export default MainContainer;
