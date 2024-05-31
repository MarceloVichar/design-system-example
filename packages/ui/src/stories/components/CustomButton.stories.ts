import type { Meta, StoryObj } from '@storybook/vue3';
import CustomButton from "../../components/CustomButton.vue";

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: "primary",
    size: "default",
    text: "Primary Button",
    disabled: false,
    centered: false,
    loading: false
  },
};