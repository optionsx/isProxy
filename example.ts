import isProxy from "https://deno.land/x/isproxy/mod.ts";
const iipp = await isProxy("1.1.1.1");

console.log(iipp);
