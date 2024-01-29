import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Checkbox',
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
<label class="prizm-checkbox">
  <input type="checkbox"/>
  <div class="prizm-checkbox__checkmark"></div>
  <div class="prizm-checkbox__body">Label</div>
</label>
<br>
<br>

<label class="prizm-checkbox">
  <input type="checkbox" checked/>
  <div class="prizm-checkbox__checkmark"></div>
  <div class="prizm-checkbox__body">Label</div>
</label>
<br>
<br>

<label class="prizm-checkbox">
  <input type="checkbox" disabled/>
  <div class="prizm-checkbox__checkmark"></div>
  <div class="prizm-checkbox__body">Disabled</div>
</label>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};
