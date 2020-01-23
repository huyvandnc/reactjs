export const commonActions = {
    toggleClose: () => {
        return {type: 'TOGGLE_MODAL', modalMode: false};
    },
    toggleOpen: () => {
        return {type: 'TOGGLE_MODAL', modalMode: true};
    }
}