import {MatSnackBar} from "@angular/material/snack-bar";
import {InjectorInstance} from "../../shared.module";

export class SnackBarComponent{
  static openSnackBar(message: string, action: string, duration = 2000) {
    console.log('snack bar');
    let snackBar = InjectorInstance.get(MatSnackBar)
    snackBar.open(message, action, {
      duration: duration,
    }).afterDismissed();
  }
}
