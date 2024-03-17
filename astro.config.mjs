import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'energie-o-mat.de',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de'
				}
			},
			// editLink: { baseUrl: 'https://github.com/fkromer/energie-o-mat.de/edit/main/' },
			social: {
				github: 'https://github.com/fkromer/energie-o-mat.de',
			},
			sidebar: [
				{
					label: 'Warum brauchen wir die Energiewende?',
					link: 'warum',
				},
				{
					label: 'Welche Energiequellen brauchen wir für die Energiewende?',
					link: 'energiequellen/gute-alternativen',
				},
				{
					label: 'Welche Energiequellen spielen in der Energiewende nur eine untergeordnete Rolle?',
					link: 'energiequellen/alternativen'
				},
				{
					label: 'Welche Energiequellen müssen wir im Rahmen der Energiewende ersetzen?',
					link: 'energiequellen/schlechte-alternativen'
				},
				{
					label: 'Welche Energiespeicher brauchen wir für die Energiewende?',
					link: 'energiespeicher'
				},
				{
					label: 'Wo stehen wir im Vergleich zu anderen Ländern?',
					link: 'internationaler-vergleich'
				},
				{
					label: 'Mythen aufgeklärt',
					link: 'mythen'
				},
				{
					label: 'Was kann ich tun?',
					link: 'was-kann-ich-tun'
				},
				{
					label: 'Ich bin Wissenschaftler, Data Scientists oder Schüler',
					link: 'daten-und-software',
				}
			],
		}),
	],
});
