const { __ } = wp.i18n;
const { useState } = wp.element;
const { Placeholder, TextControl, Button } = wp.components;
import { FigmaIcon } from '../icons';

export const Edit = ( props ) => {
	const { className, url, onURLChange } = props;
	const [ value, setValue ] = useState( url );

	const handleURLChange = ( value ) => {
		setValue( value );
	};

	const handleURLSave = () => {
		onURLChange( value );
	};

	return (
		<div className={ className }>
			<Placeholder
				icon={ <FigmaIcon className="logo" /> }
				label={ __( 'Figma' ) }
				instructions={ __( 'Embed a frame or page' ) }
			>
				<TextControl
					label={ __( 'Link URL:' ) }
					value={ value }
					onChange={ handleURLChange }
				/>
				<Button isDefault onClick={ handleURLSave }>Save</Button>
			</Placeholder>
		</div>
	);
};