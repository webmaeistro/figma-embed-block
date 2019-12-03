/**
 * BLOCK: figma-embed-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { FigmaIcon } from './icons';
import { BlockToolbar } from './toolbar';
import { Edit } from './edit';
import { View } from './view';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { useState, Fragment } = wp.element;

registerBlockType( 'cgb/block-figma-embed-block', {
	title: __( 'Figma' ),
	icon: <FigmaIcon />,
	category: 'embed',
	keywords: [
		__( 'Figma' ),
		__( 'Design' ),
		__( 'Image' ),
	],

	attributes: {
		url: {
			type: 'string',
		},
	},

	edit: ( props ) => {
		const { className, attributes: { url }, setAttributes } = props;
		const [ isEditMode, setEditMode ] = useState( false );

		/**
		 * @param {string} newURL The new URL */
		const handleURLChange = ( newURL ) => {
			setEditMode( false );
			setAttributes( { url: newURL } );
		};

		const handleEditModeChange = () => {
			console.log( 'change mode' );
			setEditMode( state => ! state );
		};

		const toolbar = <BlockToolbar isEditMode={ isEditMode } onEditModeToggle={ handleEditModeChange } />;

		if ( isEditMode || ! url ) {
			return (
				<Fragment>
					{ toolbar }
					<Edit url={ url } onURLChange={ handleURLChange } className={ className } />
				</Fragment>
			);
		}
		return (
			<Fragment>
				{ toolbar }
				<View url={ url } />
			</Fragment>
		);
	},

	save: ( props ) => {
		const { className, attributes: { url } } = props;
		return (
			<View url={ url } className={ className } />
		);
	},
} );
