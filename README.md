# is it a proxy passing by?
```js
import isProxy from "https://deno.land/x/isproxy/index.ts";

const proxy = await isProxy("1.1.1.1");
console.log(proxy);
// {"isProxy":false,"country":"US","region":"New South Wales","city":"Sydney","hostname":"one.one.one.one","isp":"Cloudflare"}
```
