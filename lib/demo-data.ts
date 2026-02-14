export const suggestedPrompts = [
  "What is the design wind speed for Austin commercial buildings?",
  "Show me all projects by John Smith, PE 12345",
  "Timeline of Downtown Office Building project changes",
  "Find all hydraulic system diagrams with pressure ratings above 2000 PSI",
  "Compare the electrical schematics between Model A and Model B",
  "What safety protocols apply to the cooling system maintenance?",
];

export interface DemoPhase {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const demoPhases: DemoPhase[] = [
  {
    id: 1,
    title: "Understanding",
    description: "Parsing your engineering query and identifying key technical concepts...",
    icon: "Brain",
  },
  {
    id: 2,
    title: "Searching",
    description: "Scanning knowledge base: 2.4M diagrams, 890K specifications, 156K protocols...",
    icon: "Search",
  },
  {
    id: 3,
    title: "Reasoning",
    description: "Cross-referencing technical data, analyzing diagram relationships, synthesizing insights...",
    icon: "Cpu",
  },
  {
    id: 4,
    title: "Answer",
    description: "Compiling comprehensive response with sourced technical data...",
    icon: "Sparkles",
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "Scan",
    title: "Diagram Analysis",
    description: "Parse blueprints, schematics, and technical drawings with precision. Extract dimensions, components, and relationships automatically.",
  },
  {
    icon: "Camera",
    title: "Technical Photo Processing",
    description: "Analyze field photos, equipment images, and site documentation. Identify components, detect anomalies, and extract metadata.",
  },
  {
    icon: "Languages",
    title: "Multi-Language OCR",
    description: "Extract text from diagrams in 50+ languages. Handle technical notation, handwritten annotations, and multilingual specifications.",
  },
  {
    icon: "Brain",
    title: "Agentic Reasoning",
    description: "AI agents that think through complex engineering problems. Chain multiple analyses, verify conclusions, and explain reasoning.",
  },
  {
    icon: "Database",
    title: "Knowledge Base Integration",
    description: "Connect to your existing systems: PLM, CAD, document management. Unified search across all engineering knowledge.",
  },
  {
    icon: "Users",
    title: "Real-Time Collaboration",
    description: "Share analyses, annotate diagrams together, and build team knowledge. Role-based access and audit trails included.",
  },
];

export const useCases = [
  "Aerospace Engineering",
  "Automotive Design",
  "Civil Infrastructure",
  "Electrical Systems",
  "Manufacturing",
  "Oil & Gas",
  "Pharmaceutical",
  "Power Generation",
  "Semiconductor",
  "Telecommunications",
];

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "For small engineering teams getting started",
    features: [
      "5,000 diagram analyses/month",
      "Basic OCR support",
      "3 team members",
      "Email support",
      "API access",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$899",
    period: "/month",
    description: "For growing organizations with complex needs",
    features: [
      "50,000 diagram analyses/month",
      "Multi-language OCR",
      "15 team members",
      "Priority support",
      "Advanced API access",
      "Custom integrations",
      "Knowledge base sync",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale engineering operations",
    features: [
      "Unlimited analyses",
      "Dedicated infrastructure",
      "Unlimited team members",
      "24/7 dedicated support",
      "Custom model training",
      "On-premise deployment",
      "SLA guarantee",
      "Professional services",
    ],
    cta: "Contact Sales",
  },
];
