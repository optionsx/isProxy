# is it a proxy passing by?
```js
import isProxy from 'direct_ghLink'
const proxy = await isProxy('1.1.1.1')

console.log(proxy) // {"isProxy":false,"country":"US","region":"New South Wales","city":"Sydney","hostname":"one.one.one.one","isp":"Cloudflare"}
```

# license
unlicense