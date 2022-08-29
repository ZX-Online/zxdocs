// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'ZX Docs',
	tagline: 'This resource contains technical documentation for ZX Spectrum developers. It will help you start developing your own programs and games without delay.',
	url: 'https://zxdocs.online',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'zxonline', // Usually your GitHub org/user name.
	projectName: 'zxdocs', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'ru'],
		localeConfigs: {
			en: {
				htmlLang: 'en-GB',
			},
			ru: {
				htmlLang: 'ru-RU',
			},
			es: {
				htmlLang: 'es-ES',
			},
		},
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/ZX-Online/zxdocs/tree/main/docs',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/ZX-Online/zxdocs/tree/main/blog',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'ZX Docs',
				logo: {
					alt: 'ZX Docs Logo',
					src: 'img/zxdocs-logo.svg',
				},
				items: [
					{
						to: '/docs/tutorial',
						position: 'left',
						label: 'Tutorial',
					},
					{
						to: '/blog',
						label: 'Blog',
						position: 'left'
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{
						href: 'https://github.com/ZX-Online/zxdocs',
						label: 'Update',
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
								label: 'Tutorial',
								to: '/docs/intro',
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
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/ZX-Online/zxdocs',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} ZX Docs. Built with ZX Spectrum amateurs from over the world / Сделано спектрумистами со всего мира.`,
			},
			prism: {
				additionalLanguages: ['bash','basic'],
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
