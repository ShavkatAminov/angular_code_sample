import {FuseNavigationItem} from "../../../../@fuse/components/navigation";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";
import {AccountingSettlementHCApiUrls} from "@app/modules/accounting-settlement-hc/accountingSettlementHCApiUrls";
import {UserManagementApiUrls} from "@app/modules/user-management/userManagementApiUrls";
import {AccountingSettlementLCApiUrls} from "@app/modules/accounting-settlement-lc/accountingSettlementLCApiUrls";
import {MessageSenderApiUrls} from "@app/modules/message-sender/messageSenderApiUrls";


export const mainMenuItems: FuseNavigationItem[] = [
    {
        id      : 'admin',
        title   : 'MENU.ADMINISTRATION.NAME',
        type    : 'collapsable',
        children: [
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.ROLE_MANAGEMENT.NAME",
                link: '/user-management/'+ UserManagementApiUrls.ROLES,
            },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.USER_MANAGEMENT.NAME",
            //     children: [
            //     ]
            // },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.USER_MANAGEMENT.NAME",
                link: '/user-management/'+ UserManagementApiUrls.USER,
            },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.SYSTEM_SETUP.NAME",
                link: '/user-management/'+ UserManagementApiUrls.SYSTEM_SETTING,
            },
            {
                type: 'collapsable',
                title: "MENU.ADMINISTRATION.ENSURING_INFORMATION_SAFETY.NAME",
                children: [
                    {
                        type: 'basic',
                        title: "MENU.ADMINISTRATION.DOMAIN_REGISTRATION.NAME",
                        link: '/user-management/'+ UserManagementApiUrls.DOMAINS,
                    },
                    {
                        type: 'basic',
                        title: "MENU.ADMINISTRATION.COMPUTER_REGISTER.NAME",
                        link: '/user-management/'+ UserManagementApiUrls.COMPUTERS,
                    },
                    {
                        type: 'collapsable',
                        title: "MENU.ADMINISTRATION.ASSIGNING.NAME",
                        children:[
                            {
                                type: 'basic',
                                title: "MENU.ADMINISTRATION.ASSIGNING_USER.NAME",
                                link: '/user-management/'+ UserManagementApiUrls.PIN_USER
                            },
                            {
                                type: 'basic',
                                title: "MENU.ADMINISTRATION.ASSIGNING_TERMINAL.NAME",
                                link: '/user-management/'+ UserManagementApiUrls.PIN_TERMINAL,
                            },

                        ]
                    },
                ]
            },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.SETTING_COMPANY_DETAILS.NAME",
            //     children: [
            //     ]
            // },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.MAINTAINING_PERSONAL_PASSWORDS.NAME",
            //     children: [
            //     ]
            // },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.MESSAGE_MANAGEMENT.NAME",
                link: '/user-management/'+ UserManagementApiUrls.ANNOUNCEMENT_MESSAGES,
            },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.ACCESS_TO_PARAMETERS.NAME",
            //     children: [
            //     ]
            // },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.SETTLEMENT_PERIOD.NAME",
                link: '/user-management/'  + UserManagementApiUrls.LEGAL_BILLING_PERIOD,
                children: [
                ]
            },
            {

                title: "MENU.ADMINISTRATION.BILLING_PERIOD.NAME",
                type: 'basic',
                link: '/user-management/'  + UserManagementApiUrls.HOUSEHOLD_BILLING_PERIOD,
                children: [
                ]
            },

            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.SYSTEM_SETUP.NAME",
            //     children: [
            //     ]
            // },

            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.SYSTEM_SETUP_ACCORDING_SOATO.NAME",
                link: '/user-management/'+ UserManagementApiUrls.COATO_BRANCH_CONFIGURATIONS,
            },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.EDS_FOR_HET.NAME",
                link: '/user-management/'  + UserManagementApiUrls.EDS_FOR_HET,
            },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.ASSIGNING_DVS_KEYS_USERS.NAME",
                link: '/user-management/'  + UserManagementApiUrls.DVS_KEYS,
            },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.ALLOW_ACCRUAL.NAME",
            //     children: [
            //     ]
            // },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.FIXING_BANK_ACCOUNTS.NAME",
                link: '/user-management/'  + UserManagementApiUrls.LEGAL_BANK_ACCOUNT_FIXINGS,
            },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.SMS_PROVIDER_ACCOUNTS_REGION.NAME",
                link: '/user-management/'  + MessageSenderApiUrls.GATEWAY_PROVIDER_ACCOUNT,
            },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.EDIT_SMS_MESSAGES.NAME",
                link: '/user-management/'  + MessageSenderApiUrls.SMS_MESSAGE_TEMPLATE,
            },
            {
                title: "MENU.ADMINISTRATION.SETTING_PAYMENT_SYSTEMS.NAME",
                type: 'basic',
                link: '/user-management/'+ UserManagementApiUrls.SETTING_PAYMENT_SYSTEM,
            },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.SETTING_EDS_FOR_RES.NAME",
            //     children: [
            //     ]
            // },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.BANK_DETAILS.NAME",
                link: '/user-management/'  + UserManagementApiUrls.BANK_DETAIL_ALL,
                children: [
                ]
            },
            // {
            //     type: 'collapsable',
            //     title: "MENU.ADMINISTRATION.PRINTING_BANK_DETAILS.NAME",
            //     children: [
            //     ]
            // },
            {
                type: 'basic',
                title: "MENU.ADMINISTRATION.ERROR_CODES_SMS_RESPONSE.NAME",
                link: '/user-management/'  + UserManagementApiUrls.SMS_RESPONSE_ERROR,
            },

        ],
    },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.MANAGER_MENU.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    {
        id      : 'reference',
        title   : 'MENU.REFERENCE.NAME',
        type    : 'collapsable',
        children: [
            {
                type: 'collapsable',
                title: "MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.NAME",
                children: [
                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.CLASSIFIER_OF_BRANCHES_OF_THE_NATIONAL_ECONOMY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.NATIONAL_ECONOMY_BRANCH,
                    },
                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.CLASSIFIER_TYPES_ECONOMIC',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ECONOMIC_ACTIVITY_TYPE,
                    },
                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.OWNERSHIP_CLASSIFIER',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.OWNERSHIP_CLASSIFIER,
                    },
                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.LEGAL_FORM_CLASSIFIERS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.LEGAL_FORM_CLASSIFIERS,
                    },

                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.STATE_GOVERNMENT_ORGANIZATIONS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS,
                    },

                    // {
                    //     title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.COATO_LOCATION_DIRECTORY',
                    //     type: 'basic',
                    //     link: '',
                    // },

                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.SUBGROUP_OF_GOVERNMENT_ORGANIZATIONS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.SUBGROUP_GOVERNMENT_ORGANIZATIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.TREASURY_ORGANIZATIONAL',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TREASURY_ORGANIZATIONAL,
                    },
                    {
                        title: 'MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.DIRECTORY_OF_COMPLEXES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.STATE_COMPLEX,
                    },


                ]
            },
            {
                type: 'collapsable',
                title: "MENU.REFERENCE.GENERAL_GUIDES.NAME",
                children: [
                    // {
                    //     title: 'MENU.REFERENCE.GENERAL_GUIDES.ESP_CODE_REFERENCE',
                    //     type: 'basic',
                    //     link: '',
                    // },
                    {
                        title: 'ACCOUNTING_SETTLEMENT_HC.CONSUMER_AMOUNT',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.NUMBER_OF_CONSUMERS,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_POSITIONS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.MANAGMENT_POSITIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.CONSUMPTION_GROUP_GUIDE_BY_CODES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.CONSUMPTION_GROUPS,
                    },

                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.MANAGERS,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_LEVELS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.MANAGEMENT_LEVELS,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.MANAGEMENT_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.MANAGEMENT_TYPES,
                    },

                    // {
                    //     title: 'MENU.REFERENCE.GENERAL_GUIDES.ENTERPRISE_GROUPS_BY_PAYMENT_TYPES',
                    //     type: 'basic',
                    //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
                    // },
                    // {
                    //     title: 'MENU.REFERENCE.GENERAL_GUIDES.WORK_PLACES',
                    //     type: 'basic',
                    //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
                    // },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.METER_STATE_REFERENCE',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.METER_STATE,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.BUSINESS_ACTIVITY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.BUSINESS_ACTIVITY,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.ORGANIZATIONS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ORGANIZATIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.NEW_PERSONAL_ACCOUNT_RANGE',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.NEW_PERSONAL_ACCOUNT_RANGE,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_COATO',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.COATO_BRANCHES,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.REGIONS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.REGIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DISTRICTS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.DISTRICTS,
                    },

                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_LANGUAGE',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.LANGUAGES,
                    },

                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_OF_HOUSING_CATEGORIES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.HOUSING_CATEGORY,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_OF_HOUSING_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.HOUSING_TYPE,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_PAYMENT_SYSTEMS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.PAYMENT_SYSTEM,
                    },

                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_ENTERPRISE_GROUP_BY_TYPES_OF_PAYMENTS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ENTERPRISE_BY_PAYMENT_TYPES,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.WORK_PLACES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.WORK_PLACE,
                    },
                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.UTILITIES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.UTILITIES,
                    },

                    {
                        title: 'MENU.REFERENCE.GENERAL_GUIDES.DIRECTORY_PS_FEEDER_TP',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.PS_FIDER_TP,
                    },
                ]
            },
            {
                type: 'collapsable',
                title: "MENU.REFERENCE.STRUCTURAL_GUIDES.NAME",
                children: [
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.BRIGADES_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.BRIGADES,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_BOOKS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.BOOKS,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.AGENTS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.AGENT,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.POST_OFFICE_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.POST_OFFICES,
                    },


                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.STREETS_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.STREETS_DIRECTORY,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_HABITATION_DIVISIONS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.HABITATION_DIVISIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_ORGANIZATIONS_ACCEPTING_PAYMENTS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.RECEIVER_ORGANIZATIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.TCHSJ',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.AOPH,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.ARBITRATION',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ARBITRATIONS,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.ORC_AGENTS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ORC_AGENT
                    },


                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.DIRECTORY_OF_COUNTERS_INSTALLED_ON_THE_PARTITION_BOUNDARY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.INTERFACE_INSTALLED_METER,
                    },
                    {
                        title: 'MENU.REFERENCE.STRUCTURAL_GUIDES.SENDER_ORGANIZATION_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.SENDER_ORGANIZATION_TYPES,
                    },
                    {
                        title: 'REFERENCE.CONSUMER_TYPE',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.CONSUMER_TYPE,
                    },
                ]
            },
            {
                type: 'collapsable',
                title: "MENU.REFERENCE.TECHNICAL_GUIDES.NAME",
                children: [
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_TRANSFORMER_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TRANSFORMER_TYPES,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_COUNTER_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.METER_TYPE,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.MATERIALS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.MATERIALS,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.SUBSTATION_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.SUBSTATION,
                    },


                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.REFERENCE_BOOK_OF_REACTIVE_E/E_RATIOS_AT_CONSTANT_AK',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.REACTIVE_ACTIVE,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.HANDBOOK_FOR_ASSESSING_THE_LEVEL_OF_ELECTRICITY_LOSSES_IN_NETWORKS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.LEVELS_OF_ELECTRICITY_LOSES,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_STANDARD_VALUES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.STANDARD_VALUES,
                    },

                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.DIRECTORY_OF_ASKUE_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ASKUE_TYPES,
                    },

                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.ASKUE_BINDING_ACCORDING_TO_COATO',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.COATO_ASKUE_BINDING,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.PROVIDER_TYPES_REFERENCE',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.PROVIDER_TYPE,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.OPERATOR_TYPE_BINDING',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.OPERATOR_TYPE_BINDINGS,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.METER_MANUFACTURERS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.METER_MANUFACTURER,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.ERROR_CODES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ERROR_CODE,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.CONSUMER_STATES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.CONSUMER_STATES,
                    },
                    {
                        title: 'MENU.REFERENCE.TECHNICAL_GUIDES.LEGAL_REPORT_STATUSES',
                        type: 'basic',
                        link: '/reference/' + AccountingSettlementLCApiUrls.LEGAL_REPORT_STATUSES,
                    },

                ]
            },
            {
                type: 'collapsable',
                title: "MENU.REFERENCE.ACCOUNTING_HANDBOOKS.NAME",
                children: [
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.PAYMENT_PURPOSES',
                        type: 'basic',
                        link: '/reference/'  + ReferenceApiUrls.PAYMENT_PURPOSES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_BANKS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.BANKS,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_MFIS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.BANK_MFOS,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TARIFF_GROUP_DIRECTOR',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TARIFF_GROUP,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TARIFFS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TARIFFS,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TYPE_INDICATION',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.INDICATION_TYPES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_TYPES_OF_PAYMENT_DOCUMENTS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.PAYMENT_DOCUMENT_TYPE,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_CALCULATION_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.CALCULATION_TYPE,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.OUTAGE_CAUSE_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.OUTAGE_CAUSES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.ACCOUNT_DIRECTORY',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.ACCOUNT_DIRECTORY,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.DIRECTORY_OF_OPERATION_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.OPERATION_TYPES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CURRENCIES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.CURRENCIES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.EXCHANGE_RATE_GUID',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.EXCHANGE_RATES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.ENTERPRISES_EXCLUDED_FROM_DIFFERENTIATED_ACCOUNTING',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.EEFD,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.TIME_ZONES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TIMEZONES,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.COEFFICIENTS_TO_BASIC_TARIFFS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.BASIC_TARIFF_COEFFICIENTS,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.CONSUMPTION_VOLUMEK_WH',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.CONSUMPTION_VOLUME,
                    },
                    {
                        title: 'MENU.REFERENCE.ACCOUNTING_HANDBOOKS.FINE_PERCENTAGES',
                        type: 'basic',
                        link: '/reference/' + AccountingSettlementLCApiUrls.FINE_PERCENTAGES,
                    },
                ]
            },

            {
                type: 'collapsable',
                title: "MENU.REFERENCE.CB_HANDBOOKS.NAME",
                children: [
                    {
                        title: 'MENU.REFERENCE.CB_HANDBOOKS.NON_PAYMENT_CIPHERS',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
                    },
                    {
                        title: 'MENU.REFERENCE.CB_HANDBOOKS.ASSIGNMENT_OF_PAYMENT_FOR_UNPAID',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
                    },
                    {
                        title: 'MENU.REFERENCE.CB_HANDBOOKS.PAYMENT_TYPES',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
                    },
                    {
                        title: 'MENU.REFERENCE.CB_HANDBOOKS.PURPOSE_OF_PAYMENT',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
                    },
                    {
                        title: 'MENU.REFERENCE.CB_HANDBOOKS.INFORMATION_SYSTEM_ERROR_CODE',
                        type: 'basic',
                        link: '/reference/' + ReferenceApiUrls.INFORMATION_SYSTEMS_ERROR_CODES,
                    },
                ]
            },

        ],
    },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.CONTROL_ENTERPRISES_ACTIVITIES.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: [
    //         {
    //             title: 'MENU.CONTROL_ENTERPRISES_ACTIVITIES.HOUSEHOLD_CONSUMERS',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.CONTROL_ENTERPRISES_ACTIVITIES.LEGAL_CONSUMERS',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //     ]
    // },
    {
        id      : 'accounting-settlement-hc',
        title   : 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.NAME',
        type    : 'collapsable',
        children: [
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.MAINTENANCE_OF_THE_LIFE_CONTRACT',
                type: 'basic',
                link: '/accounting-settlement-hc/'+AccountingSettlementHCApiUrls.HOUSEHOLD_CONSUMER_CONTRACTS,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.CURRENT_METER_READING',
                type: 'collapsable',
                children:[
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_METER_READINGS',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_METER_READING,
                    },
                    // {
                    //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.VIEW_READINGS',
                    //     type: 'basic',
                    //     link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.VIEW_READINGS,
                    // }
                ]
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.PAYMENT_LIFE',
                type: 'collapsable',
                children: [
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_HOUSEHOLD_PAYMENTS',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_RECEIPT_PARCEL,
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.LEGAL_PAYMENT',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_FOUND_RECEIPT,
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.TRANSFER_PAYMENT_DOCUMENT',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.TRANSFER_PAYMENT_DOCUMENT,
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.VIEW_AND_APROVE_FOUND_RECEIPT',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.APPROVE_RECEIPT,
                    }
                ]
                ,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.SETTLEMENTS_AND_REVOLVING_CARD_LIFE',
                type: 'basic',
                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.SETTLEMENTS_AND_NEGOTIABLE_CARD,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.NAME',
                type: 'collapsable',
                children:[
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.NAME',
                        type: 'collapsable',
                        children: [
                                {
                                    title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.PER_INSTALLATION',
                                    type: 'basic',
                                    link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_CONSUMER_ORDER_METER_INSTALLATION,
                                },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.ON_TRIP',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.ON_INCLUSION',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.TO_TAKE_INDICATORS',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
                            {
                                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.TO_REPLACE_METER',
                                type: 'basic',
                                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.METER_REPLACEMENT_ATTIRE,
                            },
                            // {
                            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_CANCELLATION',
                            //     type: 'basic',
                            //     link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_ANNULMENT_ATTIRES,
                            // },
                            // {
                            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.CALL_FITTER',
                            //     type: 'basic',
                            //     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
                            // },
                            // {
                            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.CALL_FITTER',
                            //     type: 'basic',
                            //     link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_CALL_ELECTRIAN_ATTIRES,
                            // },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.CALL_FITTER',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_SEALING',
            //                     type: 'basic',
            //                     link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_INSTALL_STAMP_ATTIRE,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_SEALING',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_HELP',
            //                     type: 'basic',
            //                     link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.METER_REFERENCE_ATTIRE,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_CHECKING',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_HELP',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
            //                 {
            //                     title: 'ACCOUNTING_SETTLEMENT_LC.FOR_CHECKING',
            //                     type: 'basic',
            //                     link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_CHECKING_ATTIRE,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.INSTALLATION_(NEW)',
            //                     type: 'basic',
            //                     link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_METER,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.TO_REPLACE_COUNTER_(NEW)',
            //                     type: 'basic',
            //                     link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_METER,
            //                 },
            //                 {
            //                     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.INSTALLATION_(NEW)',
            //                     type: 'basic',
            //                     link: '/reference/' + AccountingSettlementHCApiUrls.TECHNICAL_WORK_UNDERWAY,
            //                 },
                        ]
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACT',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_ACT,
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.CONSUMER_STATEMENT',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.CONSUMER_STATEMENT,
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.HOUSEHOLD_READING_TASKS',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_READING_TASKS,
                    }
                ]
            },

            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.EANALYSIS_OF_PAYMENT_CALCULATIONS',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.FORMATION_OF_OPERATIONAL_REPORTING',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPORT_ON_DEMAND',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENUMERATION_WORK.NAME',
                type: 'collapsable',
                children:[
                        {
                            title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ACCEPTANCE_AND_ADJ_OF_PAYMENTS_BY_TRANSFER',
                            type: 'basic',
                            link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_BANK_TRANSFER_ORDERS,
                        },
                        {
                            title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENUMERATION_WORK.FIXING_PLACE_WORK',
                            type: 'basic',
                            link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.FIXING_PLACE_WORK,
                        },
                    {
                        title: 'ACCOUNTING_SETTLEMENT_HC.SEPARATION_FROM_WORK',
                        type: 'basic',
                        link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.SEPARATION_FROM_WORK,
                    },
                    ]
            },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.AGMK',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPLACEMENT_OF_CONSUMER_DETAILS',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPLACEMENT_OF_THE_CONTRACTUAL_VALUE',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },

            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.TRANSFER_OF_A_CONSUMER_FROM_A_REP_TO_A_REP',
                type: 'basic',
                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.TRANSFER_CONSUMER,
            },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.DATE_CORRECTION',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REVERSAL_BALANCE',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.RENTERING_BAD_AND_DOUBTFUL_SUMS_(GEN)',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.MAINTAINING_CONTRACTS_FROM_EPIGU_(BYT)',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            // {
            //     title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.STAGES_OF_CONNECTING_TO_THE_MAINS',
            //     type: 'basic',
            //     link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
            // },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPLACEMENT_OF_CONSUMER_DETAILS',
                type: 'basic',
                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.UPDATE_CONTRACT_VALUE,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPLACEMENT_OF_THE_CONTRCT_VALUE',
                type: 'basic',
                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_CONSUMER_CONTRACT_UPDATE_CONSUMPTION_MENU,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.CHANGE_METER_SERIAL_NUMBER',
                type: 'basic',
                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.HOUSEHOLD_CONSUMER_METERS_UPDATE_SERIAL,
            },

        ]
    },
    {
        id      : 'accounting-settlement-lc',
        title   : 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.NAME',
        type    : 'collapsable',
        children: [
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.CONTRACT',
                type    : 'collapsable',
                link: '/accounting-settlement-lc',
                children: [
                    {
                        title: 'ACCOUNTING_SETTLEMENT_LC.MAINTAINING_CONTRACTS',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+ AccountingSettlementLCApiUrls.LEGAL_CONSUMER_CONTRACT,
                    },
                    {
                        title: 'ACCOUNTING_SETTLEMENT_LC.VENUES',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+ AccountingSettlementLCApiUrls.LEGAL_FIELD +'/\\d+',
                        hidden: true,
                        disabled: true,
                    },
                    {
                        title: 'ACCOUNTING_SETTLEMENT_LC.METERS',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+ AccountingSettlementLCApiUrls.LEGAL_FIELD_ADD_METERS +'/\\d+',
                        hidden: true,
                        disabled: true,
                    },
                ]
            },

            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.LEGAL_PAYMENT',
                type: 'basic',
                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_PAYMENTS,
            },
            {
                title: 'MENU.ACCOUNTING_UNCERTAIN_AMOUNTS_SUM.name',
                type: 'basic',
                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_UNCERTAIN_AMOUNTS,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.SETTLEMENT_AND_REVOLVING_LEGAL_CARD',
                type: 'basic',
                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_CONSUMER_INVOICES,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.LEGAL_METER_READINGS',
                type: 'basic',
                link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_METER_FOR_READING,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPLACEMENT_OF_CONSUMER_DETAILS',
                type: 'basic',
                link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_CONSUMER_DETAILS,
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.INTERNAL_TRANSFER_OF_PAYMENT',
                type: 'collapsable',
                children: [
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_INTERNAL_DISPLACEMENT',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.ENTERING_INTERNAL_DISPLACEMENT,
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.REPORT_ON_TRANSFERRED_PAYMENTS',
                        type: 'basic',
                        link: '',
                    },
                ]
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.NAME',
                type: 'collapsable',
                children: [
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.ACT_VIOLATION',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_ACTS + "/violation",
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.ACT_RECALCULATION',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_ACTS + "/recalculation",
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.ACT_RECALCULATION_COS',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_ACTS + "/recalculate/cos",
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.ACT_FINE',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_ACTS + "/fine",
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.ACT_RECALCULATION_DEBT',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_ACTS + "/debt",
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.ACT_RECONNECTION',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_ACTS + "/reconnection",
                    },
                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ACTS.OTHER_ATTIRE',
                        type: 'basic',
                        link: '/accounting-settlement-lc/'+AccountingSettlementLCApiUrls.LEGAL_OTHER_ATTIRE,
                    },


                    {
                        title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.NAME',
                        type: 'collapsable',
                        children: [
                            {
                                title: 'ACCOUNTING_SETTLEMENT_LC.SWITCHING_ATTIRES',
                                type: 'basic',
                                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_SWITCHING_ATTIRES,
                            },
                            {
                                title: 'ACCOUNTING_SETTLEMENT_LC.TERMINATE_CONTRACT_ATTIRES',
                                type: 'basic',
                                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.TERMINATE_CONTRACT_ATTIRES,
                            },
                            {
                                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.PER_INSTALLATION',
                                type: 'basic',
                                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_METER_INSTALLATION_ATTIRES,
                            },
                            {
                                 title: 'ACCOUNTING_SETTLEMENT_LC.REPLACEMENT_ATTIRES',
                                 type: 'basic',
                                 link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_METER_REPLACING_ATTIRES,
                             },
                            {
                                 title: 'ACCOUNTING_SETTLEMENT_LC.OUTFIT_REPLACEMENT_COEFFICIENT_TRANSFORMATION',
                                 type: 'basic',
                                 link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_REPLACEMENT_TRANSFORMATION_COEFFICIENT_ATTIRE,
                             },
                            {
                                 title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.ENTERING_AND_PRINTING_OPERATIONAL_INFORMATION.ORDERS.FOR_SEALING',
                                 type: 'basic',
                                 link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_STAMP_ATTIRES,
                             },
                        ]
                    }
                ]
            },
            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_LEGAL_CONSUMERS.VIEW_TRANSLATED_CONSUMERS',
                type: 'basic',
                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_CONSUMER_TRANSFER,
            },

            {
                title: 'MENU.ACCOUNTING_SETTLEMENT_HOUSEHOLD_CONSUMERS.TRANSFER_OF_A_CONSUMER_FROM_A_REP_TO_A_REP',
                type: 'basic',
                link: '/accounting-settlement-lc/' + AccountingSettlementLCApiUrls.LEGAL_CONSUMER_TRANSFER_RESP_TO_RESP,
            },

            ]
    },
    {
        id: 'dashboards',
        title: 'MENU.ACCOUNTING_MOVEMENT_TECHNICAL_MEANS.NAME',
        type: 'collapsable',
        children: [
            {
                title: 'MENU.ACCOUNTING_MOVEMENT_TECHNICAL_MEANS.WAREHOUSE_COUNTERS',
                type: 'basic',
                link: '/accounting-settlement-hc/' + AccountingSettlementHCApiUrls.METERS_WAREHOUSE,
            },
        ],
    },

    //         {
    //             title: 'MENU.ACCOUNTING_MOVEMENT_TECHNICAL_MEANS.LEGAL_CONSUMERS',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.ACCOUNTING_MOVEMENT_TECHNICAL_MEANS.REPORTS',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },

    {
        id      : 'dashboards',
        title   : 'MENU.OPERATIONAL_INFORMATION_CONSUMER.NAME',
        type    : 'collapsable',
        children: [
            {
                title: 'MENU.OPERATIONAL_INFORMATION_CONSUMER.SENDING_SMS_MESSAGES',
                type: 'basic',
                link: '/message-sender/' + MessageSenderApiUrls.SMS_MESSAGE,
            },
            {
                title: 'ACCOUNTING_SETTLEMENT_HC.SENDING_MESSAGES_TO_OFFICE',
                type: 'basic',
                link: '/message-sender/' + MessageSenderApiUrls.CABINET_SMS_MESSAGES,
            },
        ]
    },

    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.ENSURING_CLAIM_ACTIVITY.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: [
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.OSON',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.PLAY_MOBILE',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.UZPAYNET',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.STATE_TAX_COMMITTEE',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.CADASTRE',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.TREASURY',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.MONOPOLY',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.INTERACTION_WITH_EXTERNAL_SYSTEMS.PROSECUTORS_OFFICE',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //     ]
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.FORMATION_REGULATED_REPORTING.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.CURRENT_STATE_RESIDENTIAL_CONSUMER.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.CURRENT_STATE_LEGAL_CONSUMER.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.VIEW_SESSIONS.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.ARCHIVE.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: [
    //         {
    //             title: 'MENU.ARCHIVE.HOUSEHOLD',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //         {
    //             title: 'MENU.ARCHIVE.LEGAL',
    //             type: 'basic',
    //             link: '/reference/' + ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
    //         },
    //     ]
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.REGISTERS.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.REPORTS_ASKUE.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'MENU.MESSAGES.NAME',
    //     type    : 'collapsable',
    //     link    : '/reference',
    //     children: []
    // },
    // {
    //     id      : 'dashboards',
    //     title   : 'Fuse Template',
    //     subtitle: 'Unique dashboard designs',
    //     type    : 'basic',
    //     icon    : 'heroicons_outline:home',
    //     link : '/dashboards/project'
    // },

    {
        title   : 'GENERAL.EXIT',
        type    : 'basic',
        link    : '/sign-out',
    },
];
