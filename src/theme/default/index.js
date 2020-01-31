import variables from './variables';
import component from './components';
let overrides = {};
Object.values(component).forEach((component) => {
    overrides = Object.assign(Object.assign({}, overrides), component(variables));
});
export default Object.assign(Object.assign({}, variables.theme), { overrides });