export const editAction = (index, value) => {
    return {
        type: "EDIT_POST",
        payload: {
            index,
            value
        }
    }
}