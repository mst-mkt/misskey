import { Meta, Story } from '@storybook/vue3';
import MkMenu_child from './MkMenu.child.vue';
const meta = {
	title: 'components/MkMenu.child',
	component: MkMenu_child,
};
export const Default = {
	components: {
		MkMenu_child,
	},
	template: '<MkMenu.child />',
};
export default meta;
