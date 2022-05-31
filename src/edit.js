import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, textColor, backgroundColor } = attributes;

	const onChangeAlign = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};
	const onChangeTextColor = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('Background color', 'text-box'),
						},
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __('Text color', 'text-box'),
						},
					]}
				></PanelColorSettings>
			</InspectorControls>

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
				style={{ backgroundColor, color: textColor }}
			/>
		</>
	);
}
