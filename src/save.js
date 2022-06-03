import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
	const { text, alignment } = attributes;

	const classes = classnames(`text-box-align-${alignment}`);

	return (
		<div
			{...useBlockProps.save({
				className: classes,
			})}
		>
			<RichText.Content tagName="h4" value={text} />
		</div>
	);
}
