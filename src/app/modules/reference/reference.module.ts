import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "@shared/shared.module";
import {RouterModule} from "@angular/router";
import {referenceRoutes} from "./reference.routing";
import {TranslocoModule} from "@ngneat/transloco";
import { StandardValuesComponent } from './technical-directories/standard.values/standard.values.component';
import { MaterialsComponent } from './technical-directories/materials/materials.component';
import { TechnicalWorkUnderwayComponent } from './technical.work.underway/technical.work.underway.component';
import {BasicReferencePage} from "./basic.reference.page";
import { SenderOrganizationTypesComponent } from './structural-reference/sender.organization.types/sender.organization.types.component';
import { SenderOrganizatonTypesFormComponent } from './structural-reference/sender.organization.types/actions/sender.organizaton.types.form/sender.organizaton.types.form.component';
import { AgentComponent } from './structural-reference/agent/agent.component';
import { AgentsFormComponent } from './structural-reference/agent/actions/agents.form/agents.form.component';
import { StandardValuesFormComponent } from './technical-directories/standard.values/actions/standard.values.form/standard.values.form.component';
import { MaterialsFormComponent } from './technical-directories/materials/actions/materials.form/materials.form.component';
import { ManagementTypesComponent } from './general-reference/management.types/management.types.component';
import { ManagementTypesFormComponent } from './general-reference/management.types/actions/management.types.form/management.types.form.component';

import { UtilitiesComponent } from "./general-reference/utilities/utilities.component";
import { UtilitiesFormComponent } from "./general-reference/utilities/actions/utilities.form/utilities.form.component";
import { BanksComponent } from './accounting-directory/banks/banks.component';
import { BanksFormComponent } from './accounting-directory/banks/actions/banks.form/banks.form.component';
import { OrcAgentsComponent } from './structural-reference/orc.agents/orc.agents.component';
import { OrcAgentsFormComponent } from './structural-reference/orc.agents/actions/orc.agents.form/orc.agents.form.component';

import { ConsumptionGroupsComponent } from './general-reference/consumption.groups/consumption.groups.component';
import {ConsumptionGroupsFormComponent} from "./general-reference/consumption.groups/actions/consumption.groups.form/consumption.groups.form.component";
import { AophComponent } from "./structural-reference/aoph/aoph.component";
import { AophFormComponent } from "./structural-reference/aoph/actions/aoph.form/aoph.form.component";
import { PsFiderTpCompoent } from "./general-reference/ps.fider.tp/ps.fider.tp.component";
import { PsFiderTpFormComponent } from "./general-reference/ps.fider.tp/actions/ps.fider.tp.form/ps.fider.tp.form.component";
import { CurrenciesComponent } from "./accounting-handbooks-reference/currencies/currencies.component";
import { CurrenciesFormComponent } from "./accounting-handbooks-reference/currencies/actions/currencies.form/currencies.form.component";
import {ProviderTypeComponent} from "./technical-directories/provider.type/provider.type.component";
import {ProviderTypeFormComponent} from "./technical-directories/provider.type/actions/provider.type.form/provider.type.form.component";
import { CalculationTypeFormComponent } from "./accounting-directory/calculation.type/actions/calculation.type.form/calculation.type.form.component";
import { CalculationTypeComponent } from "./accounting-directory/calculation.type/calculation.type.component";
import {ArbitrationsComponent} from "./structural-reference/arbitrations/arbitrations.component";
import {ArbitrationsFormComponent} from "./structural-reference/arbitrations/actions/arbitrations.form/arbitrations.form.component";
import {ReactiveActiveComponent} from "./technical-directories/reactive.active/reactive.active.component";
import {ReactiveActiveFormComponent} from "./technical-directories/reactive.active/actions/reactive.active.form/reactive.active.form.component";
import {ManagementLevelsComponent} from "./general-reference/management.levels/management.levels.component";
import {ManagementLevelsFormComponent} from "./general-reference/management.levels/actions/management.levels.form/management.levels.form.component";
import {AskueTypesComponent} from "./technical-directories/askue.types/askue.types.component";
import {AskueTypesFormComponent} from "./technical-directories/askue.types/actions/askue.types.form/askue.types.form.component";
import {MeterManufacturerComponent} from "./technical-directories/meter.manufacturer/meter.manufacturer.component";
import {
  MeterManufacturesFormComponent
} from "./technical-directories/meter.manufacturer/actions/meter.manufactures.form/meter.manufactures.form.component";
import {EefdComponent} from "./accounting-handbooks-reference/eefd/eefd.component";
import {EefdFormComponent} from "./accounting-handbooks-reference/eefd/actions/eefd.form/eefd.form.component";
import {BooksComponent} from "./structural-reference/books/books.component";
import {BooksFormComponent} from "./structural-reference/books/actions/books.form/books.form.component";
import {MeterTypeComponent} from "./technical-directories/meter.type/meter.type.component";
import {
  MeterTypeFormComponent
} from "./technical-directories/meter.type/actions/meter.type.form/meter.type.form.component";

import {InterfaceInstalledMeterComponent} from "./structural-reference/interface.installed.meter/interface.installed.meter.component";
import {InterfaceInstalledMeterFormComponent} from "./structural-reference/interface.installed.meter/actions/interface.installed.meter.form/interface.installed.meter.form.component";
import {BrigadesComponent} from "./structural-reference/brigades/brigades.component";
import {BrigadesFormComponent} from "./structural-reference/brigades/actions/brigades.form/brigades.form.component";
import {TariffGroupComponent} from "./accounting-directory/tariff.group/tariff.group.component";
import {TariffGroupFormComponent} from "./accounting-directory/tariff.group/actions/tariff.group.form/tariff.group.form.component";
import { PaymentDocumentTypeComponent } from "./accounting-directory/payment.document.type/payment.document.type.component";
import { PaymentDocumentTypeFormComponent } from "./accounting-directory/payment.document.type/actions/payment.document.type.form/payment.document.type.form.component";
import {LevelsOfElectricityLosesComponent} from "./technical-directories/levels.of.electricity.loses/levels.of.electricity.loses.component";
import {AssesingLossNetworkFormComponent} from "./technical-directories/levels.of.electricity.loses/actions/assesing.loss.network.form/assesing.loss.network.form.component";
import { PostOfficesComponent } from './structural-reference/post.offices/post.offices.component';
import { PostOfficeDirectoryFormComponent } from './structural-reference/post.offices/actions/post.office.directory.form/post.office.directory.form.component';
import {BasicTariffCoefficientsComponent} from "./accounting-directory/basic.tariff.coefficients/basic.tariff.coefficients.component";
import {BasicTariffCoefficientsFormComponent} from "./accounting-directory/basic.tariff.coefficients/actions/basic.tariff.coefficients.form/basic.tariff.coefficients.form.component";
import {OperationTypesComponent} from "./accounting-directory/operation.types/operation.types.component";
import {OperationTypesFormComponent} from "./accounting-directory/operation.types/actions/operation.types.form/operation.types.form.component";
import {TimezonesComponent} from "./accounting-directory/timezones/timezones.component";
import {TimezonesFormComponent} from "./accounting-directory/timezones/actions/timezones.form/timezones.form.component";
import { RegionsComponent } from './general-reference/regions/regions.component';
import { RegionsFormComponent } from './general-reference/regions/actions/regions.form/regions.form.component';
import {CoatoAskueBindingComponent} from "./technical-directories/coato.askue.binding/coato.askue.binding.component";
import {
  CoatoAskueBindingFormComponent
} from "./technical-directories/coato.askue.binding/actions/coato.askue.binding.form/coato.askue.binding.form.component";
import {DistrictsComponent} from "./general-reference/districts/districts.component";
import {DistrictsFormComponent} from "./general-reference/districts/actions/districts.form/districts.form.component";
import {ManagmentPositionsComponent} from "./general-reference/managment.positions/managment.positions.component";
import {ManagementPositionsFormComponent} from "./general-reference/managment.positions/actions/management.positions.form/management.positions.form.component";
import { ManagersComponent } from "./general-reference/managers/managers.component";
import { ManagersFormComponent } from "./general-reference/managers/actions/managers.form/managers.form.component";
import {OutageCausesComponent} from "./accounting-directory/outage.causes/outage.causes.component";
import {OutageCausesFormComponent} from "./accounting-directory/outage.causes/actions/outage.causes.form/outage.causes.form.component";
import {ReceiverOrganizationsFormComponent} from "./structural-reference/receiver.organizations/actions/receiver.organizations.form/receiver.organizations.form.component";
import {BankMfosComponent} from "./accounting-directory/bank.mfos/bank.mfos.component";
import {BankMfosFormComponent} from "./accounting-directory/bank.mfos/actions/bank.mfos.form/bank.mfos.form.component";
import {ReceiverOrganizationsComponent} from "./structural-reference/receiver.organizations/receiver.organizations.component";
import { HabitationDivisionsComponent } from "./structural-reference/habitation.divisions/habitation.divisions.component";
import { HabitationDivisionsFormComponent } from "./structural-reference/habitation.divisions/actions/habitation.divisions.form/habitation.divisions.form.component";
import {SubstationComponent} from "./technical-directories/substation/substation.component";
import {SubstationFormComponent} from "./technical-directories/substation/actions/substation.form/substation.form.component";
import { AccountDirectoryComponent } from './accounting-directory/account.directory/account.directory.component';
import { AccountDirectoryFormComponent } from './accounting-directory/account.directory/actions/account.directory.form/account.directory.form.component';
import { IndicationTypesComponent } from "./accounting-directory/indication.types/indication.types.component";
import { IndicationTypesFormComponent } from "./accounting-directory/indication.types/actions/indication.types.form/indication.types.form.component";
import { OperatorTypeBindingsComponent } from './technical-directories/operator.type.bindings/operator.type.bindings.component';
import { OperatorTypeBindingFormComponent } from './technical-directories/operator.type.bindings/actions/operator.type.binding.form/operator.type.binding.form.component';
import {InformationSystemsErrorCodesComponent} from "./cb-reference/information.systems.error.codes/information.systems.error.codes.component";
import {InformationSystemsErrorCodesFormComponent} from "./cb-reference/information.systems.error.codes/actions/information.systems.error.codes.form/information.systems.error.codes.form.component";
import {TransformerTypesComponent} from "./technical-directories/transformer.types/transformer.types.component";
import {TransformerTypesFormComponent} from "./technical-directories/transformer.types/actions/transformer.types.form/transformer.types.form.component";
import { CoatoBranchesComponent } from "./general-reference/coato.branches/coato.branches.component";
import { CoatoBranchesFormComponent } from "./general-reference/coato.branches/actions/coato.branches.form/coato.branches.form.component";
import {
  LegalFormClassifiersComponent
} from "./accounting-handbooks-reference/legal.form.classifiers/legal.form.classifiers.component";
import {
  LegalFormClassifiersFormComponent
} from "./accounting-handbooks-reference/legal.form.classifiers/actions/legal.form.classifiers.form/legal.form.classifiers.form.component";
import {StreetsDirectoryComponent} from "./structural-reference/streets.directory/streets.directory.component";
import {StreetsDirectoryFormComponent} from "./structural-reference/streets.directory/actions/streets.directory.form/streets.directory.form.component";
import {ErrorCodeComponent} from "./technical-directories/error.code/error.code.component";
import {ErrorCodeFormComponent} from "./technical-directories/error.code/actions/error.code.form/error.code.form.component";
import {HousingTypeComponent} from "./general-reference/housing.type/housing.type.component";
import {HousingTypeFormComponent} from "./general-reference/housing.type/actions/housing.type.form/housing.type.form.component";
import {HousingCategoryComponent} from "./general-reference/housing.category/housing.category.component";
import {HousingCategoryFormComponent} from "./general-reference/housing.category/actions/housing.category.form/housing.category.form.component";
import { ConsumerTypeComponent } from './structural-reference/consumer.type/consumer.type.component';
import { ConsumerTypeFormComponent } from './structural-reference/consumer.type/actions/consumer.type.form/consumer.type.form.component';
import {OrganizationsComponent} from "./general-reference/organizations/organizations.component";
import {
  OrganizationsFormComponent
} from "./general-reference/organizations/actions/organizations.form/organizations.form.component";
import {ConsumerStatesComponent} from "./technical-directories/consumer.states/consumer.states.component";
import {
  ConsumerStatesFormComponent
} from "./technical-directories/consumer.states/actions/consumer.states.form/consumer.states.form.component";
import {NationalEconomyBranchComponent} from "./accounting-handbooks-reference/national.economy.branch/national.economy.branch.component";
import {NationalEconomyBranchFormComponent} from "./accounting-handbooks-reference/national.economy.branch/actions/national.economy.levels.form/national.economy.branch.form.component";
import { StateGovernmentOrganizationComponent } from './accounting-handbooks-reference/state.government.organization/state.government.organization.component';
import { StateGovernmentOrganizationsFormComponent } from './accounting-handbooks-reference/state.government.organization/actions/state.government.organizations.form/state.government.organizations.form.component';
import { StateComplexComponent } from './national-statistics/state.complex/state.complex.component';
import { DirectoryOfComplexesFormComponent } from './national-statistics/state.complex/actions/directory.of.complexes.form/directory.of.complexes.form.component';
import {EconomicActivityTypeComponent} from "./national-statistics/economic.activity.type/economic.activity.type.component";
import {EconomicActivityTypeFormComponent} from "./national-statistics/economic.activity.type/actions/economic.activity.type.form/economic.activity.type.form.component";
import {TariffsComponent} from "./accounting-directory/tariffs/tariffs.component";
import {TariffsFormComponent} from "./accounting-directory/tariffs/actions/tariffs.form/tariffs.form.component";
import {
  OwnershipClassifierComponent
} from "./accounting-handbooks-reference/ownership.classifier/ownership.classifier.component";
import {
  OwnershipClassifierFormComponent
} from "./accounting-handbooks-reference/ownership.classifier/actions/ownership.classifier.form/ownership.classifier.form.component";
import { GovernmentOrganizationSubgroupComponent } from './accounting-handbooks-reference/government.organization.subgroup/government.organization.subgroup.component';
import { SubgroupGovernmentOrganizationFormComponent } from './accounting-handbooks-reference/government.organization.subgroup/actions/subgroup.government.organization.form/subgroup.government.organization.form.component';
import { WorkplaceComponent } from './general-reference/workplace/workplace.component';
import { WorkPlaceFormComponent } from './general-reference/workplace/actions/work.place.form/work.place.form.component';
import {LanguagesComponent} from "./general-reference/languages/languages.component";
import {LanguagesFormComponent} from "./general-reference/languages/actions/languages.form/languages.form.component";
import {
  ExchangeRatesFormComponent
} from "./accounting-directory/exchange.rates/actions/exchange.rates.form/exchange.rates.form.component";
import {ExchangeRatesComponent} from "./accounting-directory/exchange.rates/exchange.rates.component";
import {
  TreasuryOrganizationalFormComponent
} from "./accounting-handbooks-reference/treasury.organizational.form/treasury.organizational.form.component";
import {
  TreasuryOrganizationalFormFormComponent
} from "./accounting-handbooks-reference/treasury.organizational.form/actions/treasury.organizational.form/treasury.organizational.form.form.component";
import {ConsumptionVolumeComponent} from "./accounting-directory/consumption.volume/consumption.volume.component";
import {ConsumptionVolumeFormComponent} from "./accounting-directory/consumption.volume/actions/consumption.volume.form/consumption.volume.form.component";
import { PaymentPurposesComponent } from './accounting-handbooks-reference/payment.purposes/payment.purposes.component';
import { PaymentPurposesFormComponent } from './accounting-handbooks-reference/payment.purposes/actions/payment.purposes.form/payment.purposes.form.component';
import { LegalReportStatusesComponent } from './technical-directories/legal.report.statuses/legal.report.statuses.component';
import { LegalReportStatusesFormComponent } from './technical-directories/legal.report.statuses/actions/legal.report.statuses.form/legal.report.statuses.form.component';
import { BusinessActivitiesComponent } from './general-reference/business.activities/business.activities.component';
import { BusinessActivitiesFormComponent } from './general-reference/business.activities/actions/business.activities.form/business.activities.form.component';
import { FinePercentagesComponent } from './accounting-handbooks-reference/fine.percentages/fine.percentages.component';
import { FinePercentagesFormComponent } from './accounting-handbooks-reference/fine.percentages/actions/fine.percentages.form/fine.percentages.form.component';
import { PaymentSystemComponent } from './general-reference/payment.system/payment.system.component';
import { PaymentSystemFormComponent } from './general-reference/payment.system/actions/payment.system.form/payment.system.form.component';
import {NewPersonalAccountRangeComponent} from "@app/modules/reference/general-reference/new.personal.account.range/new.personal.account.range.component";
import {NewPersonalAccountRangeFormComponent} from "@app/modules/reference/general-reference/new.personal.account.range/actions/new.personal.account.range.form/new.personal.account.range.form.component";

@NgModule({
  declarations: [
    MeterManufacturerComponent,
    MeterTypeComponent,
    MeterTypeFormComponent,
    StandardValuesComponent,
    TechnicalWorkUnderwayComponent,
    BasicReferencePage,
    MeterManufacturesFormComponent,
    UtilitiesComponent,
    UtilitiesFormComponent,
    StandardValuesFormComponent,
    SenderOrganizationTypesComponent,
    SenderOrganizatonTypesFormComponent,
    AgentComponent,
    AgentsFormComponent,
    ManagementTypesComponent,
    ManagementTypesFormComponent,
    ConsumptionGroupsComponent,
    ConsumptionGroupsFormComponent,
    OrcAgentsComponent,
    OrcAgentsFormComponent,
    ConsumptionGroupsComponent,
    ConsumptionGroupsFormComponent,
    AophComponent,
    AophFormComponent,
    MaterialsComponent,
    MaterialsFormComponent,
    AophFormComponent,
    BanksComponent,
    BanksFormComponent,
    PsFiderTpCompoent,
    PsFiderTpFormComponent,
    ProviderTypeComponent,
    ProviderTypeFormComponent,
    PsFiderTpFormComponent,
    CurrenciesComponent,
    ReactiveActiveComponent,
    ReactiveActiveFormComponent,
    PsFiderTpFormComponent,
    CurrenciesFormComponent,
    PsFiderTpFormComponent,
    CalculationTypeFormComponent,
    CalculationTypeComponent,
    PsFiderTpFormComponent,
    AophFormComponent,
    ArbitrationsComponent,
    ArbitrationsFormComponent,
    PsFiderTpFormComponent,
    ManagementLevelsComponent,
    ManagementLevelsFormComponent,
    AskueTypesComponent,
    AskueTypesFormComponent,
    TariffGroupComponent,
    TariffGroupFormComponent,
    AskueTypesFormComponent,
    EefdComponent,
    EefdFormComponent,
    BooksComponent,
    BooksFormComponent,
    AskueTypesFormComponent,
    InterfaceInstalledMeterComponent,
    InterfaceInstalledMeterFormComponent,
    BrigadesComponent,
    BrigadesFormComponent,
    CoatoAskueBindingComponent,
    CoatoAskueBindingFormComponent,
    BrigadesFormComponent,
    AskueTypesFormComponent,
    PaymentDocumentTypeComponent,
    PaymentDocumentTypeFormComponent,
    AssesingLossNetworkFormComponent,
    LevelsOfElectricityLosesComponent,
    ExchangeRatesComponent,
    ExchangeRatesFormComponent,
    PostOfficesComponent,
    PostOfficeDirectoryFormComponent,
    BasicTariffCoefficientsComponent,
    BasicTariffCoefficientsFormComponent,
    OperationTypesComponent,
    OperationTypesFormComponent,
    TimezonesComponent,
    TimezonesFormComponent,
    RegionsComponent,
    RegionsFormComponent,
    DistrictsComponent,
    DistrictsFormComponent,
    ManagmentPositionsComponent,
    ManagementPositionsFormComponent,
    ManagersComponent,
    ManagersFormComponent,
    OutageCausesComponent,
    OutageCausesFormComponent,
    ReceiverOrganizationsComponent,
    ReceiverOrganizationsFormComponent,
    BankMfosComponent,
    BankMfosFormComponent,
    HabitationDivisionsFormComponent,
    HabitationDivisionsComponent,
    TransformerTypesComponent,
    TransformerTypesFormComponent,
    AccountDirectoryComponent,
    AccountDirectoryFormComponent,
    IndicationTypesComponent,
    IndicationTypesFormComponent,
    OperatorTypeBindingsComponent,
    OperatorTypeBindingFormComponent,
    SubstationComponent,
    SubstationFormComponent,
    CoatoBranchesComponent,
    CoatoBranchesFormComponent,
    InformationSystemsErrorCodesComponent,
    InformationSystemsErrorCodesFormComponent,
    StreetsDirectoryComponent,
    StreetsDirectoryFormComponent,
    ConsumerTypeComponent,
    ConsumerTypeFormComponent,
    ErrorCodeComponent,
    ErrorCodeFormComponent,
    HousingTypeComponent,
    HousingTypeFormComponent,
    HousingCategoryComponent,
    HousingCategoryFormComponent,
    LegalFormClassifiersComponent,
    OrganizationsComponent,
    OrganizationsFormComponent,
    LegalFormClassifiersFormComponent,
    WorkplaceComponent,
    WorkPlaceFormComponent,
    LegalFormClassifiersFormComponent,
    ConsumerStatesComponent,
    ConsumerStatesFormComponent,
    NationalEconomyBranchComponent,
    NationalEconomyBranchFormComponent,
    StateComplexComponent,
    DirectoryOfComplexesFormComponent,
    NationalEconomyBranchFormComponent,
    ConsumerStatesFormComponent,
    EconomicActivityTypeComponent,
    EconomicActivityTypeFormComponent,
    TariffsComponent,
    TariffsFormComponent,
    OwnershipClassifierComponent,
    TreasuryOrganizationalFormComponent,
    TreasuryOrganizationalFormFormComponent,
    OwnershipClassifierFormComponent,
    NationalEconomyBranchFormComponent,
    StateGovernmentOrganizationComponent,
    StateGovernmentOrganizationsFormComponent,
    GovernmentOrganizationSubgroupComponent,
    SubgroupGovernmentOrganizationFormComponent,
    LanguagesComponent,
    LanguagesFormComponent,
    AskueTypesFormComponent,
    ConsumptionVolumeComponent,
    ConsumptionVolumeFormComponent,
    PaymentPurposesComponent,
    PaymentPurposesFormComponent,
    LegalReportStatusesComponent,
    LegalReportStatusesFormComponent,
    BusinessActivitiesComponent,
    BusinessActivitiesFormComponent,
    FinePercentagesComponent,
    FinePercentagesFormComponent,
    PaymentSystemComponent,
    PaymentSystemFormComponent,
    NewPersonalAccountRangeComponent,
    NewPersonalAccountRangeFormComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(referenceRoutes),
        TranslocoModule,
    ]
})
export class ReferenceModule { }
