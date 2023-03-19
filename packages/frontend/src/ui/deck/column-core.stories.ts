import { Meta, Story } from '@storybook/vue3';
import column_core from './column-core.vue';
const meta = {
	title: 'ui/deck/column-core',
	component: column_core,
};
export const Default = {
	components: {
		column_core,
	},
	template: '<column-core />',
};
export default meta;
