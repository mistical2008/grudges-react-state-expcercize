import id from 'uuid/v4';

export const TOGGLE_FORGIVENESS = 'TOGGLE_FORGIVENESS';
export const ADD_GRUDGE = 'ADD_GRUDGE';

const reducer = (state = [], action) => {
  if (action.type === ADD_GRUDGE) {
    return [
      {
        id: id(),
        ...action.payload,
      },
      ...state
    ]
  }

  if (action.type === TOGGLE_FORGIVENESS) {
    return state.map(grudge => {
      // console.log("Reducer(before): ", grudge);
      if (grudge.id !== action.payload.id) return grudge;
      // console.log("Reducer(after): ", grudge);
      return {...grudge, forgiven: !grudge.forgiven};
    })
  }

  return state;
}

export default reducer;
