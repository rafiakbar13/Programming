{
  const url = "https://www.contoh.com/?name=Muhammad Rafi Akbar";

  // const name = "\"Muhammad\"\t Rafi 'Akbar'";
  console.info(url);

  const encoded = encodeURI(url);
  console.info(encoded);

  const decoded = decodeURI(encoded);
  console.info(decoded);
}
{
  const value = "Muhammad Rafi=Akbar";
  const url = "https://www.contoh.com/?name=";

  // const name = "\"Muhammad\"\t Rafi 'Akbar'";
  console.info("url asli : ", url + value);

  const encoded = encodeURIComponent(value);
  console.info("encoded : ", url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.info("decoded :", url + decoded);
}
