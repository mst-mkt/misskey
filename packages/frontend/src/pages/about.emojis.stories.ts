import { Meta, Story } from '@storybook/vue3';
import about_emojis from './about.emojis.vue';
const meta = {
	title: 'pages/about.emojis',
	component: about_emojis,
};
export const Default = {
	components: {
		about_emojis,
	},
	template: '<about.emojis />',
};
export default meta;
