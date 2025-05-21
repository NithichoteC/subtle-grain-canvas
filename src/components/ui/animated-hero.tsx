
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
              <span className="text-white">AI‑Powered Lead Gen That Fills Your Calendar—Not Just Your CRM.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-white/90 mt-4">
              Human‑guided AI captures, qualifies & books high‑intent roofing + solar appointments—while you stay in control.
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <Button size="lg" className="gap-4">
              Book My Free Strategy Call <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
