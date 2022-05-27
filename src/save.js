import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, alignment, textcolor, backgroundcolor } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${alignment}`,
				style: {
					backgroundColor: backgroundcolor,
					color: textcolor,
				},
			})}
			tagName="h4"
			value={text}
		/>
	);
}
