import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://read.lutaonan.com",
	integrations: [
		starlight({
			title: `Randy 的读书乐园`,
			description: "Randy 的读书乐园",
			head: [
				{
					tag: "script",
					attrs: {
						async: true,
						'data-website-id': "4254cfbd-aaa3-482b-89c1-856dabe78be6",
						src: 'https://randy-umami.zeabur.app/script.js'
					}
				}
			],
			social: {
				github: 'https://github.com/djyde',
				twitter: "https://twitter.com/randyloop"
			},
			customCss: [
				'./src/styles/custom.css',
				'@fontsource-variable/noto-sans-sc/index.css'
			],
			tableOfContents: false,
			sidebar: [
				{
					label: "前言",
					link: "/preface"
				},
				{
					label: '书评',
					autogenerate: { directory: 'books' },
				},
			],
		}),
	],
});
