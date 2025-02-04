import starlightLlmsTxt from "starlight-llms-txt";
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.llms-txt-docs.com',
	integrations: [
		starlight({
            title: 'LLMs Txt Test',
            description: 'This is a test of the LLMs Text using pnpm.',

            head: [
			],

            social: {
            blueSky: 'https://bsky.app/profile/astro.build',
            email: 'mailto:hello@llms-txt-docs.com',
			},

            sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],

            plugins: [starlightLlmsTxt()]
        }),
	],
});
