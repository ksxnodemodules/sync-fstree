# sync-fstree
Just traverse directory tree synchronously

## Requirements

* Node.js ≥ 6.0.0, and npm

## Usage

```javascript
const tree = require('sync-fstree') // -> function (origin: string) -> [file: string]
tree(dirname) // -> [file: string]
```
