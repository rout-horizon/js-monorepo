import React from 'react';
import { SVGSocialIconProps } from './types';

export default function DiscordIcon({ fill, ...rest }: SVGSocialIconProps) {
	return (
		<svg
			width="22"
			height="25"
			viewBox="0 0 22 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M8.72467 10.4883C8.0081 10.4883 7.44238 11.1133 7.44238 11.8758C7.44238 12.6383 8.02067 13.2633 8.72467 13.2633C9.44124 13.2633 10.007 12.6383 10.007 11.8758C10.0195 11.1133 9.44124 10.4883 8.72467 10.4883ZM13.3132 10.4883C12.5967 10.4883 12.031 11.1133 12.031 11.8758C12.031 12.6383 12.6092 13.2633 13.3132 13.2633C14.0298 13.2633 14.5955 12.6383 14.5955 11.8758C14.5955 11.1133 14.0298 10.4883 13.3132 10.4883Z"
				fill={fill}
			/>
			<path
				d="M19.4229 0H2.57714C1.15657 0 0 1.15 0 2.575V19.475C0 20.9 1.15657 22.05 2.57714 22.05H16.8331L16.1669 19.7375L17.776 21.225L19.2971 22.625L22 25V2.575C22 1.15 20.8434 0 19.4229 0ZM14.5703 16.325C14.5703 16.325 14.1177 15.7875 13.7406 15.3125C15.3874 14.85 16.016 13.825 16.016 13.825C15.5006 14.1625 15.0103 14.4 14.5703 14.5625C13.9417 14.825 13.3383 15 12.7474 15.1C11.5406 15.325 10.4343 15.2625 9.49143 15.0875C8.77486 14.95 8.15886 14.75 7.64343 14.55C7.35429 14.4375 7.04 14.3 6.72571 14.125C6.688 14.1 6.65029 14.0875 6.61257 14.0625C6.58743 14.05 6.57486 14.0375 6.56229 14.025C6.336 13.9 6.21029 13.8125 6.21029 13.8125C6.21029 13.8125 6.81371 14.8125 8.41029 15.2875C8.03314 15.7625 7.568 16.325 7.568 16.325C4.78971 16.2375 3.73371 14.425 3.73371 14.425C3.73371 10.4 5.544 7.1375 5.544 7.1375C7.35429 5.7875 9.07657 5.825 9.07657 5.825L9.20229 5.975C6.93943 6.625 5.896 7.6125 5.896 7.6125C5.896 7.6125 6.17257 7.4625 6.63771 7.25C7.98286 6.6625 9.05143 6.5 9.49143 6.4625C9.56686 6.45 9.62971 6.4375 9.70514 6.4375C10.472 6.3375 11.3394 6.3125 12.2446 6.4125C13.4389 6.55 14.7211 6.9 16.0286 7.6125C16.0286 7.6125 15.0354 6.675 12.8983 6.025L13.0743 5.825C13.0743 5.825 14.7966 5.7875 16.6069 7.1375C16.6069 7.1375 18.4171 10.4 18.4171 14.425C18.4171 14.425 17.3486 16.2375 14.5703 16.325Z"
				fill={fill}
			/>
		</svg>
	);
}
