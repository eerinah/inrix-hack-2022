//cost(time, fuel(based on weight), distance, traffic) for every path (shortest)
//time in minutes, distance in miles

function getSchedule(timeDisList){// [[time,dis,s,e], ...], time in hour ([0,24) hour) (eg 11.5 for 11:30), dis in ?
    var startTime=8*60;//mins
    var maxTime=-1, maxTimeIndex=-1;
    
    for(var i=0;i<timeDisList.length;i++){
        if(maxTime<timeDisList[i][0]){
            maxTime=timeDisList[i][0];
            maxTimeIndex=i;
        }
    }

    var finalSchedule;
    //format: [ [time,distance,startTime,endTime], ...]
    for(var i=0;i<timeDisList.length;i++){
        finalSchedule[i] = [ timeDisList[i][0], timeDisList[i][1], startTime+(maxTime-timeDisList[i][0]), startTime+maxTime ];
    }
    
    return finalSchedule;
}