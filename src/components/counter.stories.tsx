import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Counter from './counter';

const meta = {
  component: Counter
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 0,
    step: 1
  }
};

export const CounterDoubleSteps: Story = {
  args: {
    initialValue: 0,
    step: 2
  }
};
