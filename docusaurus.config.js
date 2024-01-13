// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {
  themes: { github: lightCodeTheme, dracula: darkCodeTheme },
} = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  staticDirectories: ["public", "static"],
  title: "CS102 Handbook",
  tagline: "A collection of various helpful documentation for CS102 at UTK",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://utk-eecs-crumpton-tas.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/cs102-handbook/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "utk-eecs-crumpton-tas", // Usually your GitHub org/user name.
  projectName: "cs102-handbook", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",
  onDuplicateRoutes: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
      // Replace with your project's social card
      image: "img/cs102.png",
      navbar: {
        // title: "CS 102 Handbook",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "home",
            position: "left",
            label: "CS102 Handbook",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/utk-eecs-crumpton-tas/cs102-handbook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   copyright: `Written by Ethan Rickert, Undergraduate TA for COSC 102 2023 spring semester`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          {
            className: "code-block-error-line",
            line: "This will error",
          },
          {
            className: "theme-code-block-highlighted-line",
            line: "Highlight",
            block: { start: "highlight-start", end: "highlight-end" },
          },
        ],
      },
    }),
  plugins: [
    /**
     * TailwindCSS Plugin
     */
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    /** */
  ],
  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
