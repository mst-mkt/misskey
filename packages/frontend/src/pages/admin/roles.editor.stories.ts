import { Meta, Story } from '@storybook/vue3';
import roles_editor from './roles.editor.vue';
const meta = {
	title: 'pages/admin/roles.editor',
	component: roles_editor,
};
export const Default = {
	components: {
		roles_editor,
	},
	template: '<roles.editor />',
};
export default meta;
