const reducer = (state = [], action) => {
  let add = {};

  if (action.type === "ADD") {
    add = { num: action.number, name: action.name, id: Math.random() };
    return add;
  } else {
    return add;
  }
};

export default reducer;
