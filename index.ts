interface ProxyData {
  isProxy: boolean;
  country: string;
  region: string;
  city: string;
  hostname: string;
  isp: string;
}
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
