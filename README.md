# Docs-App

# Docs App

**Docs App** is a sleek React project that displays draggable card components with file-like previews. It uses **Tailwind CSS** for styling and **Motion** (from `motion/react`) for smooth drag-and-drop interactions.

---

##  Key Features

-  **Draggable cards** using `motion.div` and `dragConstraints`
-  Dynamic content: description, file size, tags, and icons
-  Stylized with **Tailwind CSS** for fast, responsive design
-  Clean component structure with `Card`, `Foreground`, and `Background`
-  Works well across screen sizes using flexible layout

---

##  Project Structure

Docs-App/
├── public/
│ └── index.html
├── src/
│ ├── App.jsx
│ ├── Background.jsx
│ ├── Foreground.jsx
│ ├── Card.jsx
│ └── index.css
├── package.json
└── README.md


- `Card.jsx`: Renders each draggable card with dynamic styles and conditional content.
- `Foreground.jsx`: Wraps all cards and supplies the drag container reference.
- `Background.jsx`: Adds background elements such as titles and page background.
- `App.jsx`: Orchestrates layout by combining Background and Foreground components.

---

##  Installation & Running Locally

1. **Clone the repo**
   ```bash
   git clone git@github.com:KritikaArora25/Docs-App.git
   cd Docs-App

2. **Install Dependencies**
    ```bash
    npm install

2. **Start development server**
    ```bash
    npm run dev

