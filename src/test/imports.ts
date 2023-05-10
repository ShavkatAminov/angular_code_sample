import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {MatIconModule} from "@angular/material/icon";
import {ReferenceModule} from "@app/modules/reference/reference.module";
import {AccountingSettlementHCModule} from "@app/modules/accounting-settlement-hc/accounting-settlement-hc.module";
import {AccountingSettlementLcModule} from "@app/modules/accounting-settlement-lc/accounting-settlement-lc.module";
import {UserManagementModule} from "@app/modules/user-management/user-management.module";
import {ReportsModule} from "@app/modules/reports/reports.module";
import {HomeModule} from "@app/modules/het/home/home.module";
import {IconsModule} from "@app/core/icons/icons.module";


export const imports = [
    AppModule,
    SharedModule,
    TranslocoModule,
    MatIconModule,
    IconsModule,
    ReferenceModule,
    AccountingSettlementHCModule,
    AccountingSettlementLcModule,
    UserManagementModule,
    ReportsModule,
    HomeModule,
]
