import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
//eslint-disable-next-line
import {
	//eslint-disable-next-line
	__experimentalBoxControl as BoxControl,
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import './editor.scss';
import classnames from 'classnames';

const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, style, shadow, shadowOpacity } = attributes;
	const onChangeAlign = (newAlignment) => {
		setAttributes({ textAlignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const toggleShadow = () => {
		setAttributes({ shadow: !shadow });
	};
	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity });
	};
	const classes = classnames(`text-box-align-${textAlignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	return (
		<>
			<InspectorControls>
				{shadow && (
					<PanelBody title={__('Shadow Settings', 'text-box')}>
						<RangeControl
							label={__('Shadow Opacity', 'text-box')}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: 'admin-page',
						title: __('Shadow', 'text-box'),
						onClick: toggleShadow,
						isActive: shadow,
					},
				]}
			>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeAlign}
				/>
			</BlockControls>
			<div {...useBlockProps({ className: classes })}>
				<RichText
					className="text-box-title"
					onChange={onChangeText}
					value={text}
					placeholder={__('Your text', 'text-box')}
					tagName="p"
					allowedFormats={[]}
				/>
				{/* En Sibling il est positionné en absolute */}
				<BoxControlVisualizer
					values={style && style.spacing && style.spacing.padding}
					// showValues={{ top:true, bottom:true }}
					showValues={
						style && style.visualizers && style.visualizers.padding
					}
				/>
			</div>
		</>
	);
}
