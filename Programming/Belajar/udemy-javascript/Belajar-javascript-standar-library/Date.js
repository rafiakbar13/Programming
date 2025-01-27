{
  const date = new Date();

  console.info(date);

  const date1 = new Date(2020, 10, 10);
  console.info(date1);

  const date2 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.info(date2);

  const date3 = new Date(1689516955524);
  console.info(date3);
}

// epoch and unix timestamp
{
  const date = new Date();

  console.info(date.getTime());

  const date1 = new Date(2020, 10, 10);
  console.info(date1.getTime());

  const date2 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.info(date2.getTime());

  const date3 = new Date(1689516955524);
  console.info(date3.getTime());

  console.info(Date.now());
}

// Parsing date (membuat date dari string)
{
  const parseTimestamp = Date.parse("2020-10-10T08:25:23.123+07:00");
  console.info("parseTimestamp : ", parseTimestamp);

  const date = new Date(parseTimestamp);
  console.info("Date : ", date);
}

{
  const date = new Date();
  //   date.setFullYear(2025);

  console.info("Tahun :", date.getFullYear());
  console.info("Bulan :", date.getMonth());
  console.info("Hari :", date.getDate());
  console.info("Jam :", date.getHours());
  console.info("Menit :", date.getMinutes());
  console.info("Detik", date.getSeconds());
  console.info("MiliDetik :", date.getMilliseconds());
  console.info("Timezone :", date.getTimezoneOffset());
}
