//cost(time, fuel(based on weight), distance, traffic) for every path (shortest)
//time in minutes, distance in miles

function getSchedule(timeDisList){// [[time,dis,src,des], ...], time in hour ([0,24) hour) (eg 11.5 for 11:30), dis in ?
    var startTime=8*60;//mins
    var maxTime=-1, maxTimeIndex=-1;
    
    for(var i=0;i<timeDisList.length;i++){
        if(maxTime<timeDisList[i][0]){
            maxTime=timeDisList[i][0];
            maxTimeIndex=i;
        }
    }

    var finalSchedule = new Array(timeDisList.length);
    //format: [ [time,distance,startTime,endTime, src, des], ...]
    for(var i=0;i<timeDisList.length;i++){
        finalSchedule[i] = [ timeDisList[i][0], timeDisList[i][1], startTime+(maxTime-timeDisList[i][0]), startTime+maxTime, timeDisList[i][2], timeDisList[i][3]];
    }

    return finalSchedule;
}