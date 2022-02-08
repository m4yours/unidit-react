import * as React from 'react';
import { IUnidit } from 'unidit';

declare module 'unidit-react' {
	export interface IUniditEditorProps {
		value: string,
		config?: IUnidit['options'];
		onChange: (newValue: string) => void;
		onBlur: (newValue: string) => void;
	}
	const UniditEditor: React.ComponentType<IUniditEditorProps>;
	export default UniditEditor;
}
