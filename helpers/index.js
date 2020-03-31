import statistics from "./statistics";
import shortlyFooterMenu from "./shortlyFooterMenu";
import shortlyIcons from "./shortlyIcons";

const helpers = {
  statistics,
  shortlyMenu: shortlyFooterMenu,
  shortlyIcons
};

export default {
  get: (name) => helpers[name]
};
