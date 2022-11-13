//cost(time, fuel(based on weight), distance, traffic) for every path (shortest)
//time in minutes, distance in miles

function getSchedule(timeDisList){// [[time,dis,src,des], ...], time in hour ([0,24) hour) (eg 11.5 for 11:30), dis in ?
    var startTime=8*60;//mins
    var maxTime=-1;
    
    for(var i=0;i<timeDisList.length;i++){
        if(maxTime<timeDisList[i][0]){
            maxTime=timeDisList[i][0];
        }
    }

    var finalSchedule = [];
    //format: [ [time,distance,startTime,endTime, src, des], ...]
    for(var i=0;i<timeDisList.length;i++){
        var st = (startTime+(maxTime-timeDisList[i][0]))/60;
        var et = (startTime+maxTime)/60;
        finalSchedule.push([ timeDisList[i][0], timeDisList[i][1], Math.floor(st/60).toString() + int(st%60).toString(), Math.floor(et/60).toString() + int(et%60).toString(), timeDisList[i][2], timeDisList[i][3] ]);
    }

    return finalSchedule;
}