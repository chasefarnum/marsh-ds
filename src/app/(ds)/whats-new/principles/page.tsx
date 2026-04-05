import { PageHeader } from "@/components/ds/page-header";
import { BiCheck, BiX } from "react-icons/bi";

const principles = [
  {
    title: "Intention Over Decoration",
    body: "Every decision — spacing, type, color, motion — needs a reason. If you can't articulate the why, the decision isn't finished.",
    is: ["Purposeful", "Considered", "Earned"],
    isNot: ["Arbitrary", "Decorative", "Default"],
  },
  {
    title: "Consistency Builds Trust",
    body: "Foundations, tokens, and components exist so teams can build with confidence. Use them consistently; extend them deliberately.",
    is: ["Structured", "Predictable", "Enabling"],
    isNot: ["Rigid", "Over-prescribed", "One-size-fits-all"],
  },
  {
    title: "Content First",
    body: "Design is the vessel for content, not the other way around. Every layout decision should amplify what's being communicated, not compete with it.",
    is: ["Editorial", "Generous to content", "Restrained"],
    isNot: ["Ego-driven", "Cluttered", "Performative"],
  },
  {
    title: "Solve the Problem Completely",
    body: "Address the obvious need, then ask what else this surface can hold. Functionality earns the entry; craft earns the experience.",
    is: ["Thorough", "Ambitious", "Considered"],
    isNot: ["Overbuilt", "Scope-creeping", "Half-finished"],
  },
  {
    title: "Accessibility Is Not Optional",
    body: "Build for everyone from the start. Color contrast, keyboard navigation, and screen reader support are requirements, not enhancements.",
    is: ["Inclusive", "Compliant", "Tested"],
    isNot: ["Retrofitted", "Assumed", "Edge-cased"],
  },
  {
    title: "The System Grows Through Generosity",
    body: "Document what you know. Share what you build. A design system is only as strong as the collective contribution behind it.",
    is: ["Open", "Collaborative", "Enabling"],
    isNot: ["Gatekept", "Siloed", "Assumed knowledge"],
  },
];

export default function PrinciplesPage() {
  return (
    <>
      <PageHeader
        title="Principles"
        description={[
          "The standards we design by.",
          "These aren't aspirational abstractions. They're the rules you reach for when a decision gets hard — whether you're setting type, choosing a component, or interpreting the brand for the first time.",
        ]}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
        {principles.map((p) => (
          <div key={p.title} className="flex flex-col rounded-lg border border-border/40 p-6">
            <h2 className="font-sans text-2xl font-medium text-foreground mb-4">{p.title}</h2>
            <p className="font-sans text-base leading-relaxed text-foreground/80 flex-1">
              {p.body}
            </p>
            <div className="mt-6 rounded-lg bg-muted p-4 grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">Is</span>
                <ul className="mt-2 space-y-1">
                  {p.is.map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-sm text-foreground">
                      <BiCheck className="size-4 shrink-0 text-success" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">Is Not</span>
                <ul className="mt-2 space-y-1">
                  {p.isNot.map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-sm text-foreground/60">
                      <BiX className="size-4 shrink-0 text-destructive" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
