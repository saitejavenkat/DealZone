import { filter } from "lodash";

function filter_data(state, action) {
  switch (action.type) {
    case "filteration":
      if (action.val) {
        return state.map((items) => {
          action.val((filt) => {
            if (filt === items.title) {
              console.log(items);
              return items;
            }
          });
        });
      }
      return state;
  }
}
export default filter_data;
