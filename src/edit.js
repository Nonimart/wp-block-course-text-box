import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	withColors,
} from '@wordpress/block-editor';

import './editor.scss';

function Edit(props) {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
	} = props;
	const { text, alignment } = attributes;
	// console.log(props);
	const onChangeAlign = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __('Background color', 'text-box'),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __('Text color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor.color}
						backgroundColor={backgroundColor.color}
					/>
				</PanelColorSettings>
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
				style={{
					backgroundColor: backgroundColor.color,
					color: textColor.color,
				}}
			/>
		</>
	);
}

export default withColors({
	backgroundColor: 'backgroundColor',
	textColor: 'color',
})(Edit);
