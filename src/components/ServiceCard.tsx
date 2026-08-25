import {
  Compass,
  Star,
  Heart,
  Briefcase,
  HelpCircle,
  BarChart3,
  ShieldCheck,
  Layers,
  Hash,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  star: Star,
  heart: Heart,
  briefcase: Briefcase,
  "help-circle": HelpCircle,
  chart: BarChart3,
  shield: ShieldCheck,
  layers: Layers,
  hash: Hash,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Star;

  return (
    <div className="group rounded-sm border border-ink-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-ink-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-ink-900">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-display text-xl text-ink-900">{service.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
        {service.description}
      </p>
    </div>
  );
}
