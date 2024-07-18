import { Calculator } from "./calculator";

describe('Test para calculator', () => {
    it('#multiply debería retornar un 4', () => {
        //AAA mantra
        //Arrange - preparar
        const calculator = new Calculator;
        //Act - ejecutar el código
        const rta = calculator.multiply(1,4)
        //Assert - resuelvo la hipótesis
        expect(rta).toEqual(4)
    })
});