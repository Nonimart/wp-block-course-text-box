import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { omit } from 'lodash';
import blockData from '../block.json';

const v2 = {
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
	// Copier les attributs actuels et juste modifier la nouvelle clé et la remplacer par son ancienne Version

	attributes: {
		...omit(blockData.attributes, ['textAlignment']),
		alignment: {
			type: 'string',
			default: 'left',
		},
	},
	// Transformer les anciens attributes en noveaux attributs
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
				<RichText.Content tagName="p" value={text} />
			</div>
		);
	},
};

export default v2;
