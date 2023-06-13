import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {BasicTablePage} from "@shared/helpers/table/basic/basic.table.page";
import {ReferenceListRequest} from "@app/modules/reference/basic/ReferenceListRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {translate} from "@ngneat/transloco";

@Component({
    selector: 'app-number.of.consumers.component',
    templateUrl: './number.of.consumers.component.html',
    styleUrls: ['./number.of.consumers.component.scss']
})
export class NumberOfConsumersComponent extends BasicTablePage {

    monthNames = [
        translate('ACCOUNTING_SETTLEMENT_HC.JANUARY'), translate('ACCOUNTING_SETTLEMENT_HC.FEBRUARY'),
        translate('ACCOUNTING_SETTLEMENT_HC.MARCH'), translate('ACCOUNTING_SETTLEMENT_HC.APRIL'),
        translate('ACCOUNTING_SETTLEMENT_HC.MAY'), translate('ACCOUNTING_SETTLEMENT_HC.JUNE'),
        translate('ACCOUNTING_SETTLEMENT_HC.JULY'), translate('ACCOUNTING_SETTLEMENT_HC.AUGUST'),
        translate('ACCOUNTING_SETTLEMENT_HC.SEPTEMBER'), translate('ACCOUNTING_SETTLEMENT_HC.OCTOBER'),
        translate('ACCOUNTING_SETTLEMENT_HC.NOVEMBER'), translate('ACCOUNTING_SETTLEMENT_HC.DECEMBER'),
    ];

    columnDefs: ColDef[] = [
        {
            field: 'code',
            flex: 7,
            headerName: 'GENERAL.CODE'
        },
        {
            field: 'nameUz',
            flex: 12,
            headerName: 'GENERAL.NAME_COATO'
        },
        {
            field: 'periodHouseholdConsumer',
            headerName: 'Период быт.',
            cellRenderer: (data) => {
                if (data.value) {
                    return this.monthNames[(new Date(data.value)).getMonth()] + ' ' + (new Date(data.value)).getFullYear();
                }
                return '';
            }
        },
        {
            field: 'amountOfHouseholdConsumer',
            flex: 10,
            headerName: 'Количество бытовых потребителей'
        },
        {
            field: 'amountOfHouseholdConsumerMeterType',
            flex: 10,
            headerName: 'Количество типов счетчиков быт.'
        },
        {
            field: 'periodLegalConsumer',
            headerName: 'Период юр.',
            cellRenderer: (data) => {
                if (data.value) {
                    return this.monthNames[(new Date(data.value)).getMonth()] + ' ' + (new Date(data.value)).getFullYear();
                }
                return '';
            }
        },
        {
            field: 'amountOfLegalConsumer',
            flex: 10,
            headerName: 'Количество юридических потребителей'
        },
        {
            field: 'amountOfLegalConsumerMeterType',
            flex: 10,
            headerName: 'Количество типов счетчиков юр.'
        },
        {
            field: 'status',
            type: 'status',
            flex: 7,
            headerName: 'GENERAL.STATUS'
        },
    ];

    title='REFERENCE.COATO';
    request = new ReferenceListRequest(ReferenceApiUrls.NUMBER_OF_CONSUMERS);
}
