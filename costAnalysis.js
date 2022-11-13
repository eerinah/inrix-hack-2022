//cost(time, fuel(based on weight), distance, traffic) for every path (shortest)
//time in minutes, distance in miles

function getSchedule(timeList,startTime){// [time, ...], time in hour ([0,24) hour) (eg 11.5 for 11:30)
    var maxTime=-1, maxTimeIndex=0;
    for(var i=0;i<timeList.length;i++){
        if(maxTime<time[i][0]){
            maxTime=time[i][0];
            maxTimeIndex=i;
        }
    }

    var finalSchedule;//format: [ [time,distance,startTime,endTime], ...]

    

}