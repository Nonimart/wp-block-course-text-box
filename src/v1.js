import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { omit } from 'lodash';
import blockData from '../block.json';

const v1 = {
	supports: {
		html: false,
		color: {
			background: true,
			text: true,
			gradients: true,
		},
		spacing: {
			padding: true,
		},
	},
	attributes: {
		...omit(blockData.attributes, ['textAlignment']),
		alignment: {
			type: 'string',
			default: 'left',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
	},
	migrate: (attributes) => {
		return {
			...omit(attributes, ['alignment']),
			textAlignment: attributes.alignment,
		};
	},

	save: ({ attributes }) => {
		const { text, alignment, shadow, shadowOpacity } = attributes;

		const classes = classnames(`text-box-align-${alignment}`, {
			'has-shadow': shadow,
			[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
		});

		return (
			<div
				{...useBlockProps.save({
					className: classes,
				})}
			>
				<RichText.Content tagName="h4" value={text} />
			</div>
		);
	},
};

export default v1;
