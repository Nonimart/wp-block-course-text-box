import React from 'react'

export default function 


() {
	return (
		<div>
						{/* _____BLOCK CONTROLS_______  */}
		<BlockControls group="inline">
		<p>Pour le controle des élément de style</p>
	</BlockControls>

	<BlockControls group="block">
		<p>Pour le controle des éléments de bloc</p>
	</BlockControls>

	<BlockControls
		group="other"
		controls={[
			{
				title: 'Button 1',
				icon: 'admin-generic',
				isActive: true,
				onClick: () => console.log('Button 1 clicked'),
			},
			{
				title: 'Button 2',
				icon: 'admin-collapse',
				onClick: () => console.log('Button 2 clicked'),
			},
		]}
	>
		<ToolbarGroup>
			{text && <p>Hello Michel</p>}
			<ToolbarButton
				title="Align Left"
				icon="editor-alignleft"
				onClick={() => console.log('Align Left')}
			/>
			<ToolbarButton
				title="Align Center"
				icon="editor-aligncenter"
				onClick={() => console.log('Align Center')}
			/>
			<ToolbarButton
				title="Align Right"
				icon="editor-alignright"
				onClick={() => console.log('Align Right')}
			/>
			<ToolbarDropdownMenu
				icon="arrow-down-alt2"
				label={__('More Alignments', 'text-box')}
				controls={[
					{
						title: __('Wide', 'text-box'),
						icon: 'align-wide',
					},
					{
						title: __('Full', 'text-box'),
						icon: 'align-full-width',
					},
				]}
			/>
		</ToolbarGroup>
		<ToolbarGroup>
			<p>Yooooooo ici</p>
		</ToolbarGroup>
	</BlockControls>

	{/* _____RICH TEXT_______  */}
	<RichText
		{...useBlockProps()}
		onChange={(value) => setAttributes({ text: value })}
		value={text}
		placeholder={__('Your text', 'text-box')}
		tagName="h4"
		allowedFormats={['core/bold']}
	/>
	{/* <input
		placeholder={inputValue}
		label="My Text Field for the client"
		onChange={(e) => setAttributes({ inputValue: e.target.value })}
	/> */}

			
		</div>
	)
}
