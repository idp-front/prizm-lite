import type { Meta, StoryObj } from '@storybook/html';

type ButtonArgs = {
  label: string;
};

const meta: Meta<ButtonArgs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
};

export default meta;
type Story = StoryObj<ButtonArgs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => {
    const btn = createButton(args, ['']);
    return btn;
  },
  args: {
    label: 'Button',
  },
};


export const Disabled: Story = {
  render: (args) => {
    const btn = createButton(args, ['']);
    btn.disabled = true;
    return btn;
  },
  args: {
    label: 'Button',
  },
};

export const Outline: Story = {
  render: (args) => {
    const btn = createButton(args, ['prizm-button-outline']);
    return btn;
  },
  args: {
    label: 'Button',
  },
};

export const Ghost: Story = {
  render: (args) => {
    const btn = createButton(args, ['prizm-button-ghost']);
    return btn;
  },
  args: {
    label: 'Button',
  },
};


export const Sizes: Story = {
  render: (args) => {
    const area = document.createElement('div')

    for (const size of ['xl','l','xm','m','s']) {
      const p = document.createElement('p');

      const btn = createButton({label: 'Size: '+size}, ['prizm-button-'+size]);

      p.appendChild(btn);
      area.appendChild(p);
    }

    return area;
  },
  args: {
    label: 'Button',
  },
};



export const Colors: Story = {
  render: (args) => {
    const area = document.createElement('div');

    area.style.setProperty('--prizm-button-min-width', '120px')

    // Default
    createColors(area);

    // Outline
    createColors(area, ['prizm-button-outline']);

    // Ghost
    createColors(area, ['prizm-button-ghost']);

    return area;
  },
  args: {
    label: 'Button',
  },
};


function createButton(args: ButtonArgs, classNames: string[] =[]) {
  const btn = document.createElement('button');
  btn.innerText = args.label;
  btn.className = ['prizm-button', ...classNames].join(' ');
  return btn;
}

function createColors(area: HTMLDivElement, classNames : string[]= []) {
  for (const color of ['primary', 'secondary', 'success', 'warning', 'danger']) {
    const p = document.createElement('p');

    const btn = createButton({label: color}, ['prizm-button-' + color, ...classNames]);

    p.appendChild(btn);
    area.appendChild(p);
  }
}
