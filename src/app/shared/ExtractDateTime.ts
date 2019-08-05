export class ExtractDateTime{
    day:number;
    month:number;
    year:number;
    hours:number;
    minutes:number;
    seconds:number;
    milliseconds:number;
    
    getDateTime(d1:Date,d2:Date) : Date {
        this.year=d1.getFullYear();
        this.month=d1.getMonth();
        this.day= d1.getDate();
        this.hours=d2.getHours();
        this.minutes=d2.getMinutes();
        this.seconds=d2.getSeconds();
        this.milliseconds=d2.getMilliseconds();
        return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
    }

    getStartDate(d1:Date){
        this.year=d1.getFullYear();
        this.month=d1.getMonth();
        this.day= d1.getDate();
        this.hours=0;
        this.minutes=0;
        this.seconds=0;
        this.milliseconds=0;
        return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
    }
    getEndDate(d1:Date){
        this.year=d1.getFullYear();
        this.month=d1.getMonth();
        this.day= d1.getDate();
        this.hours=23;
        this.minutes=59;
        this.seconds=59;
        this.milliseconds=59;
        return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
    }
 
} 