/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ignite',
  tagline: 'Connect systems by building automated flows using drag and drop!',
  url: 'https://docs.cgignite.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Cyber Group Ignite', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      // title: 'My Site',
      logo: {
        alt: 'ignite',
        src: 'img/ignite-full-orange.png',
      },
      items: [
        {
          to: 'docs/getting-started/introduction/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blogs',
          position: 'left'
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Ignite',
          items: [
            {
              label: 'Docs',
              to: '/docs/',
            },
            {
              label: 'Blogs',
              to: '/blog/',
            },
            {
              label: 'Deploy',
              href: 'https://github.com/Cybergroup-Research/ignite-runtime-image',
            }
          ],
        },
        {
          title: 'Apps',
          items: [
            {
              label: 'Dashboard',
              href: 'https://dashboard.cgignite.io/apps',
            },
            {
              label: 'API Designer',
              href: 'https://designer.cgignite.io/',
            },
            {
              label: 'JSONata Explorer',
              href: 'https://jsonata.cgignite.io/',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'CG Ignite',
              href: 'https://www.cgignite.com/',
            },
            {
              label: 'Cyber Group',
              href: 'https://www.cygrp.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cyber Group Inc.`,
    },
    googleAnalytics: {
      trackingID: 'UA-87617200-3',
  },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
