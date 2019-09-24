# Run

Install required npm packages `docker-compose run nodejs npm ci`

Run webpack `docker-compose run nodejs npm run build`

Start containers `docker-compose up -d`

Open browser and go to url `http://127.0.0.1:8080`

When you add new item you get error (logged to console):

```
{
  "message": "Uncaught Error: Ohhh....",
  "filename": "http://0.0.0.0:8080/dist/app.bundle.js",
  "lineno": 38,
  "colno": 20312,
  "stack": [
    {
      "columnNumber": 20312,
      "lineNumber": 38,
      "fileName": "http://0.0.0.0:8080/dist/app.bundle.js",
      "source": "    at http://0.0.0.0:8080/dist/app.bundle.js:38:20312"
    },
    {...}
  ],
  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
}
```

Run command `docker-compose exec nodejs ./node_modules/.bin/source-map  resolve  --context 20 ./public/dist/app.bundle.js.map  38 20312`.

You will see:
```
Maps to webpack:///src/actions/shoppingListActions.js:4:10

import {ADD_ITEM_TO_SHOPPING_LIST} from './constants';

export function addItemToShoppingList(name) {
    throw new Error("Ohhh....");
          ^
    return {type: ADD_ITEM_TO_SHOPPING_LIST, payload: {name}};
}
```

No you see, where the error is located.
You can check previous stack frames if you want.
We configure webpack to use `hidden-source-map` to generate sourcemaps, so browser will not download them.
Also we use `error-stack-parser` package to parse js error stack.
