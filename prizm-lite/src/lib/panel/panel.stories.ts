import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Panel',
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
    const area = document.createElement('div');
    area.innerHTML = `
<style>
.content {
    border: 1px solid var(--prizm-background-stroke);
}
.content-body {
  font-family: 'Inter';
  padding: 16px;
}
</style>
<div class="content">

  <div class="prizm-panel">
   <div class="prizm-panel-title not-left-indent">
    <span class="prizm-panel-title__main">Заголовок</span>
    <span class="prizm-panel-title__sub"> Подзаголовок </span>
  </div>
  <div class="prizm-panel-buttons">
  </div>
</div>

<div class="content-body">
    body
</div>
</div>
`
    return area;
  },
  args: {
    label: 'Label',
  },
};

export const PanelWithBackButton: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
<style>
.content {
    border: 1px solid var(--prizm-background-stroke);
}
.content-body {
  font-family: 'Inter';
  padding: 16px;
}
</style>
<div class="content">

  <div class="prizm-panel">
  <div class="prizm-panel-back-btn-wrapper">
    <button class="prizm-button prizm-panel-button prizm-icon-button prizm-button-ghost prizm-button-secondary">
        <i class="prizm-icons prizm-icons-settings-tools_bars"></i>
    </button>
  </div>
   <div class="prizm-panel-title not-left-indent">
    Заголовок
  </div>
</div>

<div class="content-body">
    body
</div>
</div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};


export const PanelWithInstruments: Story = {
  render: (args) => {
    const area = document.createElement('div');
    area.innerHTML = `
<style>
.content {
    border: 1px solid var(--prizm-background-stroke);
}
.content-body {
  font-family: 'Inter';
  padding: 16px;
}
</style>
<div class="content">

  <div class="prizm-panel">
    <div class="prizm-panel-instruments">
        <button class="prizm-button prizm-panel-button prizm-icon-button prizm-button-ghost prizm-button-secondary">
            <i class="prizm-icons prizm-icons-settings-tools_ban"></i>
        </button>

        <button class="prizm-button prizm-panel-button prizm-icon-button prizm-button-ghost prizm-button-secondary">
            <i class="prizm-icons prizm-icons-settings-tools_bars"></i>
        </button>
    </div>
  </div>

  <div class="content-body">
      body
  </div>
</div>

    `
    return area;
  },
  args: {
    label: 'Label',
  },
};
