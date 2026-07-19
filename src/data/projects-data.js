/**
 * Single source of truth for project case studies.
 * Imported by the Projects section (grid) and /projects/[id] (detail pages).
 *
 * To add a project: append an object here — both the grid and its
 * detail route are generated from this array automatically.
 */

export const PROJECTS = [

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Laravel + Vue.js web application for real estate listings
  ///////////////////////////////////////////////////////////////////////////////////////////////
  
  {
    id: "estate-sphere",
    title: "EstateSphere — Real Estate Marketplace",
    context: "Personal project · 2025",
    category: "Web App",
    stack: ["PHP", "JavaScript", "Laravel 12", "Vue 3", "Inertia.js", "Tailwind CSS", "MySQL", "Git", "GitHub"],
    links: {
      github: "https://github.com/Bilal-Basharat/Estate-Deals",
      live: null,
    },
    problem:
      "Most property portals stop at discovery — the actual transaction (offering, accepting, record-keeping) happens off-platform through agents and phone calls. Buyers can't act on a listing the moment they find it, and owners have no single place to compare offers. The goal was a marketplace covering the full cycle: search, payment estimation, direct offers, and transaction history.",
    solution: [
      "Built a search-first browsing experience modeled on established portals: city search with suggestions, filters that persist as removable chips, sorting, and listing cards with photo carousels and upfront monthly-payment estimates.",
      "Designed the listing page around the primary action — a lightbox gallery beside a sticky offer panel with a live payment calculator that recalculates against the drafted offer amount.",
      "Built a seller dashboard driven by what needs attention: pending-offer counts, offers sorted highest-first, and atomic acceptance that marks the property sold and rejects competing offers in one step.",
      "Added permanent purchase and sales history for both parties, showing amount paid versus asking price — records that survive listing deletion by design.",
    ],
    outcomes: [
      "Complete transaction loop on one platform: list, discover, offer, accept, and audit — with the full offer lifecycle (pending, accepted, rejected) visible to both sides.",
      "A reusable design-token system kept 25+ pages consistent, with dark mode and accessibility built in: keyboard navigation, skip links, ARIA labeling, and reduced-motion support.",
      "Fixed production-class bugs along the way: a multi-image upload persisting only the last file, redirects that never fired, and sorting silently overridden by a default query scope.",
    ],
    screenshots: [
      { src: "/projects/estate-sphere/welcome_screen.png", alt: "Landing page with city search and latest listings", caption: "Search-first landing page" },
      { src: "/projects/estate-sphere/dashboard_screen.png", alt: "Listing grid with filters, sorting, and photo carousels", caption: "Seller Dashboard with stats and listing management " },
      { src: "/projects/estate-sphere/my_listings_screen.png", alt: "Listing detail with gallery, payment calculator, and offer panel", caption: "My Listings" },
      { src: "/projects/estate-sphere/offers_screen.png", alt: "Seller offer review with highest-offer highlighting", caption: "Offer review with highest-bid highlight" },
      { src: "/projects/estate-sphere/purchase_screen.png", alt: "Seller dashboard with stats and listing management", caption: "Purchase History" },
      { src: "/projects/estate-sphere/sale_screen.png", alt: "Purchase history showing amount paid versus asking price", caption: "Sold Listings" },
    ],
    challenges:
      "The subtlest bug was sorting: a 'newest first' default scope ran before user-chosen sorting, silently demoting price sort to a secondary criterion — invisible with small test data. It taught me to treat default ordering as conditional, and more broadly to treat the server-confirmed query string, not client state, as the source of truth for filter and sort UX.",
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // QuizHub, Estate Deals, EatsTek follow the same shape.
  ///////////////////////////////////////////////////////////////////////////////////////////////

  {
  id: "quizhub",
  title: "QuizHub — Online Test Conducting App",
  context: "Personal project · 2024",
  category: "Mobile App",
  stack: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Git", "GitHub"],
  links: {
    github: "https://github.com/Bilal-Basharat/quiz-app", 
    live: null,
  },
  problem:
    "During the COVID-19 pandemic, colleges that had always examined students on paper suddenly had no way to run exams at all. Conducting assessments remotely raised problems the traditional system never had to answer: how teachers create and schedule exams without a physical hall, how students take them within enforced time limits, and how hundreds of submissions get graded without weeks of manual checking. QuizHub was built for exactly this gap — a complete exam workflow that works when the classroom can't.",
  solution: [
    "Designed the platform around three roles with distinct needs — admins manage accounts and permissions in bulk, teachers own the exam lifecycle, and students get a focused test-taking experience — enforced end-to-end through role-based access control on a JWT-secured Node.js backend.",
    "Built the full exam lifecycle in Flutter: teachers create exams from a reusable question bank, set durations and schedules, monitor progress in real time, and review results; students take timed exams and receive scores with per-question feedback.",
    "Combined automated grading for objective questions with manual review for open-ended ones, so efficiency never came at the cost of fair evaluation.",
    "Split the data layer deliberately: MongoDB for flexible user and auth data, Firebase for real-time quiz state synchronized across devices — each database chosen for what it does best.",
    "Ran the project like production software: requirements and decisions recorded in signed meeting minutes, tasks tracked on a ClickUp board, communication over Slack, and versioned collaboration through structured GitHub commits.",
  ],
  outcomes: [
    "Delivered the complete assessment flow — authentication, exam creation, scheduling, timed test-taking, automated scoring, feedback, and reports — as a working Android application.",
    "Validated every role's journey against written test cases (admin, teacher, and student flows) before deployment discussions.",
    "The documented engineering process — UML design (class, sequence, use case, DFD, architecture diagrams), meeting minutes, and task tracking — became the project's second deliverable: proof of working the way real teams work.",
  ],
  screenshots: [
    { src: "/projects/quiz-hub/teacher_dashboard.jpg", alt: "QuizHub login screen", caption: "Teacher Dashboard" },
    { src: "/projects/quiz-hub/create_exam.jpg", alt: "QuizHub exam creation screen", caption: "Create exam" },
    { src: "/projects/quiz-hub/add_question.jpg", alt: "QuizHub question creation screen", caption: "Add question" },
    { src: "/projects/quiz-hub/student_dashboard.jpg", alt: "Student dashboard with exam list", caption: "Student Dashboard" },
    { src: "/projects/quiz-hub/exam_screen.jpg", alt: "Student taking timed exam", caption: "Take exam" },
    { src: "/projects/quiz-hub/get_result.jpg", alt: "Student viewing exam results", caption: "View results" },
  ],
  challenges:
    "The hardest decisions were architectural, not visual: choosing Node.js for its non-blocking handling of many simultaneous exam-takers, and splitting storage between MongoDB and Firebase instead of forcing one database to do everything. Writing those trade-offs down in meeting minutes — and defending them — was an early lesson in justifying technical choices, not just making them.",
},

    ///////////////////////////////////////////////////////////////////////////////////////////////
  // python desktop application for real estate listings, with multi-attribute search and sorting
  ///////////////////////////////////////////////////////////////////////////////////////////////
  
  {
    id: "devoe-partners",
    title: "Devoe Partners — Real Estate Desktop Application",
    context: "Personal project · 2023", 
    category: "Desktop App",
    stack: ["Python", "PyQt", "Data Structures", "Sorting Algorithms", "Git", "GitHub"],
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
      { src: "/projects/devoe-partners/signUp_screen.png", alt: "User dashboard with property listings", caption: "Signup Screen" },
      { src: "/projects/devoe-partners/login_screen.png", alt: "User dashboard with property listings", caption: "Login Screen" },
      { src: "/projects/devoe-partners/dashboard_screen.png", alt: "User dashboard with property listings", caption: "User dashboard" },
      { src: "/projects/devoe-partners/property_adding_screen.png", alt: "Multi-attribute property search", caption: "Add Property" },
      { src: "/projects/devoe-partners/customized_search_screen_2.png", alt: "Sorting algorithm timing comparison", caption: "Attribute-based search" },
      { src: "/projects/devoe-partners/customized_sort_screen.png", alt: "Sorting algorithm timing comparison", caption: "Algorithm timing comparison" },
    ],
    challenges:
      "Rendering large volumes of listing data in the table view degraded performance — a limitation we identified and documented, which became my first real encounter with the difference between code that works and code that scales. It shaped how I approached pagination and query design in later production work.",
  },
];

export function getProject(id) {
  return PROJECTS.find((project) => project.id === id) ?? null;
}
