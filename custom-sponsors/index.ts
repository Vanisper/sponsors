import { Sponsorship } from "sponsorkit";

const convertCNYToUSD = (cny: number) => cny / 7;

const sponsors: Sponsorship[] = [
  {
    sponsor: {
      type: "User",
      login: "sunzehui",
      name: "Ethan",
      avatarUrl: "https://avatars.githubusercontent.com/u/43507603",
      linkUrl: "https://github.com/sunzehui",
    },
    monthlyDollars: convertCNYToUSD(50),
    privacyLevel: "PUBLIC",
    tierName: "WeChat",
    createdAt: "2024-12-22T05:59:50+08:00",
    isOneTime: true,
    provider: "WeChat",
  },
];

export default sponsors;