import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {HomeField} from "@app/modules/het/home/home/home.field";
import {ModalComponent, SizeModal} from "@shared/helpers/modal/modal.component";
import {HomeMapComponent} from "@app/modules/het/home/components/home.map/home.map.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends HomeField implements OnInit, OnDestroy {

    @ViewChild('group1') div1: ElementRef;
    @ViewChild('group2') div2: ElementRef;
    @ViewChild('group3') div3: ElementRef;
    @ViewChild('cardGroup1') cardGroup1: ElementRef;
    @ViewChild('cardGroup2') cardGroup2: ElementRef;
    @ViewChild('cardGroup3') cardGroup3: ElementRef;

    data: any;
    activePayed: string = "consumerQuantity"
    activeUnPayed: string = "consumerQuantity"
    activeAnnualReport: string = "consumerQuantity"
    activeASCUE: string = 'consumerQuantity'

    setActivePayedChart(text: string) {
        this.activePayed = text
    }

    setActiveUnPayedChart(text: string) {
        this.activeUnPayed = text
    }

    setAnnualReport(text) {
        this.activeAnnualReport = text
    }

    setConnectedPaymentASCUE(text: string) {
        this.activeASCUE = text
    }

    setRegionData(data) {
        this.offMeterConsumer.unpayedMoney = this.generateArrayNumberField(this.regions[data].meter.meterUnPayed.unpayedMoney)
        this.offMeterConsumer.consumerQuantity = this.generateArrayNumberField(this.regions[data].meter.meterUnPayed.offMeterConsumer)
        this.onMeterConsumer.payedMoney = this.generateArrayNumberField(this.regions[data].meter.meterPayed.payedMoney)
        this.onMeterConsumer.consumerQuantity = this.generateArrayNumberField(this.regions[data].meter.meterPayed.onMeterConsumer)
        this.connectedPaymentASCUE.payedMoney = this.generateArrayNumberField(this.regions[data].connectedPaymentASCUE.payedMoneyASCUE)
        this.connectedPaymentASCUE.consumerQuantity = this.generateArrayNumberField(this.regions[data].connectedPaymentASCUE.quantityASCUEConsumer)
        this.annualReportData.consumerQuantity = this.generateArrayNumberField(this.regions[data].annualReport.annualConsumerReport)
        this.annualReportData.consumerConnectedASCUE = this.generateArrayNumberField(this.regions[data].annualReport.annualConnectedConsumerASCUE)
        this.annualReportData.quantityPoll = this.generateArrayNumberField(this.regions[data].annualReport.annualPoolReport)

        this.cardInfo[0].amount = this.annualReportData.consumerQuantity.reduce((acc, curr) => acc + curr, 0)
        this.cardInfo[1].amount = this.annualReportData.consumerConnectedASCUE.reduce((acc, curr) => acc + curr, 0)
        this.cardInfo[2].amount = this.annualReportData.quantityPoll.reduce((acc, curr) => acc + curr, 0)
        this.barChartOffmeterInfo[0].amount = this.offMeterConsumer.consumerQuantity.reduce((acc, curr) => acc + curr, 0)
        this.barChartOffmeterInfo[1].amount = this.offMeterConsumer.unpayedMoney.reduce((acc, curr) => acc + curr, 0)
        this.barChartOnmeterInfo[0].amount = this.onMeterConsumer.consumerQuantity.reduce((acc, curr) => acc + curr, 0)
        this.barChartOnmeterInfo[1].amount = this.onMeterConsumer.payedMoney.reduce((acc, curr) => acc + curr, 0)
    }

    ngOnInit(): void {
        this.setRegionData("bukhara");
        setInterval(() => {
            this.toggleDivs();
            this.toggleCards();
        }, 3000);
    }

    toggleDivs() {
        if (this.div1.nativeElement.classList.contains('visible')) {
            this.div1.nativeElement.classList.remove('visible');
            this.div1.nativeElement.classList.add('hidden');
            this.div2.nativeElement.classList.remove('hidden');
            this.div2.nativeElement.classList.add('visible');
        } else if (this.div2.nativeElement.classList.contains('visible')) {
            this.div2.nativeElement.classList.remove('visible');
            this.div2.nativeElement.classList.add('hidden');
            this.div3.nativeElement.classList.remove('hidden');
            this.div3.nativeElement.classList.add('visible');
        } else {
            this.div3.nativeElement.classList.remove('visible');
            this.div3.nativeElement.classList.add('hidden');
            this.div1.nativeElement.classList.remove('hidden');
            this.div1.nativeElement.classList.add('visible');
        }
    }
    toggleCards() {
        if (this.cardGroup1.nativeElement.classList.contains('visible')) {
            this.cardGroup1.nativeElement.classList.remove('visible');
            this.cardGroup1.nativeElement.classList.add('hidden');
            this.cardGroup2.nativeElement.classList.remove('hidden');
            this.cardGroup2.nativeElement.classList.add('visible');
        } else if (this.cardGroup2.nativeElement.classList.contains('visible')) {
            this.cardGroup2.nativeElement.classList.remove('visible');
            this.cardGroup2.nativeElement.classList.add('hidden');
            this.cardGroup3.nativeElement.classList.remove('hidden');
            this.cardGroup3.nativeElement.classList.add('visible');
        } else {
            this.cardGroup3.nativeElement.classList.remove('visible');
            this.cardGroup3.nativeElement.classList.add('hidden');
            this.cardGroup1.nativeElement.classList.remove('hidden');
            this.cardGroup1.nativeElement.classList.add('visible');
        }
    }

    offMeterConsumer = {
        consumerQuantity: [],
        unpayedMoney: []
    }

    onMeterConsumer = {
        consumerQuantity: [],
        payedMoney: []
    }

    connectedPaymentASCUE = {
        consumerQuantity: [],
        payedMoney: []
    }

    annualReportData = {
        consumerQuantity: [],
        consumerConnectedASCUE: [],
        quantityPoll: []

    }


    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _router: Router
    ) {
        super()
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */


    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    openMap(){
        ModalComponent.showModal(HomeMapComponent, "HOME.MAP", null, SizeModal.fs)
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fix the SVG fill references. This fix must be applied to all ApexCharts
     * charts in order to fix 'black color on gradient fills on certain browsers'
     * issue caused by the '<base>' tag.
     *
     * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
     *
     * @param element
     * @private
     */
    private _fixSvgFill(element: Element): void {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
            .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
            .forEach((el) => {
                const attrVal = el.getAttribute('fill');
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

}
