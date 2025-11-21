export interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
  focus: string; // What artistic principle it demonstrates
}

export const ARTWORK_DATA: Artwork[] = [
  {
    id: 1,
    title: "Portrait Study",
    image: "/images/drawings/portrait-1.jpg", // Your actual drawing
    description: "Exploring human expression and facial anatomy",
    focus: "Form & Proportion"
  },
  {
    id: 2,
    title: "Architectural Sketch",
    image: "/images/drawings/architecture-1.jpg",
    description: "Precision in perspective and structural details", 
    focus: "Perspective & Precision"
  },
  {
    id: 3,
    title: "Still Life Composition",
    image: "/images/drawings/still-life-1.jpg",
    description: "Mastering light, shadow, and texture",
    focus: "Light & Texture"
  },
  {
    id: 4,
    title: "Gesture Drawing",
    image: "/images/drawings/gesture-1.jpg",
    description: "Capturing movement and dynamic forms",
    focus: "Movement & Flow"
  }
];