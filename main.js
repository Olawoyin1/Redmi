const data = document.querySelector('.data');
const blue = document.querySelector('.blue');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const change = document.querySelector('.change');
const changeEl = document.querySelector('.change-el');
const changeElem = document.querySelector('.change-elem');
const changeElement = document.querySelector('.change-Element');
const one = document.querySelector('.one');
const MobileModal = document.querySelector('.mobile-data');
const MobileDataTog = document.querySelector('.mobile-data-tog');
const two = document.querySelector('.two');
const wifiModal = document.querySelector('.wifi-modal');
const three = document.querySelector('.three');
const bluetoothModal = document.querySelector('.bluetooth-modal');
const box = document.querySelectorAll('.box');
const bellBox = document.querySelector('.bellbox') 
const bell = document.querySelector('.bell') 
const noBell = document.querySelector('.no-bell') 
const cog = document.querySelector('.uil-cog') 
const setPage = document.querySelector('.setting-page') 
const btn2 = document.querySelector('.btn2') 
const btn3 = document.querySelector('.btn3') 
const btn4 = document.querySelector('.btn4') 
const btn5 = document.querySelector('.btn5') 
// content = document.querySelectorAll('.content.update') 
const update = document.querySelectorAll('.pack');
const searchInput = document.querySelector('.search-input') 
const letter = document.querySelector('.letter'); 
const progress = document.querySelector('.progress'); 
const col = document.querySelectorAll('.col');
const coll = document.querySelectorAll('.coll');
const mobileMore = document.querySelector('.mobile-more');
const wifiPage = document.querySelector('.wifi-page');
const bluetoothPage = document.querySelector('.bluetooth-page');
const closeIn = document.querySelector('.close-in');
const closeBtn4 = document.querySelector('.close-btn4');
const closeBtn5 = document.querySelector('.close-btn5');
const pack = document.querySelectorAll('.select');
const uilCheck = document.querySelectorAll('.uil-check');
const rote = document.querySelector('.rote');
const rot = document.querySelector('.rot');
const rote2 = document.querySelector('.rote2');
const rot2 = document.querySelector('.rot2');
const changes = document.querySelector('.changes');
const airplane = document.querySelector('.airplane');
const muted = document.querySelector('.data-muted');
const mtnCheck = document.querySelector('.mtn-check');
const gloCheck = document.querySelector('.glo-check');
const slide = document.querySelector('.slide');
const bluSlide = document.querySelector('.blu-side');
const wifiSlide = document.querySelector('.wifi-slide');
const bluOn = document.querySelector('.blu-on');
const bluOff = document.querySelector('.blu-off');
const wifiOff = document.querySelector('.wifi-off');
const wifiOn = document.querySelector('.wifi-on');
const mtn = document.querySelector('.mtn');


wifiSlide.addEventListener('click',()=>{
    wifiSlide.classList.toggle('active');
    if(wifiSlide.classList.contains('active')){
        wifiOff.style.display = 'flex'
        wifiOn.style.display = 'none'
        blue.classList.remove('active');
        changeEl.textContent = 'off'
    }
    else{
        blue.classList.add('active');
        wifiOff.style.display = 'none'
        wifiOn.style.display = 'block'
        changeEl.textContent = 'on'
        reuseBlue();
        
    }
    // console.log(bluSlide);
})

bluSlide.addEventListener('click',()=>{
    bluSlide.classList.toggle('active');
    if(bluSlide.classList.contains('active')){
        bluOff.style.display = 'flex'
        bluOn.style.display = 'none'
        third.classList.remove('active');
        changeElem.textContent = 'off'
    }
    else{
        third.classList.add('active');
        bluOff.style.display = 'none'
        
        changeElem.textContent = 'on'
        bluOn.style.display = 'block'
        reuseThird();
        
    }
    // console.log(bluSlide);
})


function reuseSlide(){
    
}

slide.addEventListener('click',()=>{
    slide.classList.toggle('active');
    if(slide.classList.contains('active')){
        data.classList.remove('active');
        change.textContent= 'off';
        removeSel();
        mtnCheck.classList.remove('active');
        gloCheck.classList.remove('active');
    }
    else{
        mtn.classList.add('active');
        mtnCheck.classList.add('active');
        data.classList.add('active');
        reuseData();
        changes.textContent = 'MTN NG'
    }
})


airplane.addEventListener('click',()=>{
    airplane.classList.toggle('plane');
    if(airplane.classList.contains('plane')){
            
        // console.log(changes);
        changes.textContent = 'Mobile data';
        change.textContent = 'Not available';
        data.classList.remove('active');
        muted.classList.add('muted');
        blue.classList.remove('active')
        third.classList.remove('active')
        changeEl.textContent = 'off'
        changeElem.textContent = 'off'
        data.style.pointerEvents = 'none';
        
    }
    
    
    
    else{
        
        muted.classList.remove('muted');
        changes.textContent = 'MTN NG';
        // change.textContent = 'on';
        // console.log(data);
        // data.classList.add('active');
        reuseData();
        reuseThird();
        reuseBlue();
        data.style.pointerEvents = 'visible';
    }
    
})

rot.addEventListener('click',()=>{
    rote.classList.toggle('rotation');
})

rot2.addEventListener('click',()=>{
    rote2.classList.toggle('rotation');
})

function removeSel(){
    pack.forEach(sel =>{
        
        sel.classList.remove('active');

    })

}





pack.forEach(sel=>{
    console.log(sel);
    sel.addEventListener('click', ()=>{
        removeSel();
        if(sel.classList.contains('mtn')){

            data.classList.add('active');
            change.textContent = 'on'
            sel.classList.add('active');
            
            mtnCheck.classList.add('active');
            slide.classList.remove('active');
            gloCheck.classList.remove('active');
            changes.textContent = 'MTN NG';
            
            console.log('clicked');
            
        }
        
        
        
        
        
        else if(sel.classList.contains('glo')){
            changes.textContent = 'GLO NG';
            mtnCheck.classList.remove('active');
            gloCheck.classList.add('active');
            slide.classList.remove('active');
            data.classList.add('active');
            
        }
        
        
        else{
            slide.classList.add('active');
            gloCheck.classList.remove('active');
            changes.textContent = 'MTN NG'
            mtnCheck.classList.remove('active');
            data.classList.add('active');
            
            
            
            
        }
        
        
    })
})


btn3.addEventListener('click', ()=>{
    mobileMore.classList.add('in')
})

closeIn.addEventListener('click', ()=>{
    mobileMore.classList.remove('in')
})

btn4.addEventListener('click', ()=>{
    wifiPage.classList.add('in')
})

closeBtn4.addEventListener('click', ()=>{
    wifiPage.classList.remove('in')
})


btn5.addEventListener('click', ()=>{
    bluetoothPage.classList.add('in')
})

closeBtn5.addEventListener('click', ()=>{
    bluetoothPage.classList.remove('in')
})




function remove(){
    col.forEach(colm =>{
        
        colm.classList.remove('active');

    })

}
function removeSecond(){
    coll.forEach(colm =>{
        
        colm.classList.remove('active');

    })

}

col.forEach(colm =>{
    colm.addEventListener('click',()=>{
        remove();
        colm.classList.add('active');
    })
})

coll.forEach(colmn =>{
    colmn.addEventListener('click',()=>{
        removeSecond();
        colmn.classList.add('active');
    })
})

letter.addEventListener('click',()=>{

    if(letter.classList.contains('active')){
        progress.classList.remove('active');
    }
    else{
        progress.classList.add('active');
        
    }


})

searchInput.addEventListener('keyup',()=>{
    const val = searchInput.value.toLowerCase();
    console.log(val);

    update.forEach( call =>{
        let name = call.textContent.toLowerCase();
        console.log(name);
            if(name.indexOf(val) != -1){
                call.style.display = 'flex';
            }
            else{
                call.style.display = 'none';
            }
    

    } )
    
    
    // content.forEach(chat=>{
    //     console.log(chat);
    //     let name = chat.querySelectorAll('h3').textContent.toLowerCase();
    // })
})


cog.addEventListener('click',()=>{
    // console.log('clicked');
    setPage.classList.add('swipe');
})

btn2.addEventListener('click',()=>{
    // console.log('clicked');
    setPage.classList.remove('swipe');
})




box.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('active');
        if(bellBox.classList.contains('active')){
            bell.classList.add('none');
            noBell.classList.remove('none');
        }

      
        else{
            bell.classList.remove('none');
            noBell.classList.add('none');



        }
        

      
        
    })
});


function reuseData(){
    
    if(data.classList.contains('active')){
        change.textContent = 'on';
    }
    else{
        change.textContent = 'off';
    }
}

data.addEventListener('click', ()=>{
    data.classList.toggle('active');
    reuseData();

    console.log(change)

})

function reuseBlue(){
    
    if(blue.classList.contains('active')){
        changeEl.textContent = 'on';
    }
    else{
        changeEl.textContent = 'off';
    }
    
}


blue.addEventListener('click', ()=>{
    blue.classList.toggle('active');
    reuseBlue();

})

function reuseThird(){
    
    if(third.classList.contains('active')){
        changeElem.textContent = 'on';
    }
    else{
        changeElem.textContent = 'off';
    }
    
}


third.addEventListener('click', ()=>{
    third.classList.toggle('active');
    reuseThird();

})


function reuseFourth(){
    
    fourth.classList.toggle('active');

    if(fourth.classList.contains('active')){
        changeElement.innerHTML = 'on';
    }
    else{
        changeElement.textContent = 'off';
    }
}


fourth.addEventListener('click', ()=>{
    reuseFourth();

})

one.addEventListener('click', ()=>{
    MobileModal.classList.add('showmodal');
    reuseData();
    slide.classList.remove('active')
    mtn.classList.add('active');
    mtnCheck.classList.add('active');
    // slide.classList.add('active')
    // data.classList.add('active');
    
})

MobileModal.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('mobile-data')){
        MobileModal.classList.remove('showmodal');
    }
})

two.addEventListener('click', ()=>{
    wifiModal.classList.add('showmodal-el');
    // console.log('clicked');
    wifiSlide.classList.toggle('active');
    if(wifiSlide.classList.contains('active')){
        wifiOff.style.display = 'flex'
        wifiOn.style.display = 'none'
        blue.classList.add('active');
        changeEl.textContent = 'off'
    }
    else{
        blue.classList.remove('active');
        wifiOff.style.display = 'none'
        wifiOn.style.display = 'block'
        changeEl.textContent = 'on'
        reuseBlue();
        
    }

    // wifiSlide.classList.remove('active');
    // wifiOn.style.display = 'block';
})

wifiModal.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('wifi-modal')){
        wifiModal.classList.remove('showmodal-el');
    }
})


three.addEventListener('click', ()=>{
    bluetoothModal.classList.add('showmodal-elem');
    // console.log('clicked')
    bluSlide.classList.toggle('active');
    if(bluSlide.classList.contains('active')){
        bluOff.style.display = 'flex'
        bluOn.style.display = 'none'
        third.classList.add('active');
        changeElem.textContent = 'off'
    }
    else{
        third.classList.remove('active');
        bluOff.style.display = 'none'
        
        changeElem.textContent = 'on'
        bluOn.style.display = 'block'
        reuseThird();
        
    }
    
    // bluSlide.classList.remove('active');
    // bluOn.style.display = 'block';
})

bluetoothModal.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('bluetooth-modal')){
        bluetoothModal.classList.remove('showmodal-elem');
    }
})
