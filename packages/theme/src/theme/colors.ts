const blue = {
  // https://hihayk.github.io/scale/#5/9/50/80/-0/67/20/20/1D9A6C/29/154/108/white
  "150": "#051D74",
  "140": "#092489",
  "130": "#0D2C9E",
  "120": "#1134B1",
  "110": "#173CC4",
  "100": "#1d45d6",
  "90": "#2F55DC",
  "80": "#4264E1",
  "70": "#5574E6",
  "60": "#6884EA",
  "50": "#7C94EE",
  "40": "#90A5F2",
  "30": "#A4B6F5",
  "20": "#B9C7F8",
  "10": "#CED8FB",
  shadow: "rgba(40, 167, 69, 0.4)",
};

const green = {
  // https://hihayk.github.io/scale/#5/9/50/80/-0/67/20/20/1D9A6C/29/154/108/white
  "150": "#085338",
  "140": "#0B6242",
  "130": "#0F714D",
  "120": "#137F58",
  "110": "#188D62",
  "100": "#1D9A6C",
  "90": "#30A46B",
  "80": "#43AE6C",
  "70": "#56B870",
  "60": "#6AC276",
  "50": "#7ECB7F",
  "40": "#99D492",
  "30": "#B3DDA6",
  "20": "#CAE5BB",
  "10": "#DEEDCF",
  shadow: "rgba(40, 167, 69, 0.4)",
};

const orange = {
  // https://hihayk.github.io/scale/#5/9/50/80/-0/0/20/20/FF9300/255/148/0/white
  "150": "#804B00",
  "140": "#995A00",
  "130": "#B36900",
  "120": "#CC7700",
  "110": "#E68500",
  "100": "#FF9300",
  "90": "#FF9D17",
  "80": "#FFA72D",
  "70": "#FFB144",
  "60": "#FFBB5B",
  "50": "#FFC471",
  "40": "#FFCE88",
  "30": "#FFD79F",
  "20": "#FFE1B5",
  "10": "#FFEACC",
  shadow: "rgba(255, 187, 17, 0.4)",
};

const red = {
  // https://hihayk.github.io/scale/#5/9/50/80/-0/0/20/20/DA2423/218/36/34/white
  "150": "#760908",
  "140": "#8C0D0C",
  "130": "#A01211",
  "120": "#B41716",
  "110": "#C81D1C",
  "100": "#DA2423",
  "90": "#DF3635",
  "80": "#E44847",
  "70": "#E85A59",
  "60": "#EC6D6C",
  "50": "#F0807F",
  "40": "#F39393",
  "30": "#F6A7A7",
  "20": "#F9BBBB",
  "10": "#FBD0CF",
  shadow: "rgba(226, 21, 21, 0.4)",
};

const grey = {
  // https://hihayk.github.io/scale/#5/9/50/80/-0/0/20/20/D2D2D2/210/210/210/white
  "150": "#696969",
  "140": "#7E7E7E",
  "130": "#939393",
  "120": "#A8A8A8",
  "110": "#BDBDBD",
  "100": "#D2D2D2",
  "90": "#D6D6D6",
  "80": "#DADADA",
  "70": "#DEDEDE",
  "60": "#E2E2E2",
  "50": "#E6E6E6",
  "40": "#EAEAEA",
  "30": "#EEEEEE",
  "20": "#F2F2F2",
  "10": "#F6F6F6",
  shadow: "rgba(210, 210, 210, 0.4)",
};

const black = {
  "100": "#000",
  "90": "#171717",
  "80": "#2D2D2D",
  "70": "#444444",
  "60": "#5B5B5B",
  "50": "#717171",
  "40": "#888888",
  "30": "#9F9F9F",
  "20": "#B5B5B5",
  "10": "#CCCCCC",
};

export const colors = {
  text: black["80"],
  background: "#fff",
  black,
  white: "#fff",
  offWhite: "#f9f9f9",
  brand: green,
  primary: blue,
  warning: orange,
  danger: red,
  secondary: grey,
  border: grey["100"],
};

export type Colors = typeof colors;
