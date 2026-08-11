import GlassCard from "@/components/ui/glass-card";
import { BookOpen, FileText, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";

export function PublicationsPage() {
  const papers = [
    {
      title: "M3PO: Massively Multi-Task Model-Based Policy Optimization",
      authors: "Aditya Narendra, Dmitry Makarov, Aleksandr Panov",
      conference:
        "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS'25)",
      publicationDate: "2025",
      abstract:
        "We introduce Massively Multi-Task Model-Based Policy Optimization (M3PO), a scalable model-based reinforcement learning (MBRL) framework designed to address sample inefficiency in single-task settings and poor generalization in multi-task domains. Existing model-based approaches like DreamerV3 rely on pixel-level generative models that neglect control-centric representations, while model-free methods such as PPO suffer from high sample complexity and weak exploration. M3PO integrates an implicit world model, trained to predict task outcomes without observation reconstruction, with a hybrid exploration strategy that combines model-based planning and model-free uncertainty-driven bonuses. This eliminates the bias-variance trade-off in prior methods by using discrepancies between model-based and model-free value estimates to guide exploration, while maintaining stable policy updates through a trust-region optimizer. M3PO provides an efficient and robust alternative to existing model-based policy optimization approaches and achieves state-of-the-art performance across multiple benchmarks.",
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/scholar?q=M3PO+Massively+Multi-Task+Model-Based+Policy+Optimization",
          icon: BookOpen,
          delay: "400ms",
        },
        {
          label: "PDF",
          href: "https://arxiv.org/pdf/2506.21782.pdf",
          icon: FileText,
          delay: "600ms",
        },
        {
          label: "Code",
          href: "https://github.com/Ozzey/M3PO",
          icon: Code2,
          delay: "800ms",
        },
      ],
      accentFrom: "#60a5fa",
      accentTo: "#a855f7",
    },
    {
      title: "Leveraging Single and Multi-task Reinforcement Learning Algorithms",
      authors: "A Narendra, D Makarov, AI Panov",
      conference:
        "International Scientific Conference (IITI'24)",
      publicationDate: "2024",
      abstract: "Abstract coming soon.",
      links: [
        { label: "Scholar", href: "#", icon: BookOpen, delay: "400ms" },
        { label: "PDF", href: "#", icon: FileText, delay: "600ms" },
        { label: "Code", href: "#", icon: Code2, delay: "800ms" },
      ],
      accentFrom: "#f97316",
      accentTo: "#facc15",
    },
    {
      title:
        "Knowledge-Guided Manipulation Using Multi-Task Reinforcement Learning",
      authors: "A Narendra, D Makarov, AI Panov",
      conference:
        "IEEE International Conference on Robotics & Automation (ICRA’26)",
      publicationDate: "2026",
      abstract: "Abstract coming soon.",
      links: [
        { label: "Scholar", href: "#", icon: BookOpen, delay: "400ms" },
        { label: "PDF", href: "#", icon: FileText, delay: "600ms" },
        { label: "Code", href: "#", icon: Code2, delay: "800ms" },
      ],
      accentFrom: "#22d3ee",
      accentTo: "#38bdf8",
    },
    {
      title:
        "CSymPlan: Certified Symbolic Planning & Control for High-DOF Manipulators",
      authors:
        "Aditya Narendra, Ashok Kumar, Mahathi Anand, Fares Abu-Dakka, Abdalla Swikir",
      conference: "Robotics: Science and Systems (RSS'26)",
      publicationDate: "2026",
      abstract: "Abstract coming soon.",
      links: [
        { label: "Scholar", href: "#", icon: BookOpen, delay: "400ms" },
        { label: "PDF", href: "#", icon: FileText, delay: "600ms" },
        { label: "Code", href: "#", icon: Code2, delay: "800ms" },
      ],
      accentFrom: "#a78bfa",
      accentTo: "#f472b6",
    },
    {
      title:
        "Mind and motion aligned: a joint evaluation isaacsim benchmark for task planning and low-level policies in mobile manipulation",
      authors:
        "N Kachaev, A Spiridonov, A Gorodetsky, K Muravyev, N Oskolkov, ...",
      conference: "Artificial Intelligence Journey (AIJ'25)",
      publicationDate: "2025",
      abstract: "Abstract coming soon.",
      links: [
        { label: "Scholar", href: "#", icon: BookOpen, delay: "400ms" },
        { label: "PDF", href: "#", icon: FileText, delay: "600ms" },
        { label: "Code", href: "#", icon: Code2, delay: "800ms" },
      ],
      accentFrom: "#34d399",
      accentTo: "#22c55e",
    },
    {
      title:
        "Dynamic Neural Potential Field: Online Trajectory Optimization in Presence of Moving Obstacles",
      authors: "A Staroverov, M Alhaddad, A Narendra, K Mironov, A Panov",
      conference: "IEEE International Conference on Robotics & Automation (ICRA'26)",
      publicationDate: "2026",
      abstract: "Abstract coming soon.",
      links: [
        { label: "Scholar", href: "#", icon: BookOpen, delay: "400ms" },
        { label: "PDF", href: "#", icon: FileText, delay: "600ms" },
        { label: "Code", href: "#", icon: Code2, delay: "800ms" },
      ],
    },
  ];

  const getBadgeText = (conference: string) => {
    const upper = conference.toUpperCase();
    if (upper.includes("IROS")) return "A";
    if (upper.includes("ICRA")) return "A*";
    if (upper.includes("RSS")) return "A*";
    if (upper.includes("AIJ")) return "Q2";
    if (upper.includes("INTELLIGENT")) return "Q4";
    if (upper.includes("ARXIV")) return "PRE";
    return "N/A";
  };

  const sortedPapers = [...papers].sort((a, b) => {
    const aNum = Number.parseInt(a.publicationDate, 10);
    const bNum = Number.parseInt(b.publicationDate, 10);
    return bNum - aNum;
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <WavyBackground className="w-full">
        <div className="pt-28 px-6">
          <div className="mx-auto max-w-6xl">
            <Card className="w-full bg-black/[0.96] relative overflow-hidden p-10">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className="flex flex-wrap justify-center gap-10">
                {sortedPapers.map((paper, index) => {
                  const titleLength = paper.title.length;
                  const collapsedHeight =
                    titleLength > 90 ? "h-[430px]" : titleLength > 70 ? "h-[400px]" : "h-[360px]";
                  const expandedHeight =
                    titleLength > 90 ? "h-[630px]" : titleLength > 70 ? "h-[600px]" : "h-[560px]";
                  const offsetClass =
                    index % 2 === 0 ? "md:-translate-y-6" : "md:translate-y-4";
                  return (
                    <div key={paper.title} className={`transition-transform ${offsetClass}`}>
                      <GlassCard
                        {...paper}
                        badgeText={getBadgeText(paper.conference)}
                        collapsedHeight={collapsedHeight}
                        expandedHeight={expandedHeight}
                      />
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
