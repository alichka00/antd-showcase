interface I_Option {
  value: string | number;
  label: string;
  children?: I_Option[];
  disabled?: boolean;
  isLeaf?: boolean;
  loading?: boolean;
}

export const optionsLocation: I_Option[] = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "hainan",
    label: "Hainan",
    disabled: true,
    children: [
      {
        value: "haikou",
        label: "Haikou",
        children: [
          {
            value: "xiuying Fort",
            label: "Xiuying Fort",
          },
        ],
      },
    ],
  },
];

export const optionList: I_Option[] = [
  {
    label: "Light",
    value: "light",
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];
