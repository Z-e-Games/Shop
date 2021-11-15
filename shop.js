function makePwrUpsLastOneSecLonger(){
    if(parseInt(localStorage.getItem('gold coins')) >= 500 && localStorage.getItem('is signed in') === 'yes'){
        localStorage.setItem('gold coins',parseInt(localStorage.getItem('gold coins'))-500)
        localStorage.setItem('ms per pwr up',parseInt(localStorage.getItem('ms per pwr up') ) + 1000)
        alert(`your powerups now last ${parseInt(localStorage.getItem('ms per pwr up'))/1000} seconds`)
    }else if(localStorage.getItem('is signed in') === 'no'){
        alert('please sign in first')
    }else if(parseInt(localStorage.getItem('gold coins')) <= 500 && localStorage.getItem('is signed in') === 'yes'){
        alert('sorry you dont have enough coins')
    }
}

function setSGPSBMasDefault(){
    if(parseInt(localStorage.getItem('gold coins')) >= 600 && localStorage.getItem('is signed in') === 'yes'){
        localStorage.setItem('gold coins',parseInt(localStorage.getItem('gold coins'))- 600)
        localStorage.setItem('hasSquidGameMusic','yes')
        alert(`Your current music choice is Squid Game Pink Soldiers`)
    }else if(localStorage.getItem('is signed in') === 'no'){
        alert('please sign in first')
    }else if(parseInt(localStorage.getItem('gold coins')) <= 600 && localStorage.getItem('is signed in') === 'yes'){
        alert('sorry you dont have enough coins')
    }
}
