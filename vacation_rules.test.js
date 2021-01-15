require('@jest/globals');
const { 
    rulesOfDaysScheduleHolidays: validate,
    MSG_PERIODO_14_DIAS,
    MSG_PERIODO_INFERIOR_5_DIAS,
    MSG_VALIDATED 
} = require('./vacation_rules');

var prog1;
var prog2;
var prog3;
var allowance = 0;
var balance = 0;
var _object = {};

beforeEach(() => {
    prog1 = 0; 
    prog2 = 0; 
    prog3 = 0; 
    allowance = 0;
    balance = 0;

    _object = {
        conPeriodosDescansosItsCollective: [{
            quantidadeDiasDescansoRea: 0,
            quantidadeDiasDescansoProg: 0    
        }]
    };
});

describe('-- without allowance', () => {
    test('01 - without allowanceDays - should return at least 1 period of 14 days - prog: 10 10 10', () => {
        prog1 = 10; prog2 = 10; prog3 = 10;
        allowance = 0;
        balance = 30;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_14_DIAS);
    })

    test('02 - without allowanceDays - should return period lower than 5 days - prog: 18 8 4', () => {
        prog1 = 18; prog2 = 8; prog3 = 4;
        allowance = 0;
        balance = 30;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('03 - without allowanceDays - should return valid - prog: 15 10 5', () => {
        prog1 = 15; prog2 = 10; prog3 = 5;
        allowance = 0;
        balance = 30;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('08 - with collective prog 14d - should return period lower than 5 days - prog: 12 4 0', () => {
        prog1 = 12; prog2 = 4; prog3 = 0;
        allowance = 0;
        balance = 16;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 14    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('09 - with collective prog 14d - should return valid - prog: 11 5 0', () => {
        prog1 = 11; prog2 = 5; prog3 = 0;
        allowance = 0;
        balance = 16;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 14    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('10 - with collective rea 14d - should return period lower than 5 days - prog: 12 4 0', () => {
        prog1 = 12; prog2 = 4; prog3 = 0;
        allowance = 0;
        balance = 16;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 14    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('11 - with collective rea 14d - should return valid - prog: 11 5 0', () => {
        prog1 = 11; prog2 = 5; prog3 = 0;
        allowance = 0;
        balance = 16;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 14    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })
    
    test('12 - with collective prog 10d - should return at least 1 period of 14 days - prog: 13 7 0', () => {
        prog1 = 13; prog2 = 7; prog3 = 0;
        allowance = 0;
        balance = 20;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 10    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_14_DIAS);    
    })
    
    test('13 - with collective prog 10d - should return period lower than 5 days - prog: 16 4 0', () => {
        prog1 = 16; prog2 = 4; prog3 = 0;
        allowance = 0;
        balance = 20;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 10    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('14 - with collective prog 10d - should return valid - prog: 15 5 0', () => {
        prog1 = 15; prog2 = 5; prog3 = 0;
        allowance = 0;
        balance = 20;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 10    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('15 - with collective rea 10d - should return at least 1 period of 14 days - prog: 13 7 0', () => {
        prog1 = 13; prog2 = 7; prog3 = 0;
        allowance = 0;
        balance = 20;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 10,
                quantidadeDiasDescansoProg: 0    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_14_DIAS);    
    })
    
    test('16 - with collective rea 10d - should return period lower than 5 days - prog: 16 4 0', () => {
        prog1 = 16; prog2 = 4; prog3 = 0;
        allowance = 0;
        balance = 20;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 10,
                quantidadeDiasDescansoProg: 0    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('17 - with collective rea 10d - should return valid - prog: 15 5 0', () => {
        prog1 = 15; prog2 = 5; prog3 = 0;
        allowance = 0;
        balance = 20;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 10,
                quantidadeDiasDescansoProg: 0    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('18 - with collective prog 13d - should return at least 1 period of 14 days - prog: 11 6 0', () => {
        prog1 = 11; prog2 = 6; prog3 = 0;
        allowance = 0;
        balance = 17;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 13    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_14_DIAS);    
    })
    
    test('19 - with collective prog 13d - should return period lower than 5 days - prog: 14 3 0', () => {
        prog1 = 14; prog2 = 3; prog3 = 0;
        allowance = 0;
        balance = 17;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 13    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('20 - with collective prog 13d - should return valid - prog: 17 0 0', () => {
        prog1 = 17; prog2 = 0; prog3 = 0;
        allowance = 0;
        balance = 17;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 13    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('21 - with collective rea 13d - should return at least 1 period of 14 days - prog: 11 6 0', () => {
        prog1 = 11; prog2 = 6; prog3 = 0;
        allowance = 0;
        balance = 17;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 13,
                quantidadeDiasDescansoProg: 0    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_14_DIAS);    
    })
    
    test('22 - with collective rea 13d - should return period lower than 5 days - prog: 14 3 0', () => {
        prog1 = 14; prog2 = 3; prog3 = 0;
        allowance = 0;
        balance = 17;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 13,
                quantidadeDiasDescansoProg: 0    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('23 - with collective rea 13d - should return valid - prog: 17 0 0', () => {
        prog1 = 17; prog2 = 0; prog3 = 0;
        allowance = 0;
        balance = 17;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 13,
                quantidadeDiasDescansoProg: 0    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('24 - with collective prog 20d - should return period lower than 5 days - prog: 6 4 0', () => {
        prog1 = 6; prog2 = 4; prog3 = 0;
        allowance = 0;
        balance = 10;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 20    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('25 - with collective prog 20d - should return period lower than 5 days - prog: 4 6 0', () => {
        prog1 = 4; prog2 = 6; prog3 = 0;
        allowance = 0;
        balance = 10;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 20    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('26 - with collective prog 20d - should return valid - prog: 5 5 0', () => {
        prog1 = 5; prog2 = 5; prog3 = 0;
        allowance = 0;
        balance = 10;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 20    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('25 - with collective prog 20d - should return valid - prog: 10 0 0', () => {
        prog1 = 10; prog2 = 0; prog3 = 0;
        allowance = 0;
        balance = 10;

        _object = {
            conPeriodosDescansosItsCollective: [{
                quantidadeDiasDescansoRea: 0,
                quantidadeDiasDescansoProg: 20    
            }]
        };

        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })
})

describe('-- with allowance', () => {
    test('04 - with allowanceDays - should return at least 1 period of 14 days - prog: 13 7 0', () => {
        prog1 = 13; prog2 = 7; prog3 = 10;
        allowance = 10;
        balance = 20;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_14_DIAS);
    })

    test('05 - with allowanceDays - should return period lower than 5 days - prog: 16 4 0', () => {
        prog1 = 16; prog2 = 4; prog3 = 0;
        allowance = 10;
        balance = 20;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_PERIODO_INFERIOR_5_DIAS);
    })

    test('06 - with allowanceDays - should return valid - prog: 14 6 0', () => {
        prog1 = 14; prog2 = 6; prog3 = 0;
        allowance = 10;
        balance = 20;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })

    test('07 - with allowanceDays - should return valid - prog: 15 5 0', () => {
        prog1 = 15; prog2 = 5; prog3 = 0;
        allowance = 10;
        balance = 20;
            
        expect(validate(_object, prog1, prog2, prog3, balance, allowance))
            .toEqual(MSG_VALIDATED);
    })
})