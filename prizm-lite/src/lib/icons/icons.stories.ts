import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Icons',
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
    <style>
    .content {
      font-family: 'Inter';
    }

     .icon-text-card {
        margin: 8px;
     }

    .icon-card {
        padding: 16px;
        border: 1px solid var(--prizm-palette-gray-200);
    }
    </style>

    <div class="content">
        <div class="icon-text-card">
            Base size:
        </div>
        <div class="icon-card">
            <i class="prizm-base-icons-android"></i>
        </div>

        <div class="icon-text-card">
            Full size:
        </div>
        <div class="icon-card">
            <i class="prizm-full-icons-android"></i>
        </div>

        <br>

        <a href="https://prizm.site/components/icons/All_Icons">All set icons</a>
    </div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};
