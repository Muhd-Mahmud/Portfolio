import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BookOpen } from "lucide-react";

export function PublicationsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <WavyBackground className="w-full">
        <div className="pt-28 px-6">
          <div className="mx-auto max-w-6xl">
            <Card className="w-full bg-black/[0.96] relative overflow-hidden p-10">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <BookOpen className="h-7 w-7 text-white/80" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Publications
                </h1>
                <p className="mt-4 max-w-2xl text-neutral-300">
                  Currently conducting structured literature reviews in swarm robotics, SLAM,
                  and UAV autonomy, and preparing review-style and simulation-based research
                  papers. Peer-reviewed publications coming soon.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
                  Coming soon
                </div>
              </div>
            </Card>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
