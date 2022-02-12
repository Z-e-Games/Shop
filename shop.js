function makePwrUpsLastOneSecLonger(){
    if(parseInt(localStorage.getItem('gold coins')) >= 1000 && localStorage.getItem('is signed in') === 'yes' && parseInt(localStorage.getItem('ms per pwr up')) < 30000){
        localStorage.setItem('gold coins',parseInt(localStorage.getItem('gold coins'))-1000)
        localStorage.setItem('ms per pwr up',parseInt(localStorage.getItem('ms per pwr up') ) + 1000)
        alert(`your powerups now last ${parseInt(localStorage.getItem('ms per pwr up'))/1000} seconds`)
    }else if(localStorage.getItem('is signed in') === 'no'){
        alert('please sign in first')
    }else if(parseInt(localStorage.getItem('gold coins')) <= 1000 && localStorage.getItem('is signed in') === 'yes'){
        alert('sorry you dont have enough coins')
    }else if(parseInt(localStorage.getItem('ms per pwr up')) > 30000){
        localStorage.setItem('ms per pwr up', 30000)
    }else if(parseInt(localStorage.getItem('ms per pwr up')) === 30000){
        alert('You have maxed out on this upgrade')
    }
}


function setSGPSBMasDefault(){
    if(parseInt(localStorage.getItem('gold coins')) >= 1200 && localStorage.getItem('is signed in') === 'yes'){
        localStorage.setItem('gold coins',parseInt(localStorage.getItem('gold coins'))- 1200)
        localStorage.setItem('hasSquidGameMusic','yes')
        alert(`Your current music choice is Squid Game Pink Soldiers`)
    }else if(localStorage.getItem('is signed in') === 'no'){
        alert('please sign in first')
    }else if(parseInt(localStorage.getItem('gold coins')) <= 1200 && localStorage.getItem('is signed in') === 'yes'){
        alert('sorry you dont have enough coins')
    }
}

function moneyPerKillUpgrade(){
    if(parseInt(localStorage.getItem('gold coins')) >= 6500 && localStorage.getItem('is signed in') === 'yes' && parseInt(localStorage.getItem('coins per kill')) < 5){
        localStorage.setItem('gold coins',parseInt(localStorage.getItem('gold coins'))-6500)
        localStorage.setItem('coins per kill',parseInt(localStorage.getItem('coins per kill') ) + 1)
        alert(`You now get ${parseInt(localStorage.getItem('coins per kill'))} coins per kill.`)
    }else if(localStorage.getItem('is signed in') === 'no'){
        alert('please sign in first')
    }else if(parseInt(localStorage.getItem('gold coins')) <= 6500 && localStorage.getItem('is signed in') === 'yes'){
        alert('sorry you dont have enough coins')
    }else if(parseInt(localStorage.getItem('coins per kill')) > 5){
        localStorage.setItem('coins per kill', 5)
    }else if(parseInt(localStorage.getItem('coins per kill')) = 5){
        alert('You have maxed out on this upgrade')
    }
}

function useElfSkin(){
    if(parseInt(localStorage.getItem('gold coins')) >= 400 && localStorage.getItem('is signed in') === 'yes'){
        localStorage.setItem('gold coins',parseInt(localStorage.getItem('gold coins')) - 400)
        localStorage.setItem('has season skin', 'yes')
        alert(`You will have the GOLDskin in the next game.`)
    }else if(localStorage.getItem('is signed in') === 'no'){
        alert('please sign in first')
    }else if(parseInt(localStorage.getItem('gold coins')) <= 400 && localStorage.getItem('is signed in') === 'yes'){
        alert('sorry you dont have enough coins')
    }
}
