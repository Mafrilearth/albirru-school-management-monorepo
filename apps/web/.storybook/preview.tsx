import { DirectionProvider } from "@radix-ui/react-direction";
import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#09090b" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <DirectionProvider dir="ltr">
        <div className="font-sans antialiased text-foreground bg-background p-4">
          <Story />
        </div>
      </DirectionProvider>
    ),
  ],
};

export default preview;
