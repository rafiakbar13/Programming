{
  //   const regex1 = /rafi/;
  //   const regex2 = new RegExp("rafi");
  //   const regex3 = new RegExp(/rafi/);
}

{
  //   const name = "Muhammad Rafi Akbar";
  //   const regex = /Rafi/;
  //   const result = regex.exec(name);
  //   console.info(result);
  //   const test = regex.test(name);
  //   console.info(test);
}
{
  // regex modifier
  //   const name = "Muhammad Rafi\n rafi Akbar\n Muhammad akbar";
  //   const regex1 = /Rafi/g;
  //   const regex2 = /Akbar/gi;
  //   let result;
  //   while ((result = regex1.exec(name)) !== null) {
  //     console.info(result);
  //   }
  //   while ((result = regex2.exec(name)) !== null) {
  //     console.info(result);
  //   }
}

{
  const regex = /raf[aiueo]/gi;
  const name = "rafi rafa rafu rafe rafo";

  let result;
  while ((result = regex.exec(name)) !== null) {
    console.log(result);
  }
}

{
  const name = "rafi rafa rafu rafe rafo";
  console.info(name.match(/raf[aiueo]/gi));
  console.info(name.search(/raf[aiueo]/gi));
  console.info(name.replace(/raf[aiueo]/i, "Kamu"));
  console.info(name.replaceAll(/raf[aiueo]/gi, "Kamu"));
  console.info(name.split(/r/gi));
}
