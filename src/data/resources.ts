export interface ResourceItem {
    title: string;
    type: string;
    size: string;
    iconName: string; // Used to dynamically load Lucide icons
    downloadUrl?: string; // Add links to your Google Drive or Github raw files here
}

export interface ResourceCategory {
    category: string;
    items: ResourceItem[];
}

// Add your downloadable resources down here and they will auto-populate!
export const resourcesConfig: ResourceCategory[] = [
  {
    category: "Estimation & Costing",
    items: [
      { title: "Standard BOQ Template for Hill Roads", type: "Excel", size: "450 KB", iconName: "Table" },
      { title: "Rate Analysis Format (DOR Standard)", type: "PDF", size: "1.2 MB", iconName: "FileText" },
      { title: "Quantity Takeoff Sheet - Culverts", type: "Excel", size: "280 KB", iconName: "Table" }
    ]
  },
  {
    category: "Surveying Resources",
    items: [
      { title: "Leveling Field Book Sheet (Printable)", type: "PDF", size: "150 KB", iconName: "FileText" },
      { title: "Total Station Data Extraction Scripts", type: "ZIP", size: "2.1 MB", iconName: "FileCode" },
      { title: "Survey Checklist for Reconnaissance", type: "PDF", size: "95 KB", iconName: "CheckCircle2" }
    ]
  },
  {
    category: "Exam & Study Notes",
    items: [
      { title: "NEC License Exam Mock Questions", type: "PDF", size: "8.4 MB", iconName: "FileText" },
      { title: "Hydraulics Summary for Loksewa", type: "PDF", size: "5.6 MB", iconName: "FileText" },
      { title: "Soil Mechanics Quick Formula Sheet", type: "PDF", size: "1.1 MB", iconName: "FileText" }
    ]
  }
];
