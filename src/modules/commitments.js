const UPDATE = "commitment/commitments/UPDATE";

const initialState = {
  commitmentLocation: null,
  commitmentFrequency: null
};

export function update({ field, value }) {
  return {
    type: UPDATE,
    field,
    value
  };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return { ...state, [action.field]: action.value };
      break;

    default:
      return state;
      break;
  }
}
