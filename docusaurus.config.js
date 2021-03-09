module.exports = {
  title: 'Local-First Cooperation',
  tagline: 'Robust cooperation between nearby computing devices',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'local-first-cooperation', // Usually your GitHub org/user name.
  projectName: 'local-first-cooperation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Local-First Cooperation',
      logo: {
        alt: 'Local-First Cooperation Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/about/introduction',
          activeBasePath: 'docs/about/',
          label: 'About',
          position: 'right',
        },
        {
          to: 'docs/principles/communicate-locally',
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
          to: 'blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/local-first-cooperation/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} the Local-First Cooperation contributor.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
