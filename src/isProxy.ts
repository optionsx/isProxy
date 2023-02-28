/*
  This is a simple module to check if an IP is a proxy or not.
  This module uses the API from https://angryman.repl.co
  This module is made by @optionsx on GitHub
*/
import { ProxyData } from "./types.d.ts";
/**
 * Checks if an IP is a proxy/vpn/tor or not, etc.
 * @param {string} ip The IP address to check.
 * @returns {Promise<ProxyData>} The data about the IP address.
 * @example const ip = "1.1.1.1"; const data = await isProxy(ip); console.log(data);
 */
export const isProxy = async (ip: string): Promise<ProxyData> => {
  try {
    return await fetch("https://api.angryman.repl.co/isproxy", {
      method: "POST",
      body: JSON.stringify({ ip }),
    }).then((res) => res.json().then((data) => data));
  } catch (err) {
    throw new Error(err);
  }
};
export default isProxy;
