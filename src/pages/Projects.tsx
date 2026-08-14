import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const GITHUB_URL = "https://github.com/Muhd-Mahmud";

// Canonical category order. A project may belong to several categories.
// Only categories that have at least one project are shown as filters,
// so new categories appear automatically as projects are added.
const CATEGORY_ORDER = [
  "Swarm Robotics",
  "Mobile Robotics",
  "Manipulation",
  "ROS 2",
  "RL in Robotics",
  "AI / ML",
  "Computer Vision",
  "Embedded Systems",
  "CAD",
  "Mechanics",
  "Physical Build",
] as const;

type Category = (typeof CATEGORY_ORDER)[number];

type Project = {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  href: string;
  categories: Category[];
  status?: "In progress" | "Planned";
};

const projects: Project[] = [
  {
    title: "AVCE UAV Swarm Simulation & 3D Mapping",
    desc: "PyBullet + ROS 2 multi-UAV sim using decentralized, bio-inspired swarm rules — 88.2% coverage in 64 steps. Phase 3 PPO training and distributed point-cloud aggregation into a unified 3D map.",
    gradientFrom: "#a855f7",
    gradientTo: "#22d3ee",
    href: GITHUB_URL,
    categories: ["Swarm Robotics", "ROS 2", "RL in Robotics", "Mobile Robotics", "AI / ML"],
    status: "In progress",
  },
  {
    title: "ROS 2 Heterogeneous Multi-Robot Autonomy",
    desc: "Modular ROS 2 architecture for heterogeneous multi-robot coordination and collaborative 3D mapping, with distributed perception pipelines and inter-robot data fusion.",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
    href: GITHUB_URL,
    categories: ["ROS 2", "Mobile Robotics", "Swarm Robotics", "AI / ML"],
  },
  {
    title: "4-DOF Belt-Drive Robotic Arm",
    desc: "First hardware manipulator (~1–2 kg payload): NEMA 23/17 steppers, GT2 belt reductions, ESP32-S3 + TMC2209 drivers, FDM-printed structure.",
    gradientFrom: "#10b981",
    gradientTo: "#38bdf8",
    href: GITHUB_URL,
    categories: ["Manipulation", "CAD", "Mechanics", "Embedded Systems", "Physical Build"],
    status: "In progress",
  },
  {
    title: "Micro-Drone Swarm Platform",
    desc: "Indoor swarm platform on ESP32-S3 with DRV8833 H-bridges, PMW3901 optical flow, and VL53L1X ToF sensors running ESP-Drone firmware; controlled via cflib/Python.",
    gradientFrom: "#6366f1",
    gradientTo: "#f43f5e",
    href: GITHUB_URL,
    categories: ["Swarm Robotics", "Mobile Robotics", "Embedded Systems", "Physical Build"],
  },
  {
    title: "Multi-Robot Path-Planning Benchmark",
    desc: "Benchmarking centralized vs decentralized planning in simulation — success rate, compute cost, and scalability across scenarios.",
    gradientFrom: "#ec4899",
    gradientTo: "#8b5cf6",
    href: GITHUB_URL,
    categories: ["Mobile Robotics", "ROS 2", "AI / ML"],
    status: "Planned",
  },
  {
    title: "Email Spam Classifier",
    desc: "Supervised ML pipeline for spam vs. non-spam — tokenization, feature extraction, and model evaluation (accuracy/precision/recall/F1).",
    gradientFrom: "#a78bfa",
    gradientTo: "#f472b6",
    href: GITHUB_URL,
    categories: ["AI / ML"],
  },
  {
    title: "Computer Vision Toolkit",
    desc: "Classical CV algorithms: filtering, edge detection, thresholding, morphology, and contour detection with OpenCV/NumPy.",
    gradientFrom: "#34d399",
    gradientTo: "#22c55e",
    href: GITHUB_URL,
    categories: ["Computer Vision", "AI / ML"],
  },
  {
    title: "Face Mask Detection",
    desc: "Real-time CNN-based face mask detection with preprocessing pipelines and live camera inference.",
    gradientFrom: "#f97316",
    gradientTo: "#facc15",
    href: GITHUB_URL,
    categories: ["Computer Vision", "AI / ML"],
  },
];

function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateWaveData = () => {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    };

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) *
            Math.cos(px * 2) *
            freq *
            0.1 *
            ((i + 1) / 8);
          const y = (py + 1) * canvas.height * 0.5;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 80;
        const g = 70 + intensity * 80;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.35)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.3)`;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    let raf = 0;
    const animate = () => {
      time += 0.02;
      updateWaveData();
      draw();
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 h-full w-full" />;
}

function SkewCard({
  project,
  activeCategory,
  onSelectCategory,
}: {
  project: Project;
  activeCategory: Category | "All";
  onSelectCategory: (c: Category) => void;
}) {
  const { title, desc, gradientFrom, gradientTo, href, categories, status } = project;
  return (
    <div className="group relative w-[320px] h-[500px] m-[40px_30px] transition-all duration-500">
      <span
        className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
        style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
      />
      <span
        className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
        style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
      />
      <span className="pointer-events-none absolute inset-0 z-10">
        <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.08)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
        <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.08)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
      </span>
      <div className="relative z-20 left-0 p-[24px_40px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[40px]">
        <div className="mb-4 h-24 w-full rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
          <div
            className="h-full w-full opacity-60"
            style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
          />
        </div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          {status ? (
            <span className="shrink-0 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] text-white/70">
              {status}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const on = c === activeCategory;
            return (
              <button
                key={c}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory(c);
                }}
                className={[
                  "rounded-full border px-2 py-0.5 text-[10px] transition",
                  on
                    ? "border-white/60 bg-white/90 text-black"
                    : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-bold text-black bg-white px-3 py-2 rounded hover:bg-white/90 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  // Only surface categories that have at least one project.
  const availableCategories = useMemo(() => {
    const present = new Set<Category>();
    projects.forEach((p) => p.categories.forEach((c) => present.add(c)));
    return CATEGORY_ORDER.filter((c) => present.has(c));
  }, []);

  const counts = useMemo(() => {
    const map = new Map<Category, number>();
    projects.forEach((p) => p.categories.forEach((c) => map.set(c, (map.get(c) ?? 0) + 1)));
    return map;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory],
  );

  const pillClass = (on: boolean) =>
    [
      "rounded-full border px-3 py-1.5 text-xs font-medium transition",
      on
        ? "border-white/60 bg-white text-black"
        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
    ].join(" ");

  return (
    <div className="min-h-screen bg-black text-white relative">
      <WaveBackground />
      <div className="relative z-10 pt-28 px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <Card className="w-full bg-black/[0.96] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-10">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Projects
                </h1>
                <p className="mt-3 text-neutral-300 max-w-2xl">
                  Robotics, autonomy, and applied ML work. Filter by category — a project can
                  fall under several.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={pillClass(activeCategory === "All")}
                >
                  All
                  <span className="ml-1.5 text-white/50">{projects.length}</span>
                </button>
                {availableCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={pillClass(activeCategory === c)}
                  >
                    {c}
                    <span className="ml-1.5 text-white/50">{counts.get(c)}</span>
                  </button>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap justify-center items-start">
                {filtered.map((project) => (
                  <SkewCard
                    key={project.title}
                    project={project}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                  />
                ))}
              </div>

              {filtered.length === 0 ? (
                <p className="py-10 text-center text-white/60">
                  No projects in this category yet.
                </p>
              ) : null}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
