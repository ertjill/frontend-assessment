import type { Meta, StoryObj } from '@storybook/react';
import TextFieldBase from './OutlinedTextField';
import type { OutlinedTextFieldProps } from './OutlineTextField';


const meta: Meta<typeof TextFieldBase> = {
     component: TextFieldBase,
      title: 'Components/OutlinedTextField'
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base : Story = {
    args :{
        label: 'Label'
    } as OutlinedTextFieldProps
}