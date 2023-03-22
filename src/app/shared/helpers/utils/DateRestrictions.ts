
export default class DateRestrictions  {
    static todaysDate:Date =  new Date()

  static  getCurrentMonth = ({
            start:new Date(new Date().setDate(1)),
            end:new Date( new Date(DateRestrictions.todaysDate.getFullYear(),DateRestrictions.todaysDate.getMonth() + 1,1).setMinutes(-1))
    })

  static  getFrom1990UntilNow = ({
            start:new Date(1990,1,1),
            end:DateRestrictions.todaysDate
    })

   static getFrom1900UntilNow = ({
            start:new Date(1900,
                DateRestrictions.todaysDate.getMonth(),
                DateRestrictions.todaysDate.getDate()), end:DateRestrictions.todaysDate
    })

   static getFrom5YearsAgoUntilNow = ({
            start:new Date(DateRestrictions.todaysDate.getFullYear() - 5,DateRestrictions.todaysDate.getMonth(),DateRestrictions.todaysDate.getDate()),
            end:DateRestrictions.todaysDate
    })

    static getFrom1YearAgoUntilNow  = ({
            start:new Date(DateRestrictions.todaysDate.getFullYear() - 1,DateRestrictions.todaysDate.getMonth(),DateRestrictions.todaysDate.getDate()),
            end:DateRestrictions.todaysDate
})

    static getFrom1YearAgoUntilNext5Years = ({
        start:new Date(DateRestrictions.todaysDate.getFullYear() - 1,DateRestrictions.todaysDate.getMonth(),DateRestrictions.todaysDate.getDate()),
        end:new Date(DateRestrictions.todaysDate.getFullYear() + 5,DateRestrictions.todaysDate.getMonth(),DateRestrictions.todaysDate.getDate())
      })

    static getFrom1MonthAgoUntilNow = ({
        start:new Date(new Date().setMonth(this.todaysDate.getMonth() - 1)),
        end:this.todaysDate
    })
}

