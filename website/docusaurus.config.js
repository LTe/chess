module.exports = {
  title: 'Chess notes',
  tagline: 'Personal chess notes',
  url: 'https://chess.pbuttergirl.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LTe', // Usually your GitHub org/user name.
  projectName: 'chess', // Usually your repo name.
  // plugins: ['docusaurus-plugin-auto-sidebars'],
  themeConfig: {
    navbar: {
      title: 'Chess',
      logo: {
        alt: 'Chess logo',
        src: 'img/Chess_qdt45.svg',
        srcDark: 'img/white.svg'
      },
      items: [
        {
          to: 'docs/hello',
          activeBasePath: 'docs',
          label: 'Lessons',
          position: 'left',
        },
        {
          href: 'https://github.com/LTe/chess',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: undefined,
          editUrl:
            'https://github.com/LTe/chess/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/LTe/chess/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
