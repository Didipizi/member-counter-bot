import Counter from '../typings/Counter';

const ClockCounter: Counter = {
	aliases: ['clock', 'time'],
	isPremium: false,
	isEnabled: true,
	lifetime: 0,
	execute: async ({ formattingSettings, resource: timeZone }) => {
		const coeff = 1000 * 60 * 5;
		const date = new Date();
		const rounded = new Date(Math.round(date.getTime() / coeff) * coeff)

		return new Intl.DateTimeFormat(formattingSettings.locale, {
			hour: 'numeric',
			minute: 'numeric',
			timeZone,
		}).format(rounded);
	},
};

export default ClockCounter;
