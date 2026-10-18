import type { TeamMember } from "../types";

// Auto-imports every image dropped into src/assets/img/team (no manual imports needed).
const images = import.meta.glob<string>(
  "../assets/img/team/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  },
);

// Display order (matches the file names in src/assets/img/team).
const order = [
  "Xenia Belderol",
  "Bert Belderol",
  "Sarah Lipao",
  "Sharelyn Cedron",
  "Cristal Lipao",
  "Arvin Bonono",
  "Dianne Casurra",
];

// Job titles, in the same order as `order` above.
const designations = [
  "Founder, Business Operations Lead",
  "Co-founder, Technology Lead",
  "Finance Officer | Executive Assistant",
  "Human Resources & Recruitment Coordinator",
  "Human Resource Admin",
  "Marketing Team Lead",
  "Marketing Team Lead",
];

const rank = (name: string) => {
  const i = order.indexOf(name);
  return i === -1 ? order.length : i;
};

export const teamMembers: TeamMember[] = Object.entries(images)
  .map(([path, image]) => {
    // The file name (without extension) is used as the member's name.
    const name = path
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "");
    return {
      name,
      designation: designations[order.indexOf(name)] ?? "",
      image,
    };
  })
  .sort((a, b) => rank(a.name) - rank(b.name) || a.name.localeCompare(b.name));
