import { App } from 'vue';
import Button from '@q-ui/button';
import Icon from '@q-ui/icon';

const components = [
    Button,
    Icon,
];

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

export interface Plugin {
    install: (app: App) => void;
}

export default {
    install
} as Plugin