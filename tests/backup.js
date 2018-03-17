const expect = require('chai').expect;

//describe cria um bloco de teste
//inicia os testes
//usa para separar os metodos

describe('Main', function() {

  var arr;

  //roda uma vez, antes do bloco
  before(function() {
    //console.log('before');
  });

  //roda uma vez, depois do bloco
  after(function() {
    //console.log('after');
  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(function() {
    //console.log('beforeEach');
    arr = [1, 2, 3];
  });

  //roda todas as vezes, depois de cada bloco
  afterEach(function() {
    //console.log('afterEach');
  });

  it('should be an array', function() {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 3 when pop a value from array', function() {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  /**
   *
   * Exemplos
   *
   * describe('Method A', function () {
    context('Case 1', function() {
      it('should happen blablba', function () {
        //espera que aconteca
      });
    });

    context.only('Case 2', function() {
      it('should happen execute apenas esse', function() {
        //use only
      });
    });

    context('Case 3', function () {
      it.skip('should happen pule esse metodo', function() {
        //use o skip
      });
    });

    context('Case 4', function () {
      it('should happen exibir erro', function() {
        throw new Error('just an error');
      });
    });

  }); */

});
