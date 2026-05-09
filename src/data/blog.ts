export interface BlogPost {
  id: string | number;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  img: string;
  content?: string; // For later when you want to add full markdown content
}

// You can easily add new blog posts here!
export const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Elegant Mathematics Behind Structural Stability",
    category: "Structural Math",
    date: "May 5, 2026",
    author: "Er. Tekraj Khadka",
    summary: "Decoding the calculus and linear algebra that keeps our skyscrapers standing tall and bridges spanning wide.",
    img: "https://picsum.photos/seed/math_engineering/800/600"
  },
  {
    id: 2,
    title: "Will AI Replace Structural Engineers?",
    category: "AI in Civil",
    date: "April 28, 2026",
    author: "Er. Tekraj Khadka",
    summary: "Exploring the integration of machine learning in design optimization, risk assessment, and structural analysis.",
    img: "https://picsum.photos/seed/ai_civil/800/600"
  },
  {
    id: 3,
    title: "Inspiring the Next Generation of Engineers",
    category: "Education",
    date: "April 15, 2026",
    author: "Er. Tekraj Khadka",
    summary: "Why evoking emotion and sparking curiosity inside the classroom is the ultimate prerequisite for deep learning.",
    img: "https://picsum.photos/seed/teaching/800/600"
  },
  {
    id: 4,
    title: "Latest Trends in Performance-Based Seismic Design",
    category: "Trends",
    date: "March 20, 2026",
    author: "Er. Tekraj Khadka",
    summary: "Shifting from traditional code-based design to understanding how structures actually behave during an earthquake.",
    img: "https://picsum.photos/seed/seismic/800/600"
  }
];

export const categories = ["All", "Structural Math", "AI in Civil", "Trends", "Education", "Structural"];
