const UPDATE = 'commitment/commitments/UPDATE';

const initialState = {
    commitmentLocation: {},
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
            state[action.field] = action.value;
            return state;
            break;

        default:
            return state;
            break;
    }
}
