function superbowlWin(record){
    const yy = record.find(element => element.result === "W"); 
    if (!yy) return undefined // early return
    return yy.year
}


