const highestAdjacent = (numbers, serie) => {
    let prod=1
    let num=''
    if(serie>20) return {prod:0,num:0}
    for(i=1;i<=serie;i++) {
        let prod1=1
        let num1=''
        let k = i
        for(n=i-1;n<serie+(i-1);n++) 
        {prod1*=eval(numbers[n]); num1+=(numbers[n].toString())}
        while(k<numbers.length) {
            let prod2=1
            let num2=''
            for(l=k;l<k+serie;l++) {
              prod2*=eval(numbers[l]);
              if(numbers[l]) num2+=(numbers[l].toString())
              else continue
              }
            if(prod2>prod1) {prod1=prod2; num1=num2}
            k=k+serie
        }
        if(prod1>prod) {prod=prod1; num=num1}
    } 
    return {prod,num}
}

module.exports = {
  highestAdjacent:highestAdjacent
}