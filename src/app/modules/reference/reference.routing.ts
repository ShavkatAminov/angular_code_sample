import {Route} from '@angular/router';
import {StandardValuesComponent} from "./technical-directories/standard.values/standard.values.component";
import {TechnicalWorkUnderwayComponent} from "./technical.work.underway/technical.work.underway.component";
import {
    SenderOrganizationTypesComponent
} from "./structural-reference/sender.organization.types/sender.organization.types.component";
import {ManagementTypesComponent} from "./general-reference/management.types/management.types.component";
import {UtilitiesComponent} from "./general-reference/utilities/utilities.component";
import {OrcAgentsComponent} from "./structural-reference/orc.agents/orc.agents.component";
import {BanksComponent} from "./accounting-directory/banks/banks.component";
import {ConsumptionGroupsComponent} from "./general-reference/consumption.groups/consumption.groups.component";
import {AophComponent} from "./structural-reference/aoph/aoph.component";
import {ReactiveActiveComponent} from "./technical-directories/reactive.active/reactive.active.component";
import {PsFiderTpCompoent} from "./general-reference/ps.fider.tp/ps.fider.tp.component";
import {AgentComponent} from "./structural-reference/agent/agent.component";
import {MaterialsComponent} from "./technical-directories/materials/materials.component";
import {ProviderTypeComponent} from "./technical-directories/provider.type/provider.type.component";
import {CurrenciesComponent} from "./accounting-handbooks-reference/currencies/currencies.component";
import {CalculationTypeComponent} from "./accounting-directory/calculation.type/calculation.type.component";
import {ArbitrationsComponent} from "./structural-reference/arbitrations/arbitrations.component";
import {ManagementLevelsComponent} from "./general-reference/management.levels/management.levels.component";
import {AskueTypesComponent} from "./technical-directories/askue.types/askue.types.component";
import {MeterManufacturerComponent} from "./technical-directories/meter.manufacturer/meter.manufacturer.component";
import {EefdComponent} from "./accounting-handbooks-reference/eefd/eefd.component";
import {BooksComponent} from "./structural-reference/books/books.component";
import {
    InterfaceInstalledMeterComponent
} from "./structural-reference/interface.installed.meter/interface.installed.meter.component";
import {BrigadesComponent} from "./structural-reference/brigades/brigades.component";
import {TariffGroupComponent} from "./accounting-directory/tariff.group/tariff.group.component";
import {
    PaymentDocumentTypeComponent
} from "./accounting-directory/payment.document.type/payment.document.type.component";
import {ExchangeRatesComponent} from "./accounting-directory/exchange.rates/exchange.rates.component";
import {ManagersComponent} from "./general-reference/managers/managers.component";

import {MeterTypeComponent} from "./technical-directories/meter.type/meter.type.component";
import {
    LevelsOfElectricityLosesComponent
} from "./technical-directories/levels.of.electricity.loses/levels.of.electricity.loses.component";
import {PostOfficesComponent} from "./structural-reference/post.offices/post.offices.component";
import {
    BasicTariffCoefficientsComponent
} from "./accounting-directory/basic.tariff.coefficients/basic.tariff.coefficients.component";
import {OperationTypesComponent} from "./accounting-directory/operation.types/operation.types.component";
import {TimezonesComponent} from "./accounting-directory/timezones/timezones.component";
import {RegionsComponent} from "./general-reference/regions/regions.component";
import {DistrictsComponent} from "./general-reference/districts/districts.component";
import {OutageCausesComponent} from "./accounting-directory/outage.causes/outage.causes.component";
import {
    ReceiverOrganizationsComponent
} from "./structural-reference/receiver.organizations/receiver.organizations.component";
import {ManagmentPositionsComponent} from "./general-reference/managment.positions/managment.positions.component";
import {HabitationDivisionsComponent} from "./structural-reference/habitation.divisions/habitation.divisions.component";
import {CoatoAskueBindingComponent} from "./technical-directories/coato.askue.binding/coato.askue.binding.component";
import {BankMfosComponent} from "./accounting-directory/bank.mfos/bank.mfos.component";
import {AccountDirectoryComponent} from "./accounting-directory/account.directory/account.directory.component";
import {SubstationComponent} from "./technical-directories/substation/substation.component";
import {IndicationTypesComponent} from "./accounting-directory/indication.types/indication.types.component";
import {
    OperatorTypeBindingsComponent
} from './technical-directories/operator.type.bindings/operator.type.bindings.component';

import {ReferenceApiUrls} from "./referenceApiUrls";
import {
    InformationSystemsErrorCodesComponent
} from "./cb-reference/information.systems.error.codes/information.systems.error.codes.component";
import {TransformerTypesComponent} from "./technical-directories/transformer.types/transformer.types.component";
import {CoatoBranchesComponent} from "./general-reference/coato.branches/coato.branches.component";
import {StreetsDirectoryComponent} from "./structural-reference/streets.directory/streets.directory.component";
import {ErrorCodeComponent} from "./technical-directories/error.code/error.code.component";
import {HousingTypeComponent} from "./general-reference/housing.type/housing.type.component";
import {HousingCategoryComponent} from "./general-reference/housing.category/housing.category.component";
import {
    LegalFormClassifiersComponent
} from "./accounting-handbooks-reference/legal.form.classifiers/legal.form.classifiers.component";
import {ConsumerTypeComponent} from "./structural-reference/consumer.type/consumer.type.component";
import {OrganizationsComponent} from "./general-reference/organizations/organizations.component";
import {ConsumerStatesComponent} from "./technical-directories/consumer.states/consumer.states.component";
import {
    NationalEconomyBranchComponent
} from "./accounting-handbooks-reference/national.economy.branch/national.economy.branch.component";
import {StateComplexComponent} from "./national-statistics/state.complex/state.complex.component";
import {
    EconomicActivityTypeComponent
} from "./national-statistics/economic.activity.type/economic.activity.type.component";
import {TariffsComponent} from "./accounting-directory/tariffs/tariffs.component";
import {
    OwnershipClassifierComponent
} from "./accounting-handbooks-reference/ownership.classifier/ownership.classifier.component";
import {
    TreasuryOrganizationalFormComponent
} from "./accounting-handbooks-reference/treasury.organizational.form/treasury.organizational.form.component";
import {
    StateGovernmentOrganizationComponent
} from "./accounting-handbooks-reference/state.government.organization/state.government.organization.component";
import {
    GovernmentOrganizationSubgroupComponent
} from "./accounting-handbooks-reference/government.organization.subgroup/government.organization.subgroup.component";
import {WorkplaceComponent} from "./general-reference/workplace/workplace.component";
import {LanguagesComponent} from "./general-reference/languages/languages.component";
import {ConsumptionVolumeComponent} from "./accounting-directory/consumption.volume/consumption.volume.component";
import {PaymentPurposesComponent} from "./accounting-handbooks-reference/payment.purposes/payment.purposes.component";
import {AccountingSettlementLCApiUrls} from "../accounting-settlement-lc/accountingSettlementLCApiUrls";
import {
    LegalReportStatusesComponent
} from "./technical-directories/legal.report.statuses/legal.report.statuses.component";
import {BusinessActivitiesComponent} from "./general-reference/business.activities/business.activities.component";
import {
    FinePercentagesComponent
} from "@app/modules/reference/accounting-handbooks-reference/fine.percentages/fine.percentages.component";
import {PaymentSystemComponent} from "@app/modules/reference/general-reference/payment.system/payment.system.component";
import {NewPersonalAccountRangeComponent} from "@app/modules/reference/general-reference/new.personal.account.range/new.personal.account.range.component";
import {MeterStateComponent} from "@app/modules/reference/general-reference/meter.state/meter.state.component";
import {NumberOfConsumersComponent} from "@app/modules/reference/general-reference/number.of.consumers/number.of.consumers.component";
import {EnterpriseByPaymentTypesComponent} from "@app/modules/reference/general-reference/enterprise.by.payment.types/enterprise.by.payment.types.component";

export const referenceRoutes: Route[] = [
    {
        path     : ReferenceApiUrls.METER_MANUFACTURER,
        component: MeterManufacturerComponent
    },
    {
        path     : ReferenceApiUrls.METER_TYPE,
        component: MeterTypeComponent
    },
    {
        path     : ReferenceApiUrls.STANDARD_VALUES,
        component: StandardValuesComponent
    },
    {
        path     : ReferenceApiUrls.TECHNICAL_WORK_UNDERWAY,
        component: TechnicalWorkUnderwayComponent
    },
    {
        path     : ReferenceApiUrls.SENDER_ORGANIZATION_TYPES,
        component: SenderOrganizationTypesComponent
    },
    {
        path     : ReferenceApiUrls.AGENT,
        component: AgentComponent
    },
    {
        path     : ReferenceApiUrls.MANAGEMENT_TYPES,
        component: ManagementTypesComponent
    },
    {
        path     : ReferenceApiUrls.UTILITIES,
        component: UtilitiesComponent
    },
    {
        path     : ReferenceApiUrls.CURRENCIES,
        component: CurrenciesComponent
    },
    {
        path     : ReferenceApiUrls.ORC_AGENT,
        component: OrcAgentsComponent
    },
    {
        path     : ReferenceApiUrls.CONSUMPTION_GROUPS,
        component: ConsumptionGroupsComponent
    },
    {
        path     : ReferenceApiUrls.AOPH,
        component: AophComponent
    },
    {
        path     : ReferenceApiUrls.PS_FIDER_TP,
        component: PsFiderTpCompoent
    },
    {
        path     : ReferenceApiUrls.REACTIVE_ACTIVE,
        component: ReactiveActiveComponent
    },
    {
        path     : ReferenceApiUrls.BANKS,
        component: BanksComponent
    },
    {
        path     : ReferenceApiUrls.MATERIALS,
        component: MaterialsComponent
    },
    {
        path     : ReferenceApiUrls.PROVIDER_TYPE,
        component: ProviderTypeComponent
    },
    {
        path     : ReferenceApiUrls.CALCULATION_TYPE,
        component: CalculationTypeComponent
    },
    {
        path     : ReferenceApiUrls.ARBITRATIONS,
        component: ArbitrationsComponent
    },
    {
        path     : ReferenceApiUrls.MANAGEMENT_LEVELS,
        component: ManagementLevelsComponent
    },
    {
        path     : ReferenceApiUrls.ASKUE_TYPES,
        component: AskueTypesComponent
    },
    {
        path     : ReferenceApiUrls.EEFD,
        component: EefdComponent
    },
    {
        path     : ReferenceApiUrls.BOOKS,
        component: BooksComponent
    },
    {
        path     : ReferenceApiUrls.INTERFACE_INSTALLED_METER,
        component: InterfaceInstalledMeterComponent
    },
    {
        path     : ReferenceApiUrls.BRIGADES,
        component: BrigadesComponent
    },
    {
        path     : ReferenceApiUrls.TARIFF_GROUP,
        component: TariffGroupComponent
    },
    {
        path     : ReferenceApiUrls.PAYMENT_DOCUMENT_TYPE,
        component: PaymentDocumentTypeComponent
    },
    {
        path     : ReferenceApiUrls.LEVELS_OF_ELECTRICITY_LOSES,
        component: LevelsOfElectricityLosesComponent
    },
    {
        path     : ReferenceApiUrls.EXCHANGE_RATES,
        component: ExchangeRatesComponent
    },
    {
        path     : ReferenceApiUrls.POST_OFFICES,
        component: PostOfficesComponent
    },
    {
        path     : ReferenceApiUrls.BASIC_TARIFF_COEFFICIENTS,
        component: BasicTariffCoefficientsComponent
    },
    {
        path     : ReferenceApiUrls.OPERATION_TYPES,
        component: OperationTypesComponent
    },
    {
        path     : ReferenceApiUrls.TIMEZONES,
        component: TimezonesComponent
    },
    {
        path     : ReferenceApiUrls.REGIONS,
        component: RegionsComponent
    },
    {
        path     : ReferenceApiUrls.DISTRICTS,
        component: DistrictsComponent
    },
    {
        path     : ReferenceApiUrls.OUTAGE_CAUSES,
        component: OutageCausesComponent
    },
    {
        path     : ReferenceApiUrls.RECEIVER_ORGANIZATIONS,
        component: ReceiverOrganizationsComponent
    },
    {
        path     : ReferenceApiUrls.MANAGMENT_POSITIONS,
        component: ManagmentPositionsComponent
    },
    {
        path     : ReferenceApiUrls.COATO_ASKUE_BINDING,
        component: CoatoAskueBindingComponent
    },
    {
        path     : ReferenceApiUrls.BANK_MFOS,
        component: BankMfosComponent
    },
    {
        path     : ReferenceApiUrls.MANAGERS,
        component: ManagersComponent
    },
    {
        path     : ReferenceApiUrls.HABITATION_DIVISIONS,
        component: HabitationDivisionsComponent
    },
    {
        path     : ReferenceApiUrls.SUBSTATION,
        component: SubstationComponent
    },
    {
        path     : ReferenceApiUrls.ACCOUNT_DIRECTORY,
        component: AccountDirectoryComponent
    },
    {
        path     : ReferenceApiUrls.INDICATION_TYPES,
        component: IndicationTypesComponent
    },
    {
        path     : ReferenceApiUrls.OPERATOR_TYPE_BINDINGS,
        component: OperatorTypeBindingsComponent
    },
    {
        path     : ReferenceApiUrls.INFORMATION_SYSTEMS_ERROR_CODES,
        component: InformationSystemsErrorCodesComponent
    },
    {
        path     : ReferenceApiUrls.TRANSFORMER_TYPES,
        component: TransformerTypesComponent,
    },
    {
        path     : ReferenceApiUrls.COATO_BRANCHES,
        component: CoatoBranchesComponent
    },
    {
        path     : ReferenceApiUrls.LEGAL_FORM_CLASSIFIERS,
        component: LegalFormClassifiersComponent
    },
    {
        path     : ReferenceApiUrls.STREETS_DIRECTORY,
        component: StreetsDirectoryComponent
    },
    {
        path     : ReferenceApiUrls.ERROR_CODE,
        component: ErrorCodeComponent
    },
    {
        path     : ReferenceApiUrls.HOUSING_TYPE,
        component: HousingTypeComponent
    },
    {
        path     : ReferenceApiUrls.HOUSING_CATEGORY,
        component: HousingCategoryComponent
    },
    {
        path     : ReferenceApiUrls.CONSUMER_TYPE,
        component: ConsumerTypeComponent
    },
    {
        path     : ReferenceApiUrls.ORGANIZATIONS,
        component: OrganizationsComponent
    },
    {
        path     : ReferenceApiUrls.CONSUMER_STATES,
        component: ConsumerStatesComponent
    },
    {
        path     : ReferenceApiUrls.NATIONAL_ECONOMY_BRANCH,
        component: NationalEconomyBranchComponent
    },
    {
        path     : ReferenceApiUrls.STATE_COMPLEX,
        component: StateComplexComponent
    },
    {
        path     : ReferenceApiUrls.ECONOMIC_ACTIVITY_TYPE,
        component: EconomicActivityTypeComponent
    },
    {
        path     : ReferenceApiUrls.TARIFFS,
        component: TariffsComponent
    },
    {
        path     : ReferenceApiUrls.OWNERSHIP_CLASSIFIER,
        component: OwnershipClassifierComponent
    },
    {
        path     : ReferenceApiUrls.TREASURY_ORGANIZATIONAL,
        component: TreasuryOrganizationalFormComponent
    },
    {
        path     : ReferenceApiUrls.STATE_GOVERNMENT_ORGANIZATIONS,
        component: StateGovernmentOrganizationComponent
    },
    {
        path     : ReferenceApiUrls.SUBGROUP_GOVERNMENT_ORGANIZATIONS,
        component: GovernmentOrganizationSubgroupComponent
    },
    {
        path     : ReferenceApiUrls.WORK_PLACE,
        component: WorkplaceComponent
    },
    {
        path     : ReferenceApiUrls.LANGUAGES,
        component: LanguagesComponent
    },
    {
        path     : ReferenceApiUrls.CONSUMPTION_VOLUME,
        component: ConsumptionVolumeComponent
    },
    {
        path     : ReferenceApiUrls.PAYMENT_PURPOSES,
        component: PaymentPurposesComponent
    },
    {
        path     : ReferenceApiUrls.BUSINESS_ACTIVITY,
        component: BusinessActivitiesComponent
    },
    {
        path     : AccountingSettlementLCApiUrls.LEGAL_REPORT_STATUSES,
        component: LegalReportStatusesComponent
    },
    {
        path     : AccountingSettlementLCApiUrls.LEGAL_REPORT_STATUSES,
        component: LegalReportStatusesComponent
    },
    {
        path     : AccountingSettlementLCApiUrls.FINE_PERCENTAGES,
        component: FinePercentagesComponent
    },
    {
        path     : ReferenceApiUrls.PAYMENT_SYSTEM,
        component: PaymentSystemComponent
    },
    {
        path     : ReferenceApiUrls.NEW_PERSONAL_ACCOUNT_RANGE,
        component: NewPersonalAccountRangeComponent
    },
    {
        path     : ReferenceApiUrls.METER_STATE,
        component: MeterStateComponent
    },
    {
        path     : ReferenceApiUrls.NUMBER_OF_CONSUMERS,
        component: NumberOfConsumersComponent
    },
    {
        path     : ReferenceApiUrls.ENTERPRISE_BY_PAYMENT_TYPES,
        component: EnterpriseByPaymentTypesComponent
    },
];
