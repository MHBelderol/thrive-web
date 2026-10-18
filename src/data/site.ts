import type { SocialLink } from "../types";

/** Central place for brand/contact info — edit here to rebrand the whole site. */
export const site = {
  name: "thrive",
  brandName: "THRIVE",
  siteName: "THRIVE",
  titleSuffix: "THRIVE - Offshore Services",
  email: "xenia@thrive-offshore.com",
  address: "Surigao City, PH",
  country: "Philippines",
  phones: [
    { label: "PH", display: "+63 929 237 8850", tel: "+639292378850" },
    { label: "US", display: "+1 904 372 8921", tel: "+19043728921" },
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s9.777007,125.489860!6i16",
};

export const topbarLinks: string[] = [
  "FAQs",
  "Support",
  "Privacy",
  "Policy",
  "Career",
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    icon: "fab fa-facebook-f",
    href: "https://web.facebook.com/xenia.thrive",
  },
  {
    label: "LinkedIn",
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/company/thrive-co-ph/",
  },
];
