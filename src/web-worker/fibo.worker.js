// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (message) => {
        let x = 3;
      for (let j = 0; j < 10**5; j++) {
          for (let u = 0; u < 10**5; u++) {
            x++;
            x--;
          }
            
      }

      const nbr = message.data;
      var n1 = 0;
      var n2 = 1;
      var somme = 0;
  
  
      for (let i = 2; i <= nbr; i++) {
        somme = n1 + n2;
  
  
        n1 = n2;
  
  
        n2 = somme;
      }
  
  
      const result = nbr ? n2 : n1;
  
  
      postMessage(result);
    };
  };