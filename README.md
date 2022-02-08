# React Unidit WYSIWYG Editor

## Installation

```bash
npm install unidit-react --save
```

## Update editor version
```bash
npm update unidit-react
```

## Run demo
```bash
npm install --dev
npm run demo
```

and open
```
http://localhost:4000/
```

## Usage

### 1. Require and use Unidit-react component inside your application.

```jsx
import React, {useState, useRef} from 'react';
import UniditEditor from "unidit-react";

const Example = ({}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false // all options from https://nazrul.dev/unidit/doc/
	}

	return (
            <UniditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        );
}
```


License
-----
This package is available under `MIT` License.
