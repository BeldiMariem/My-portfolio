export interface ContactInfo {
  id: number;
  type: string;
  value: string;
  icon: string;
  link: string;
}

export const CONTACT_DATA: ContactInfo[] = [
  {
    id: 1,
    type: "Email",
    value: "mariem.beldi.dev@email.com", 
    icon: "fas fa-envelope",
    link: "mailto:mariem.beldi.dev@email.com"
  },
  {
    id: 2,
    type: "Phone",
    value: "+216 XX XXX XXX", 
    icon: "fas fa-phone",
    link: "tel:+216XXXXXXXXX"
  },
  {
    id: 3,
    type: "Location",
    value: "Tunis, Tunisia",
    icon: "fas fa-map-marker-alt",
    link: "https://maps.google.com/?q=Tunis,Tunisia"
  },
  {
    id: 4,
    type: "LinkedIn",
    value: "linkedin.com/in/mariem-beldi",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/mariem-beldi/"
  },
  {
    id: 5,
    type: "GitHub",
    value: "github.com/BeldiMariem",
    icon: "fab fa-github",
    link: "https://github.com/BeldiMariem"
  }
];