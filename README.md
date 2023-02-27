# is it a proxy passing by?
```js
import isProxy from "https://deno.land/x/isproxy/index.ts";
const iipp = await isProxy("1.1.1.1");

console.log(iipp);
/*
{
  success: true,
  isProxy: false,
  ipType: "Data Centers",
  domain: "cloudflare.com",
  isp: "APNIC and CloudFlare DNS Resolver Project",
  countryCode: "US",
  countryName: "United States of America",
  regionName: "California",
  cityName: "Los Angeles"
}
*/
```
