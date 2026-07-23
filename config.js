// ┌─┐┌─┐┌┐┐┌─┐┌─┐┌─┐
// └─┐│ │││││ ┬├┤ └─┐
// └─┘└─┘┘└┘└─┘└─┘└─┘
// A minimal, premium startpage
// Edit this file to personalize your startpage.

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Luis',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night, sleep well.',

	// Layout
	layout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9d433b384bc8e237802ad02b93105808', // Get your API key from https://openweathermap.org/
	weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'C' or 'F'
	language: 'en', // More languages at https://openweathermap.org/current#multi
	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '0.0',
	defaultLongitude: '0.0',

	// Auto-change theme
	autoChangeTheme: true,

	// Auto-change by OS
	changeThemeByOS: true,

	// Auto-change by hour (24hr format, hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'GitHub',
			icon: 'github-logo',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'envelope-simple',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'YouTube',
			icon: 'youtube-logo',
			link: 'https://youtube.com/',
		},
		{
			id: '4',
			name: 'Reddit',
			icon: 'hash',
			link: 'https://reddit.com/',
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'x-logo',
			link: 'https://x.com/',
		},
		{
			id: '6',
			name: 'Discord',
			icon: 'discord-logo',
			link: 'https://discord.com/app',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Spotify',
			icon: 'spotify-logo',
			link: 'https://open.spotify.com/',
		},
		{
			id: '2',
			name: 'Amazon',
			icon: 'amazon-logo',
			link: 'https://amazon.com/',
		},
		{
			id: '3',
			name: 'Figma',
			icon: 'figma-logo',
			link: 'https://figma.com/',
		},
		{
			id: '4',
			name: 'Hashnode',
			icon: 'hashnode-logo',
			link: 'https://hashnode.com/',
		},
		{
			id: '5',
			name: 'WhatsApp',
			icon: 'chat-circle',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '6',
			name: 'Telegram',
			icon: 'paper-plane-tilt',
			link: 'https://web.telegram.org/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	firstlistsContainer: [
		{
			icon: 'sparkle',
			id: '1',
			links: [
				{
					name: 'Gmail',
					link: 'https://mail.google.com/',
				},
				{
					name: 'Calendar',
					link: 'https://calendar.google.com/',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/',
				},
				{
					name: 'Keep',
					link: 'https://keep.google.com/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Stack Overflow',
					link: 'https://stackoverflow.com/',
				},
				{
					name: 'MDN',
					link: 'https://developer.mozilla.org/',
				},
				{
					name: 'Dev.to',
					link: 'https://dev.to/',
				},
				{
					name: 'Hacker News',
					link: 'https://news.ycombinator.com/',
				},
			],
		},
	],

	secondListsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'YouTube Music',
					link: 'https://music.youtube.com/',
				},
				{
					name: 'SoundCloud',
					link: 'https://soundcloud.com/',
				},
				{
					name: 'Bandcamp',
					link: 'https://bandcamp.com/',
				},
				{
					name: 'Last.fm',
					link: 'https://last.fm/',
				},
			],
		},
		{
			icon: 'bookmark',
			id: '2',
			links: [
				{
					name: 'Pocket',
					link: 'https://getpocket.com/',
				},
				{
					name: 'Notion',
					link: 'https://notion.so/',
				},
				{
					name: 'Trello',
					link: 'https://trello.com/',
				},
				{
					name: 'Todoist',
					link: 'https://todoist.com/',
				},
			],
		},
	],
};
