module.exports = {
  title: 'Local-First Cooperation',
  tagline: 'Robust cooperation between nearby computing devices',
  url: 'https://local-first-cooperation.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'local-first-cooperation', // Usually your GitHub org/user name.
  projectName: 'local-first-cooperation.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Local-First Cooperation',
      logo: {
        alt: 'Local-First Cooperation Logo',
        src: 'img/lfcc-logo.svg',
      },
      items: [
        {
          to: 'docs/about/introduction',
          activeBasePath: 'docs/about/',
          label: 'About',
          position: 'right',
        },
        {
          to: 'docs/principles/introduction',
          activeBasePath: 'docs/principles/',
          label: 'Principles',
          position: 'right',
        },
        {
          to: 'docs/use-cases/overview',
          activeBasePath: 'docs/use-cases/',
          label: 'Use-Cases',
          position: 'right',
        },
        {
          to: 'docs/community/plan',
          activeBasePath: 'docs/community',
          label: 'Community',
          position: 'right',
        },
        {
          href:
            'https://github.com/local-first-cooperation/local-first-cooperation.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: 'docs/about/introduction',
            },
            {
              label: 'Principles',
              to: 'docs/principles/communicate-locally',
            },
            {
              label: 'Community',
              to: 'docs/community/get-involved',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'The plan',
              to: 'docs/community/plan',
            },
            {
              label: 'Get involved',
              to: 'docs/community/get-involved',
            },
            {
              label: 'Mailing list',
              href: 'https://groups.google.com/g/local-first-cooperation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/local-first-cooperation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} the Local-First Cooperation contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/local-first-cooperation/local-first-cooperation.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/local-first-cooperation/local-first-cooperation.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
