import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ColorPalette,
} from '@wordpress/components';

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
				<PanelBody
					title={__('Color settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<p>Ici inspector controls</p>
					<TextControl
						label="Input Label"
						value={text}
						onChange={onChangeText}
						help="Ici la description qui aide l'utilisateur"
					/>
					<TextareaControl
						label="Textarea Label"
						value={text}
						onChange={onChangeText}
						help="Ici la description qui aide l'utilisateur"
					/>
					<p>Background color</p>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'green', color: '#507463' },
						]}
						value={backgroundColor}
						onChange={onChangeBackgroundColor}
					/>
					<p>Text color</p>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#0f0' },
						]}
						value={textColor}
						onChange={onChangeTextColor}
					/>
				</PanelBody>
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
