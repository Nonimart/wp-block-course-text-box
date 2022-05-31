import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, alignment } = attributes;

	const onChangeAlign = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	return (
		<>
			<BlockControls group="block">
				<AlignmentToolbar value={alignment} onChange={onChangeAlign} />
			</BlockControls>

			<RichText
				{...useBlockProps({ className: `text-box-align-${alignment}` })}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
