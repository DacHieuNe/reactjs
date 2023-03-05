export const deleteAction = (id) => {
    return {
        type: "DELETE_POST",
        payload: {
            id
        }
    }
}