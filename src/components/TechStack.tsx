import React, { useState, useEffect, useMemo, useRef } from "react";
import { portfolioData, TechSkill } from "../data/portfolioData";
import SectionHeading from "./common/SectionHeading";
import {
  FiPlay,
  FiPause,
  FiChevronRight,
  FiChevronLeft,
  FiSearch,
  FiCpu,
  FiCheckCircle,
  FiX,
  FiTerminal,
  FiBarChart2,
} from "react-icons/fi";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiReact,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiC,
  SiOpenjdk,
  SiJavascript,
} from "react-icons/si";
import "./styles/TechStack.css";

// 18 Core Skills for the Algorithmic Visualization
const ALGO_SKILLS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "NLP",
  "LLMs",
  "FastAPI",
  "React",
  "MongoDB",
  "Redis",
  "Git",
  "GitHub",
  "SQL",
  "C++",
  "Java",
  "JavaScript",
];

type AlgorithmMode =
  | "Bubble Sort"
  | "Heap Sort"
  | "Insertion Sort"
  | "Quick Sort"
  | "Merge Sort"
  | "Binary Search";

const ALGORITHM_SEQUENCE: AlgorithmMode[] = [
  "Bubble Sort",
  "Heap Sort",
  "Insertion Sort",
  "Quick Sort",
  "Merge Sort",
  "Binary Search",
];

// Helper to get skill icon
const getSkillIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("python")) return <SiPython className="skill-svg-icon" />;
  if (lower.includes("pytorch")) return <SiPytorch className="skill-svg-icon" />;
  if (lower.includes("tensorflow")) return <SiTensorflow className="skill-svg-icon" />;
  if (lower.includes("scikit")) return <SiScikitlearn className="skill-svg-icon" />;
  if (lower.includes("pandas")) return <SiPandas className="skill-svg-icon" />;
  if (lower.includes("numpy")) return <SiNumpy className="skill-svg-icon" />;
  if (lower.includes("fastapi")) return <SiFastapi className="skill-svg-icon" />;
  if (lower.includes("react")) return <SiReact className="skill-svg-icon" />;
  if (lower.includes("mongo")) return <SiMongodb className="skill-svg-icon" />;
  if (lower.includes("redis")) return <SiRedis className="skill-svg-icon" />;
  if (lower.includes("git") && !lower.includes("hub")) return <SiGit className="skill-svg-icon" />;
  if (lower.includes("github")) return <SiGithub className="skill-svg-icon" />;
  if (lower === "c++") return <SiCplusplus className="skill-svg-icon" />;
  if (lower === "c") return <SiC className="skill-svg-icon" />;
  if (lower.includes("java") && !lower.includes("script")) return <SiOpenjdk className="skill-svg-icon" />;
  if (lower.includes("javascript")) return <SiJavascript className="skill-svg-icon" />;
  if (lower.includes("tableau") || lower.includes("power bi")) return <FiBarChart2 className="skill-svg-icon" />;
  if (lower.includes("llm") || lower.includes("generative")) return <SiOpenai className="skill-svg-icon" />;
  return <FiCpu className="skill-svg-icon" />;
};

const CATEGORY_TABS = [
  "ALL",
  "PROGRAMMING",
  "AI / MACHINE LEARNING",
  "DEEP LEARNING",
  "NLP / GENERATIVE AI",
  "DATA SCIENCE",
  "DATABASES",
  "WEB / BACKEND",
  "TOOLS / DEVOPS",
] as const;

type CategoryTab = (typeof CATEGORY_TABS)[number];

const TechStack: React.FC = () => {
  const { technicalSkills } = portfolioData;

  const [activeAlgoIndex, setActiveAlgoIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [activeCategoryTab, setActiveCategoryTab] = useState<CategoryTab>("ALL");
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  const currentAlgo = ALGORITHM_SEQUENCE[activeAlgoIndex];

  // Pause animation if section is off-screen or prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 5-second interval timer with progress tracking
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // Update progress every 50ms
    const totalDuration = 5000; // 5 seconds per algorithm state

    const timer = setInterval(() => {
      if (!isVisibleRef.current) return;

      setProgress((prev) => {
        if (prev >= 100) {
          setActiveAlgoIndex((idx) => (idx + 1) % ALGORITHM_SEQUENCE.length);
          return 0;
        }
        return prev + (intervalTime / totalDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, activeAlgoIndex]);

  const handleSelectAlgo = (mode: AlgorithmMode) => {
    const idx = ALGORITHM_SEQUENCE.indexOf(mode);
    if (idx !== -1) {
      setActiveAlgoIndex(idx);
      setProgress(0);
    }
  };

  const handlePrevAlgo = () => {
    setActiveAlgoIndex(
      (idx) => (idx - 1 + ALGORITHM_SEQUENCE.length) % ALGORITHM_SEQUENCE.length
    );
    setProgress(0);
  };

  const handleNextAlgo = () => {
    setActiveAlgoIndex((idx) => (idx + 1) % ALGORITHM_SEQUENCE.length);
    setProgress(0);
  };

  // Compute skill states and order per algorithm mode
  const visualizerData = useMemo(() => {
    const skills = [...ALGO_SKILLS];

    switch (currentAlgo) {
      case "Bubble Sort": {
        // Alphabetical sort in progress, with adjacent comparison highlighted
        const sorted = [...skills].sort((a, b) => a.localeCompare(b));
        // Swap mid pair to simulate in-flight bubbling
        const displayList = [...sorted];
        const temp = displayList[4];
        displayList[4] = displayList[5];
        displayList[5] = temp;

        return {
          type: "SORTING MODE",
          title: "Bubble Sort",
          complexity: "O(n²)",
          description:
            "Compares adjacent skill badges and steps them toward alphabetical ascending order.",
          statusNote:
            "Active Pass: Comparing adjacent pair [Pandas ↔ NumPy] • Elements after index 12 confirmed in sorted partition.",
          items: displayList.map((skill, index) => {
            const isComparing = index === 4 || index === 5;
            const isSortedSuffix = index >= 12;
            return {
              name: skill,
              status: isComparing
                ? "comparing"
                : isSortedSuffix
                ? "sorted"
                : "default",
              pointer: isComparing ? (index === 4 ? "A" : "B") : undefined,
            };
          }),
        };
      }

      case "Heap Sort": {
        // Arranged in binary max-heap tree order
        const heapList = [
          "TensorFlow",
          "PyTorch",
          "Python",
          "Scikit-learn",
          "React",
          "Pandas",
          "NumPy",
          "NLP",
          "MongoDB",
          "LLMs",
          "JavaScript",
          "Java",
          "Git",
          "GitHub",
          "FastAPI",
          "C++",
          "C",
          "SQL",
        ];

        return {
          type: "SORTING MODE",
          title: "Heap Sort",
          complexity: "O(n log n)",
          description:
            "Organizes skills into a heap tree structure, repeatedly extracting root element to build sorted array.",
          statusNote:
            "Max-Heap Structure: Root node [TensorFlow] compared against child branches [PyTorch, Python] before extraction.",
          items: heapList.map((skill, index) => {
            const isRoot = index === 0;
            const isChild = index === 1 || index === 2;
            return {
              name: skill,
              status: isRoot ? "pivot" : isChild ? "branch" : "default",
              pointer: isRoot ? "Root" : isChild ? `C${index}` : undefined,
            };
          }),
        };
      }

      case "Insertion Sort": {
        // Sorted left slice, active key being inserted, unsorted right slice
        const sortedPart = [
          "C",
          "C++",
          "FastAPI",
          "Git",
          "GitHub",
          "Java",
          "JavaScript",
          "LLMs",
        ];
        const keyItem = "Python";
        const unsortedPart = [
          "MongoDB",
          "NLP",
          "NumPy",
          "Pandas",
          "PyTorch",
          "React",
          "Redis",
          "SQL",
          "TensorFlow",
        ];
        const displayList = [...sortedPart, keyItem, ...unsortedPart];

        return {
          type: "SORTING MODE",
          title: "Insertion Sort",
          complexity: "O(n²)",
          description:
            "Sequentially takes an unsorted skill and inserts it into its exact relative position within the sorted subarray.",
          statusNote:
            "Active Key: [Python] evaluated against sorted left slice • Searching insertion slot between LLMs and MongoDB.",
          items: displayList.map((skill, index) => {
            const isKey = skill === keyItem;
            const isSortedSlice = index < 8;
            return {
              name: skill,
              status: isKey ? "pivot" : isSortedSlice ? "sorted" : "default",
              pointer: isKey ? "Key" : isSortedSlice ? "Sorted" : undefined,
            };
          }),
        };
      }

      case "Quick Sort": {
        // Divide around a pivot element (e.g. PyTorch)
        const pivot = "PyTorch";
        const sorted = [...skills].sort((a, b) => a.localeCompare(b));
        const leftPartition = sorted.filter(
          (s) => s.localeCompare(pivot) < 0 && s !== pivot
        );
        const rightPartition = sorted.filter(
          (s) => s.localeCompare(pivot) > 0 && s !== pivot
        );
        const displayList = [...leftPartition, pivot, ...rightPartition];

        return {
          type: "SORTING MODE",
          title: "Quick Sort",
          complexity: "O(n log n)",
          description:
            "Selects a pivot skill and partitions remaining technologies into lower and higher alphanumeric subsets.",
          statusNote:
            "Partitioning around Pivot [PyTorch]: Left subset (< PyTorch) in Cyan • Right subset (> PyTorch) in Indigo.",
          items: displayList.map((skill) => {
            const isPivot = skill === pivot;
            const isLeft = skill.localeCompare(pivot) < 0;
            return {
              name: skill,
              status: isPivot ? "pivot" : isLeft ? "left-partition" : "right-partition",
              pointer: isPivot ? "Pivot" : isLeft ? "< P" : "> P",
            };
          }),
        };
      }

      case "Merge Sort": {
        // Two distinct sub-blocks merging
        const sorted = [...skills].sort((a, b) => a.localeCompare(b));
        const mid = Math.floor(sorted.length / 2);
        const groupA = sorted.slice(0, mid);
        const groupB = sorted.slice(mid);
        const displayList = [...groupA, ...groupB];

        return {
          type: "SORTING MODE",
          title: "Merge Sort",
          complexity: "O(n log n)",
          description:
            "Divides skill set into recursive halves, sorting and merging subgroups systematically into unified order.",
          statusNote:
            "Merging two sorted subsets: Subgroup 1 [A..M] in Teal and Subgroup 2 [N..Z] in Purple being combined.",
          items: displayList.map((skill, index) => {
            const isGroupA = index < mid;
            return {
              name: skill,
              status: isGroupA ? "group-a" : "group-b",
              pointer: isGroupA ? "Sub 1" : "Sub 2",
            };
          }),
        };
      }

      case "Binary Search": {
        // CRITICAL: Explicit SEARCH MODE (NOT a sort)
        // Array is strictly sorted alphabetically, Binary Search searches for target 'PyTorch'
        const sorted = [...skills].sort((a, b) => a.localeCompare(b));
        const target = "PyTorch";
        const targetIndex = sorted.indexOf(target);
        const lowIndex = 0;
        const highIndex = sorted.length - 1;
        const midIndex = targetIndex; // Exact match on this step

        return {
          type: "SEARCH MODE (NOT A SORT)",
          title: "Binary Search",
          complexity: "O(log n)",
          description:
            "Searches for a targeted technology ('PyTorch') in a sorted array by evaluating Mid pointer against Low and High boundaries.",
          statusNote:
            "Target Found! Low: index [0] (C) • High: index [17] (TensorFlow) • Mid: index [" +
            midIndex +
            "] (PyTorch) matches target!",
          items: sorted.map((skill, index) => {
            const isTarget = skill === target;
            const isLow = index === lowIndex;
            const isHigh = index === highIndex;
            return {
              name: skill,
              status: isTarget
                ? "spotlight-target"
                : isLow || isHigh
                ? "pointer-boundary"
                : "default",
              pointer: isTarget
                ? "MID (MATCH)"
                : isLow
                ? "LOW"
                : isHigh
                ? "HIGH"
                : undefined,
            };
          }),
        };
      }
    }
  }, [currentAlgo]);

  // Filter skills for the categorized grid below
  const filteredSkills = useMemo(() => {
    if (activeCategoryTab === "ALL") return technicalSkills;
    return technicalSkills.filter((s) => s.category === activeCategoryTab);
  }, [technicalSkills, activeCategoryTab]);

  const handleSkillClick = (skillName: string) => {
    const found = technicalSkills.find(
      (s) => s.name.toLowerCase() === skillName.toLowerCase()
    );
    if (found) {
      setSelectedSkill(found);
    } else {
      // Fallback object
      setSelectedSkill({
        name: skillName,
        category: "AI / MACHINE LEARNING",
        description: `Core technical capability utilized in practical AI/ML model training and deployment workflows.`,
        projectsUsing: ["AEGIS", "Trackilo", "DocMind AI"],
      });
    }
  };

  return (
    <section className="techstack-section section-container" id="skills" ref={sectionRef}>
      <div className="techstack-container">
        {/* Section Heading with 2-Point Developer Note */}
        <SectionHeading
          headingKey="TECH STACK"
          titleText={
            <>
              Technical <span>Stack &amp; Algorithms</span>
            </>
          }
          subtitle="Systematic Toolchain"
        />

        {/* ==================================================
            5-SECOND ALGORITHM ANIMATION VISUALIZER
            ================================================== */}
        <div className="algo-visualizer-box">
          <div className="algo-header-bar">
            <div className="algo-title-group">
              <span className={`algo-mode-badge ${currentAlgo === "Binary Search" ? "search-mode" : "sort-mode"}`}>
                {visualizerData.type}
              </span>
              <h3 className="algo-current-name">
                {visualizerData.title}
              </h3>
              <span className="algo-complexity-tag">
                Time: {visualizerData.complexity}
              </span>
            </div>

            {/* Play/Pause & Nav Controls */}
            <div className="algo-controls-group">
              <button
                type="button"
                className="algo-ctrl-btn"
                onClick={handlePrevAlgo}
                title="Previous Algorithm"
                aria-label="Previous algorithm"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                className={`algo-ctrl-btn play-btn ${isPlaying ? "playing" : "paused"}`}
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause 5-second cycle" : "Resume 5-second cycle"}
                aria-label={isPlaying ? "Pause animation" : "Resume animation"}
              >
                {isPlaying ? <FiPause /> : <FiPlay />}
                <span>{isPlaying ? "5s Loop" : "Paused"}</span>
              </button>

              <button
                type="button"
                className="algo-ctrl-btn"
                onClick={handleNextAlgo}
                title="Next Algorithm"
                aria-label="Next algorithm"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* 5-Second Interval Progress Bar */}
          <div className="algo-timer-track">
            <div
              className="algo-timer-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Algorithm Mode Tabs */}
          <div className="algo-mode-tabs-row" role="tablist">
            {ALGORITHM_SEQUENCE.map((mode) => {
              const isActive = mode === currentAlgo;
              const isSearch = mode === "Binary Search";
              return (
                <button
                  key={mode}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`algo-tab-pill ${isActive ? "active" : ""} ${isSearch ? "search-tab" : ""}`}
                  onClick={() => handleSelectAlgo(mode)}
                >
                  {isSearch && <FiSearch className="tab-search-icon" />}
                  <span>{mode}</span>
                </button>
              );
            })}
          </div>

          {/* Status Note Banner */}
          <div className="algo-status-banner">
            <FiTerminal className="status-terminal-icon" />
            <p className="status-note-text">{visualizerData.statusNote}</p>
          </div>

          {/* Animated Skills Grid Strip */}
          <div className="algo-skills-strip">
            {visualizerData.items.map((item, idx) => {
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className={`algo-skill-card status-${item.status}`}
                  onClick={() => handleSkillClick(item.name)}
                  title={`Click to view details for ${item.name}`}
                  role="button"
                  tabIndex={0}
                >
                  {item.pointer && (
                    <span className="algo-pointer-badge">{item.pointer}</span>
                  )}
                  <div className="algo-card-icon-wrap">
                    {getSkillIcon(item.name)}
                  </div>
                  <span className="algo-skill-name">{item.name}</span>
                </div>
              );
            })}
          </div>

          <div className="algo-visualizer-hint">
            <span>💡 Tip: Click any technology badge above or below to inspect full portfolio details and projects.</span>
          </div>
        </div>

        {/* ==================================================
            STRUCTURED CATEGORIZED TECH STACK GRID (8 DISCIPLINES)
            ================================================== */}
        <div className="categorized-stack-block">
          <div className="stack-header-row">
            <div className="stack-heading-group">
              <span className="stack-pre">Structured Discipline View</span>
              <h3 className="stack-title">
                Categorized <span>Competencies</span>
              </h3>
            </div>

            {/* Category Tabs */}
            <div className="category-tabs-scroll" role="tablist">
              {CATEGORY_TABS.map((tab) => {
                const isSelected = activeCategoryTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`cat-tab-btn ${isSelected ? "active" : ""}`}
                    onClick={() => setActiveCategoryTab(tab)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categorized Skills Grid */}
          <div className="categorized-skills-grid">
            {filteredSkills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="categorized-skill-card"
                  onClick={() => setSelectedSkill(skill)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="cat-card-top">
                    <div className="cat-card-icon-box">
                      {getSkillIcon(skill.name)}
                    </div>
                    <div className="cat-card-labels">
                      <span className="cat-domain-badge">{skill.category}</span>
                      <h4 className="cat-skill-name">{skill.name}</h4>
                    </div>
                    {skill.level && (
                      <span className="skill-level-badge">{skill.level}</span>
                    )}
                  </div>

                  <p className="cat-skill-desc">{skill.description}</p>

                  <div className="cat-card-footer">
                    <span className="projects-using-label">
                      Projects Using This:
                    </span>
                    <div className="projects-tag-row">
                      {skill.projectsUsing.slice(0, 3).map((proj, pIdx) => (
                        <span key={pIdx} className="project-ref-pill">
                          {proj}
                        </span>
                      ))}
                      {skill.projectsUsing.length > 3 && (
                        <span className="project-ref-pill more">
                          +{skill.projectsUsing.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================
          COMPACT SKILL INFORMATION POPUP / CARD
          ================================================== */}
      {selectedSkill && (
        <div
          className="skill-modal-backdrop"
          onClick={() => setSelectedSkill(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="skill-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="skill-modal-header">
              <div className="skill-modal-title-row">
                <div className="skill-modal-icon">
                  {getSkillIcon(selectedSkill.name)}
                </div>
                <div>
                  <span className="skill-modal-category">
                    {selectedSkill.category}
                  </span>
                  <h3 className="skill-modal-name">{selectedSkill.name}</h3>
                </div>
              </div>
              <button
                type="button"
                className="skill-modal-close"
                onClick={() => setSelectedSkill(null)}
                aria-label="Close skill details"
              >
                <FiX />
              </button>
            </div>

            <div className="skill-modal-body">
              <div className="skill-explanation-box">
                <span className="box-label">Technical Role in Portfolio:</span>
                <p className="skill-desc-text">{selectedSkill.description}</p>
              </div>

              <div className="skill-projects-box">
                <span className="box-label">Projects Using This Technology:</span>
                <div className="skill-projects-list">
                  {selectedSkill.projectsUsing.map((proj, idx) => (
                    <div key={idx} className="skill-project-item">
                      <FiCheckCircle className="check-icon" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="skill-modal-footer">
              <span className="skill-note">
                Integrated across portfolio AI pipelines &amp; architecture.
              </span>
              <button
                type="button"
                className="skill-dismiss-btn"
                onClick={() => setSelectedSkill(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;
