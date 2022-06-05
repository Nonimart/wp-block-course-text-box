import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
	const { text, textAlignment, shadow, shadowOpacity } = attributes;

	const classes = classnames(`text-box-align-${textAlignment}`, {
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
}
