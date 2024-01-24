import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
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
    const e = createInput(args, ['']);
    e.placeholder = "Placeholder"
    return e;
  },
  args: {
    label: 'Label',
  },
};

export const InputOuterLabel: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
    <label class="prizm-input-label">Label</label>
    <input class="prizm-input" value="Text"/>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const InputInnerLabel: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
    <div class="prizm-input-group" style="max-width: 400px">
        <div class="prizm-input-group-before">Icon</div>
        <div class="prizm-input-area">
          <input id="input" class="prizm-input" value="Text" placeholder="&nbsp;"/>
          <label class="prizm-input-label" for="input">Label</label>
        </div>
    </div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const InputGroup: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
    <div class="prizm-input-group" style="max-width: 400px">
         <div class="prizm-input-group-before">Icon</div>
            <input class="prizm-input" value="Text"/>
         <div class="prizm-input-group-after">Icon2</div>
    </div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const InputSubtext: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
<div style="max-width: 400px">
    <label class="prizm-input-label">
         Label
    </label>

    <div class="prizm-input-group" >
         <input class="prizm-input" value="Text"/>
    </div>

    <div class="prizm-input-subtext">
         Description
    </div>
</div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const ErrorInput: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
    <input class="prizm-input" aria-invalid="true" value="Invalid text"/>
    <div class="prizm-input-error">Error input</div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const InputSizes: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
    <input class="prizm-input" value="TODO"/>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};

function createInput(args: Args, classNames: string[] =[]) {
  const el = document.createElement('input');
  el.className = ['prizm-input', ...classNames].join(' ');
  return el;
}
