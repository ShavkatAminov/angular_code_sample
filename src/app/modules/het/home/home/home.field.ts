import {IInfoCard} from "@app/modules/het/home/components/info-card/info-card.component";
import {IChartInfo} from "@app/modules/het/home/charts/chart-infomation/chart-information.component";

export class HomeField {
    generateArrayNumberField(data) {
        const averageNumber = Math.floor(data / 12)
        const result = []
        for (let i = 0; i < 12; i++) {
            result.push(averageNumber)
        }
        for (let j = 0; j < 12; j++) {
            const randomIndex = Math.floor(Math.random() * 12)
            result[j] = result[j] + (result[randomIndex] - Math.floor(averageNumber * 0.60))
            result[randomIndex] = Math.floor(averageNumber * 0.60)

        }
        return result
    }

    cardInfo: IInfoCard[] = [
        {
            title: "Общее количество потребителей",
            image: 'assets/icons/dashboard-statistics-line.svg',
            amount: 7534471,
            field: 'consumerQuantity'
        },
        {
            title: "Общее количество потребителей подключенных к АСКУЭ",
            image: 'assets/icons/dashboard-statistics-bar.svg',
            field: "consumerConnectedASCUE",
            amount: 6941189
        },
        {
            title: "Общее количество опросов потребителей",
            image: 'assets/icons/dashboard-statistics-double-line.svg',
            field: "quantityPoll",
            amount: 6927460
        }
    ]
    barChartOffmeterInfo: IChartInfo[] = [
        {
            title: "Кол-во отключенных",
            amount: 61531,
            text: "Кол-во потребителей по Рес",
            field: 'consumerQuantity'
        },
        {
            title: "Сумма отключенных",
            amount: 65843,
            currency: "UZS",
            text: "не оплаченных потребителей по Рес.",
            field: 'unpayedMoney'
        },

    ]
    barChartOnmeterInfo: IChartInfo[] = [
        {
            title: "Кол-во включенных",
            amount: 61531,
            text: "Кол-во потребителей по Рес",
            field: 'consumerQuantity'
        },
        {
            title: "Сумма включенных",
            amount: 65843,
            currency: "UZS",
            text: "оплаченных потребителей по Рес.",
            field: 'payedMoney'
        },

    ]
    regionSelect = [
        {
            id: "karakalpak",
            name: "респ. Каракалпакстан"
        },
        {
            id: "andijan",
            name: "Андижан"
        },
        {
            id: "bukhara",
            name: "Бухара"
        },
        {
            id: "jizzax",
            name: "Джиззах"
        },
        {
            id: "kashkadarya",
            name: "Кашкадарья"
        },
        {
            id: "navoiy",
            name: "Навоий"
        },
        {
            id: "namangan",
            name: "Наманган"
        },
        {
            id: "samarqand",
            name: "Самарканд"
        },
        {
            id: "surxandaryo",
            name: "Сурхандарья"
        },
        {
            id: "sirdaryo",
            name: "Сырдарья"
        },
        {
            id: "tashkentRegion",
            name: "Ташкент обл"
        },
        {
            id: "fergana",
            name: "Фергана"
        },
        {
            id: "khorazm",
            name: "Хорезм"
        },
        {
            id: "tashkentCity",
            name: "Тошкент шахар"
        }
    ]
    regions = {
        "karakalpak": {
            meter: {
                meterPayed: {
                    onMeterConsumer: 3174,
                    payedMoney: 12795344900,
                },
                meterUnPayed: {
                    unpayedMoney: 2059480696,
                    offMeterConsumer: 3124,
                }
            },
            annualReport: {
                annualConsumerReport: 375793,
                annualConnectedConsumerASCUE: 367469,
                annualPoolReport: 368329
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 9995,
                payedMoneyASCUE: 40961098873,
            }


        },
        "andijan": {
            meter: {
                meterPayed: {
                    onMeterConsumer: 6524,
                    payedMoney: 44177501000,
                },
                meterUnPayed: {
                    unpayedMoney: 23023085487,
                    offMeterConsumer: 6211,
                }
            },
            annualReport: {
                annualConsumerReport: 661644,
                annualConnectedConsumerASCUE: 565341,
                annualPoolReport: 556129
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 16162,
                payedMoneyASCUE: 106408857775,
            }


        },
        "bukhara": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 3786,
                    unpayedMoney: 4936300333,
                },
                meterPayed: {
                    onMeterConsumer: 3939,
                    payedMoney: 17809917400,
                }

            },
            annualReport: {
                annualConsumerReport: 434076,
                annualConnectedConsumerASCUE: 411878,
                annualPoolReport: 412033
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 11567,
                payedMoneyASCUE: 54375750874,
            }


        },
        "jizzax": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 1785,
                    unpayedMoney: 2719931149,
                },
                meterPayed: {
                    onMeterConsumer: 1834,
                    payedMoney: 8483145800,
                }

            },
            annualReport: {
                annualConsumerReport: 271587,
                annualConnectedConsumerASCUE: 250219,
                annualPoolReport: 250350
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 5738,
                payedMoneyASCUE: 29876005691,
            }
        },
        "kashkadarya": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 3962,
                    unpayedMoney: 35847173200,
                },
                meterPayed: {
                    onMeterConsumer: 4015,
                    payedMoney: 25257557352
                }

            },
            annualReport: {
                annualConsumerReport: 694596,
                annualConnectedConsumerASCUE: 630619,
                annualPoolReport: 633364
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 14387,
                payedMoneyASCUE: 73512341399,

            }
        },
        "navoiy": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 2082,
                    unpayedMoney: 5515837326,
                },
                meterPayed: {
                    onMeterConsumer: 2330,
                    payedMoney: 10655246567
                }

            },
            annualReport: {
                annualConsumerReport: 247016,
                annualConnectedConsumerASCUE: 237108,
                annualPoolReport: 238105
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 5647,
                payedMoneyASCUE: 28166604067,

            }
        },
        "namangan": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 7194,
                    unpayedMoney: 30243222850,
                },
                meterPayed: {
                    onMeterConsumer: 7710,
                    payedMoney: 37599912585
                }

            },
            annualReport: {
                annualConsumerReport: 600449,
                annualConnectedConsumerASCUE: 573803,
                annualPoolReport: 575454
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 18323,
                payedMoneyASCUE: 108446588765,

            }
        },
        "samarqand": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 6871,
                    unpayedMoney: 121303335277
                },
                meterPayed: {
                    onMeterConsumer: 6185,
                    payedMoney: 40504339600
                }

            },
            annualReport: {
                annualConsumerReport: 860959,
                annualConnectedConsumerASCUE: 757727,
                annualPoolReport: 757356
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 18103,
                payedMoneyASCUE: 115631958827,

            }
        },
        "surxandaryo": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 3410,
                    unpayedMoney: 490390358297
                },
                meterPayed: {
                    onMeterConsumer: 3521,
                    payedMoney: 15605934000
                }

            },
            annualReport: {
                annualConsumerReport: 524686,
                annualConnectedConsumerASCUE: 489126,
                annualPoolReport: 490081
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 10457,
                payedMoneyASCUE: 46625755600,

            }
        },
        "sirdaryo": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 1973,
                    unpayedMoney: 11015111747
                },
                meterPayed: {
                    onMeterConsumer: 1918,
                    payedMoney: 9254407800
                }

            },
            annualReport: {
                annualConsumerReport: 181347,
                annualConnectedConsumerASCUE: 172115,
                annualPoolReport: 180449
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 5107,
                payedMoneyASCUE: 24107378393

            }
        },
        "tashkentRegion": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 5635,
                    unpayedMoney: 36750047708
                },
                meterPayed: {
                    onMeterConsumer: 6198,
                    payedMoney: 35425878300
                }

            },
            annualReport: {
                annualConsumerReport: 731248,
                annualConnectedConsumerASCUE: 662505,
                annualPoolReport: 665310
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 16743,
                payedMoneyASCUE: 110945595830

            }
        },
        "fergana": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 8126,
                    unpayedMoney: 37413076657
                },
                meterPayed: {
                    onMeterConsumer: 10686,
                    payedMoney: 52228004300
                }

            },
            annualReport: {
                annualConsumerReport: 836357,
                annualConnectedConsumerASCUE: 757536,
                annualPoolReport: 757900
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 20332,
                payedMoneyASCUE: 140265281268

            }
        },
        "khorazm": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 3384,
                    unpayedMoney: 11113878471
                },
                meterPayed: {
                    onMeterConsumer: 3636,
                    payedMoney: 20928380800
                }

            },
            annualReport: {
                annualConsumerReport: 397018,
                annualConnectedConsumerASCUE: 381803,
                annualPoolReport: 381834
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 10585,
                payedMoneyASCUE: 62296837600

            }
        },
        "tashkentCity": {
            meter: {
                meterUnPayed: {
                    offMeterConsumer: 3988,
                    unpayedMoney: 6037545799

                },
                meterPayed: {
                    onMeterConsumer: 4173,
                    payedMoney: 27334506100
                }

            },
            annualReport: {
                annualConsumerReport: 717695,
                annualConnectedConsumerASCUE: 683940,
                annualPoolReport: 660766
            },
            connectedPaymentASCUE: {
                quantityASCUEConsumer: 15814,
                payedMoneyASCUE: 107874693284

            }
        },

    }
    paymentInfoCardData = [
        {
            title: 'Paynet',
            consumerCount: '94 292',
            amountPay: '5 335 593 282',
            percent: '9.94%',
            status: 'up'
        },
        {
            title: 'Почта',
            consumerCount: '83 292',
            amountPay: '4 485 593 282',
            percent: '7.63%',
            status: 'up'
        },
        {
            title: 'UPAY',
            consumerCount: '78 292',
            amountPay: '3 935 593 282',
            percent: '5.28%',
            status: 'down'
        },
        {
            title: 'Paycom',
            consumerCount: '69 292',
            amountPay: '2 335 593 282',
            percent: '6.92%',
            status: 'up'
        },
        {
            title: 'Payme',
            consumerCount: '65 292',
            amountPay: '1 935 593 282',
            percent: '4.84%',
            status: 'down'
        },
        {
            title: 'Click Up',
            consumerCount: '62 292',
            amountPay: '1 884 593 282',
            percent: '3.96%',
            status: 'up'
        },
        {
            title: 'Uzum Bank',
            consumerCount: '58 992',
            amountPay: '1 126 593 282',
            percent: '7.74%',
            status: 'down'
        },
        {
            title: 'Anorbank',
            consumerCount: '47 292',
            amountPay: '435 593 282',
            percent: '7.95%',
            status: 'down'
        },
        {
            title: 'Zoomrad',
            consumerCount: '42 292',
            amountPay: '335 593 282',
            percent: '2.54%',
            status: 'up'
        },
        {
            title: 'Kapitalbank',
            consumerCount: '39 292',
            amountPay: '235 593 282',
            percent: '1.14%',
            status: 'up'
        },
        {
            title: 'TBC UZ',
            consumerCount: '39 292',
            amountPay: '175 593 282',
            percent: '3.43%',
            status: 'down'
        },
        {
            title: 'Beepul',
            consumerCount: '28 292',
            amountPay: '114 593 282',
            percent: '5.44%',
            status: 'up'
        },
        {
            title: 'Quant',
            consumerCount: '22 292',
            amountPay: '72 593 282',
            percent: '9.99%',
            status: 'down'
        },
        {
            title: 'Xalq-Mobile',
            consumerCount: '17 292',
            amountPay: '64 593 282',
            percent: '6.14%',
            status: 'down'
        },
        {
            title: 'InfinBANK',
            consumerCount: '15 292',
            amountPay: '24 593 282',
            percent: '3.54%',
            status: 'down'
        },
        {
            title: 'RBK-mobile',
            consumerCount: '11 292',
            amountPay: '18 593 282',
            percent: '4.84%',
            status: 'down'
        },
    ]
    mapMiniCard = [
        {
            label: 'Каракалпак РЕС',
            value: '523 408'
        },
        {
            label: 'Андижан РЕС',
            value: '523 408'
        },
        {
            label: 'Бухара РЕС',
            value: '235 408'
        },
        {
            label: 'Джиззах РЕС',
            value: '235 408'
        },
        {
            label: 'Ташкент РЕС',
            value: '963 408'
        },
        {
            label: 'Хоразм РЕС',
            value: '783 408'
        },
        {
            label: 'Наманган РЕС',
            value: '153 408'
        },
        {
            label: 'Самарканд РЕС',
            value: '153 408'
        },
        {
            label: 'Сурхандарья РЕС',
            value: '153 408'
        },
        {
            label: 'Сырхандарья РЕС',
            value: '153 408'
        },
        {
            label: 'Новоий РЕС',
            value: '153 408'
        },
        {
            label: 'Ташкент. обл РЕС',
            value: '153 408'
        },
        {
            label: 'Фергана РЕС',
            value: '153 408'
        },
        {
            label: 'Кашкадарья РЕС',
            value: '153 408'
        }
    ]


}