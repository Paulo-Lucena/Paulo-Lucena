function tema(){
    //var hour = new Date()

    var hour = 8 //<- Para teste

    if( hour >= 6 && hour < 18){
        document.body.style.background = 'whiter'
        document.body.style.color = 'black'
        document.getElementById('nav').style.color = 'black'
        document.getElementById('nav').style.background = 'whiter'
        
    } else {
        document.body.style.background = '#515154'
        document.body.style.color = '#ffffff';

    }
}