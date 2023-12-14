export const PRODUCT_CATEGORIES = [
  {
    label: "UI KITS",
    value: "ui_kits" as const,
    featured: [
      { name: "Editor Picks", href: "#", imageSrc: "/nav/ui-kits/mixed.jpg" },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/ui-kits/blue.jpg" },
      { name: "Best Sellers", href: "#", imageSrc: "/nav/ui-kits/purple.jpg" },
    ],
  },
  {
    label: "ICONS",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon Pick",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/icons/new.jpg" },
      {
        name: "Best Selling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
