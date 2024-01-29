import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Indicator',
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
<div style="display: flex; align-items: center; gap: 10px;">
    <div class="prizm-indicator prizm-indicator-info"></div>
    <div class="prizm-indicator prizm-indicator-secondary"></div>
    <div class="prizm-indicator prizm-indicator-success"></div>
    <div class="prizm-indicator prizm-indicator-warning"></div>
    <div class="prizm-indicator prizm-indicator-danger"></div>
</div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const Icons: Story = {
  render: (args) => {
    let area = document.createElement('div');

    area.innerHTML = `
TODO
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};
