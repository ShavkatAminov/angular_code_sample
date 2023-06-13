

export function getTranslatedMonth(month) {
    switch (month) {
        case 0:
            return 'ACCOUNTING_SETTLEMENT_HC.JANUARY';
        case 1:
            return 'ACCOUNTING_SETTLEMENT_HC.FEBRUARY';
        case 2:
            return 'ACCOUNTING_SETTLEMENT_HC.MARCH';
        case 3:
            return 'ACCOUNTING_SETTLEMENT_HC.APRIL';
        case 4:
            return 'ACCOUNTING_SETTLEMENT_HC.MAY';
        case 5:
            return 'ACCOUNTING_SETTLEMENT_HC.JUNE';
        case 6:
            return 'ACCOUNTING_SETTLEMENT_HC.JULY';
        case 7:
            return 'ACCOUNTING_SETTLEMENT_HC.AUGUST';
        case 8:
            return 'ACCOUNTING_SETTLEMENT_HC.SEPTEMBER';
        case 9:
            return 'ACCOUNTING_SETTLEMENT_HC.OCTOBER';
        case 10:
            return 'ACCOUNTING_SETTLEMENT_HC.NOVEMBER';
        case 11:
            return 'ACCOUNTING_SETTLEMENT_HC.DECEMBER';
        default:
            return 'ACCOUNTING_SETTLEMENT_HC.INVALID_MONTH';
    }
}