const UPDATE = 'commitment/commitments/UPDATE';

const initialState = {
    location: null,
    frequency: null,
    penalty: null,
    timesMet: 0,
    daysLeft: 7
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
