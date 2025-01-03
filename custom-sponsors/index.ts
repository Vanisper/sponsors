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
  {
    sponsor: {
      type: "User",
      login: "asennaggmkl",
      name: "阿森纳",
      avatarUrl: "https://avatars.githubusercontent.com/u/178490476",
      linkUrl: "https://github.com/asennaggmkl",
    },
    monthlyDollars: convertCNYToUSD(6.66 + 1 + 1),
    privacyLevel: "PUBLIC",
    tierName: "WeChat",
    createdAt: "2025-01-03T10:03:16+08:00",
    isOneTime: true,
    provider: "WeChat",
    raw: {
      sponsors: [
        {
          cny: 6.66,
          description: "必须吃辣条",
          createdAt: "2025-01-03T10:03:16+08:00",
        },
        {
          cny: 1,
          description: "ComeOnMakeMoney",
          createdAt: "2025-01-03T11:16:32+08:00",
        },
        {
          cny: 1,
          description: "您好 咨询问题",
          createdAt: "2025-01-03T11:16:49+08:00",
        },
      ],
    }
  },
];

export default sponsors;