import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Spinner',
};

export default meta;
type Story = StoryObj<Args>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => {
    let area = document.createElement('div');

    area.innerHTML = `
<div class="prizm-spinner">
</div> `
    return area;
  },
  args: {
    label: 'Label',
  },
};
