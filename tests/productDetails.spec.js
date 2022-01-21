const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {    
    // ESCREVA SEUS TESTES ABAIXO:
    //1- Teste se productDetails é uma função.
    //2- Teste se o retorno da função é um array.
    //3- Teste se o array retornado pela função contém dois itens dentro.
    //4- Teste se os dois itens dentro do array retornado pela função são objetos.
    //5- Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    //6- Teste se os dois productIds terminam com 123.
  });
  it('1-Teste se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  })
  it('2-Teste se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails())).toEqual(true);
  })
  it('3-Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails().length).toBe(2);
  })
  it('4-Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
  })
  it('5-Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0] === productDetails('Alcool gel', 'Máscara')[1]).toEqual(false)
  })
  it('6- Teste se os dois productIds terminam com 123', () => {
    const objetosDaFuncao = productDetails('Alcool gel', 'Máscara');
    expect(objetosDaFuncao[0].details.productId.endsWith('123') && objetosDaFuncao[1].details.productId.endsWith('123')).toEqual(true);
  })
});
