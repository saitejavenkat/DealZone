function handle_filter(state, action) {
  switch (action.type) {
    case "insert":
      return [...state, action.val];
    case "remove":
      return state.filter((item) => item !== action.val);
    case "close":
      document.querySelector(`.${action.val.split(" ")[0]}`).checked = false;
      return state.filter((item) => item !== action.val);
  }
}

export default handle_filter;
