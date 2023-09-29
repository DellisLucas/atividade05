const arrayPrint = [
    [5, 10, 12],
    [2, 9, 11],
    [15, 8, 6]
  ];
  
  arrayPrint.forEach(subarray => {
    subarray.forEach(valor => {
      if (valor > 10) {
        console.log(valor);
      }
    });
  });
  