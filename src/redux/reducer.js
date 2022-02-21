import { SEARCH_DATA } from "./actionType";

const init = {
  data: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA:
      return { ...store, data: payload };
    default:
      return { ...store };
  }
};
