import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import save from './save';
import v1 from './v1';
import v2 from './v2';

registerBlockType('blocks-cours/text-box', {
	icon: {
		src: (
			<svg
				version="1.1"
				viewBox="0 0 500 500"
				preserveAspectRatio="xMinYMin meet"
			>
				<circle cx="250" cy="250" r="200" />
			</svg>
		),
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save,
	deprecated: [v2, v1],
	variations: [
		{
			name: 'blocks-cours/gradient-text-box',
			title: __('Gradient Text Box'),
			icon: {
				src: (
					<svg
						version="1.1"
						viewBox="0 0 500 500"
						preserveAspectRatio="xMinYMin meet"
					>
						<circle cx="250" cy="250" r="200" />
					</svg>
				),
				background: '#3f0',
				foreground: '#fff',
			},
			attributes: {
				gradient: 'vivid-cyan-blue-to-vivid-purple',
			},
		},
	],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				transform: ({ content, align }) => {
					return createBlock('blocks-cours/text-box', {
						text: content,
						textAlignment: align,
					});
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => {
					return createBlock('blocks-cours/text-box', {
						shadow: true,
						gradient: 'light-green-cyan-to-vivid-green-cyan',
					});
				},
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: () => {
					return createBlock('blocks-cours/text-box');
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				isMatch: ({ text }) => {
					return text ? true : false;
				},
				transform: ({ text, textAlignment }) => {
					return createBlock('core/paragraph', {
						content: text,
						align: textAlignment,
					});
				},
			},
		],
	},
});
