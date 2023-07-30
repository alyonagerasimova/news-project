import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam aspernatur debitis enim itaque laborum, laudantium, minima nulla officiis placeat quaerat, quas reiciendis vero. A ex explicabo harum impedit nisi.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam aspernatur debitis enim itaque laborum, laudantium, minima nulla officiis placeat quaerat, quas reiciendis vero. A ex explicabo harum impedit nisi.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
