import * as React from "react";
import { IUnidit } from "unidit";

export interface UniditProps {
	value: string;
	onChange?: (value: string) => void;
	onBlur?: (value: string) => void;
	config?: IUnidit['options'];
}

export default class UniditEditor extends React.Component<UniditProps, any> {
	constructor(props: UniditProps, context: any);
	render(): JSX.Element;
}
