export const apiSwitch = (state, action) => {
    switch(action.type) {
        case 'case1':
        return {url: action.payload, api: 'cat'}
        case 'case2':
            return {url: action.payload, api: 'dog'}
        default:
            throw new Error()

    }
}