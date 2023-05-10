
export default class DateRestrictions  {
    static todaysDate:Date =  new Date()

    static getFrom1YearAgoUntilNow  = ({
            start:new Date(DateRestrictions.todaysDate.getFullYear() - 1,DateRestrictions.todaysDate.getMonth(),DateRestrictions.todaysDate.getDate()),
            end:DateRestrictions.todaysDate
})

    static getFrom1MonthAgoUntilNow = ({
        start:new Date(new Date().setMonth(this.todaysDate.getMonth() - 1)),
        end:this.todaysDate
    })
}

