import { DatePipe } from "@angular/common";

export class DateUtil {

  public static isNull(obj: any): boolean {
    return obj == null || (typeof obj === undefined);
  }

  private static __END_TIME = "23:59:59";
  private static pipe: DatePipe = new DatePipe('en-US');

  public static parseDate(dt: Date, endDate: boolean = false): string {
    if (this.isNull(dt)) {
      return "";
    }

    if (endDate) {
      return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() + " " + this.__END_TIME;
    }

    return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() + " " + dt.getHours() + ":" +
        dt.getMinutes() + ":" + dt.getSeconds();
  }


  public static formatDate(
      vDate: Date | null,
      vFormat: string = 'dd.MM.yyyy'
  ): string | null {
    let date
    try {
      date = DateUtil.pipe.transform(vDate, vFormat);
    } catch (error) {
      date = ''
    }
    return date;
  }

  public static convert(vDate: string) {
    const [day, month, year] = vDate.split('.');
    const isoDateString = `${year}-${month}-${day}`;
    return new Date(isoDateString);
  }


}
