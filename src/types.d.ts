/**
 * Represents data about a network proxy.
 * @interface ProxyData
 */
export interface ProxyData {
  /**
   * Indicates whether the proxy check was successful.
   * @type {boolean}
   */
  success: boolean;
  /**
   * Indicates whether the IP address is a known proxy.
   * @type {boolean}
   */
  isProxy: boolean;
  /**
   * The type of IP address (e.g., IPv4 or IPv6).
   * @type {string}
   */
  ipType: string;
  /**
   * The domain associated with the IP address.
   * @type {string}
   */
  domain: string;
  /**
   * The ISP associated with the IP address.
   * @type {string}
   */
  isp: string;
  /**
   * The two-letter country code associated with the IP address (e.g., "US").
   * @type {string}
   */
  countryCode: string;
  /**
   * FullName of the country associated with the IP address.
   * @type {string}
   */
  countryName: string;
  /**
   * The name of the region associated with the IP address.
   * @type {string}
   */
  regionName: string;
  /**
   * The name of the city associated with the IP address.
   * @type {string}
   */
  cityName: string;
}
