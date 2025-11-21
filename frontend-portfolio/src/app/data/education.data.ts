export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export const EDUCATION_DATA: Education[] = [
  {
    id: 1,
    institution: "ESPRIT - Private School of Engineering and Technology",
    degree: "Engineering Degree in Computer Science",
    period: "2021 - 2024",
    location: "Tunis, Tunisia"
  },
  {
    id: 2,
    institution: "Higher Institute of Technological Studies", 
    degree: "Bachelor's Degree in Information Technology",
    period: "2017 - 2020",
    location: "Zaghouan, Tunisia"
  }
];