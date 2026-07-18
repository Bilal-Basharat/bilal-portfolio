/**
 * Single source of truth for project case studies.
 * Imported by the Projects section (grid) and /projects/[id] (detail pages).
 *
 * To add a project: append an object here — both the grid and its
 * detail route are generated from this array automatically.
 */

export const PROJECTS = [
  {
    id: "devoe-partners",
    title: "Devoe Partners — Real Estate Desktop Application",
    context: "University team project (3 members) · UET Lahore · 2022", 
    category: "Desktop App",
    stack: ["Python", "PyQt", "Data Structures", "Sorting Algorithms"],
    links: {
      github: "https://github.com/Bilal-Basharat/Real-Estate-Management-Python-PyQt-",
      live: null,
    },
    problem:
      "Property listings for sale and rent are typically scattered and hard to compare — buyers need to evaluate properties across many attributes at once (price, location, area, type, purpose, agency) rather than browsing flat, unsorted lists. As a Data Structures course project, the challenge was to build a working marketplace around exactly that: structured storage, multi-attribute search, and efficient sorting of property records.",
    solution: [
      "Built a desktop real-estate marketplace where users sign up, publish listings for sale, and search rental properties — with the same capabilities offered to individual clients and agencies.",
      "Designed search and filtering across seven property attributes (agency, type, price, location, area, purpose, contact) with range-based views over the listing data.",
      "Implemented multiple sorting algorithms over the property records and exposed their execution times in the UI, turning course theory into a measurable, visible comparison.",
    ],
    outcomes: [
      "Delivered a complete working flow — authentication, dashboard, publishing, search, and sorted views — as a functioning team project.",
      "Benchmarked sorting algorithms on real listing data with timing displayed per algorithm, demonstrating practical algorithm-performance tradeoffs.",
      "First end-to-end team build: shared codebase, divided responsibilities, and a documented report and repository.",
    ],
    screenshots: [
      { src: "/projects/devoe-partners/signUp_screen.png", alt: "User dashboard with property listings", caption: "User dashboard" },
      { src: "/projects/devoe-partners/login_screen.png", alt: "User dashboard with property listings", caption: "User dashboard" },
      { src: "/projects/devoe-partners/dashboard_screen.png", alt: "User dashboard with property listings", caption: "User dashboard" },
      { src: "/projects/devoe-partners/property_adding_screen.png", alt: "Multi-attribute property search", caption: "Attribute-based search" },
      { src: "/projects/devoe-partners/customized_search_screen_2.png", alt: "Sorting algorithm timing comparison", caption: "Algorithm timing comparison" },
      { src: "/projects/devoe-partners/customized_sort_screen.png", alt: "Sorting algorithm timing comparison", caption: "Algorithm timing comparison" },
    ],
    challenges:
      "Rendering large volumes of listing data in the table view degraded performance — a limitation we identified and documented, which became my first real encounter with the difference between code that works and code that scales. It shaped how I approached pagination and query design in later production work.",
  },
  // QuizHub, Estate Deals, EatsTek follow the same shape.
];

export function getProject(id) {
  return PROJECTS.find((project) => project.id === id) ?? null;
}
