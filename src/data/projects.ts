export interface Project {
  id: string | number;
  title: string;
  location: string;
  date: string;
  desc: string;
  tags: string[];
  status: string;
  img: string;
}

// Add new projects to this array and they will auto-populate!
export const projects: Project[] = [
  {
    id: 1,
    title: "Detailed Survey of Rural Link Road",
    location: "Kavre district, Nepal",
    date: "Feb 2026",
    desc: "Conducted topographic survey for 5km rural road. Prepared L-section, X-sections, and mass haul diagram.",
    tags: ["Surveying", "Road Design", "AutoCAD"],
    status: "Design Stage",
    img: "https://picsum.photos/seed/kavre/800/600"
  },
  {
    id: 2,
    title: "Landslide Stability Study & Mitigation",
    location: "Sindhupalchok, Nepal",
    date: "Jan 2026",
    desc: "Field study on slope stabilization using bio-engineering and stone masonry retaining walls.",
    tags: ["Geotechnical", "Site Practice"],
    status: "Report Submitted",
    img: "https://picsum.photos/seed/landslide/800/600"
  },
  {
    id: 3,
    title: "Construction Supervision of RCC Bridge",
    location: "Lalitpur Bypass",
    date: "Nov 2025",
    desc: "Quality control of concrete works, reinforcement inspection, and foundation monitoring.",
    tags: ["Construction", "Quality Control"],
    status: "In Progress",
    img: "https://picsum.photos/seed/bridge_rcc/800/600"
  }
];
