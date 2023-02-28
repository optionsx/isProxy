# is it a proxy/vpn/tor passing by?
## to run example.ts over the internet
Install Deno [here](https://deno.land/#installation).
```bash
deno run --allow-net https://deno.land/x/isproxy/example.ts
```
### Usage
```js
import isProxy from "https://deno.land/x/isproxy/mod.ts";
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