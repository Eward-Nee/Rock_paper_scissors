let wintxt = document.getElementById('win')
let losetxt = document.getElementById('lose')
let tietxt = document.getElementById('tie')
let leveltxt = document.getElementById('level')

let sMode = ``
let cPlay = ``
let prev = ``
let preprev = ``
let rWeight = 0
let pWeight = 0
let cWeight = 0
let iWin = 0
let iLose = 0
let iTie = 0

const btnEasy = document.getElementById('btnEasy')
const btnMedium = document.getElementById('btnMedium')
const btnHard = document.getElementById('btnHard')
const btnRandom = document.getElementById('btnRandom')

btnEasy.addEventListener('click', event => {
    sMode = event.target.innerHTML
    leveltxt.textContent = sMode
})
btnMedium.addEventListener('click', event => {
    sMode = event.target.innerHTML
    leveltxt.textContent = sMode
})
btnHard.addEventListener('click', event => {
    sMode = event.target.innerHTML
    leveltxt.textContent = sMode
})
btnRandom.addEventListener('click', event => {
    sMode = event.target.innerHTML
    leveltxt.textContent = sMode
})

function btnClick(tipe) {

    if (sMode === ``) {
        alert('Error: please first chose a mode:')
    } else {

        function wayOfPlay() {
            switch (sMode) {
                case `Easy 😃`:

                    switch (prev) {
                        case `r`:
                            cPlay = `p`;
                            break;

                        case `p`:
                            cPlay = `c`;
                            break;

                        case `c`:
                            cPlay = `r`;
                            break;

                        case ``:
                            cPlay = `r`;
                            break;

                    };

                    break;

                case `Medium 😐`:

                    switch (preprev) {
                        case `r`:
                            cPlay = `p`;
                            break;

                        case `p`:
                            cPlay = `c`;
                            break;

                        case `c`:
                            cPlay = `r`;
                            break;

                        case ``:
                            cPlay = `r`;
                            break;

                    };

                    break;

                case `Hard 😬`:

                    if (prev === preprev && prev === tipe) {
                        if (prev === `c`) {
                            cPlay = `r`
                        } else if (prev === `r`) {
                            cPlay = `p`
                        } else if (prev === `p`) {
                            cPlay = `c`
                        };

                    } else {
                        switch (prev) {
                            case `r`:

                                if (pWeight > 4) {
                                    pWeight = 0
                                    rWeight = 0
                                    cWeight = 0
                                };
                                pWeight++;



                                if (pWeight > rWeight) {

                                    if (pWeight > cWeight) {
                                        cPlay = `p`
                                    } else if (pWeight < cWeight) {
                                        cPlay = `c`
                                    }

                                } else if (pWeight < rWeight) {

                                    if (cWeight > rWeight) {
                                        cPlay = `c`
                                    } else if (cWeight < rWeight) {
                                        cPlay = `r`
                                    }

                                } else {
                                    if (randomRange(3, 1) === 1) {
                                        cPlay = `r`
                                    } else if (randomRange(3, 1) === 2) {
                                        cPlay = `p`
                                    } else {
                                        cPlay = `c`
                                    };
                                };

                                break;

                            case `p`:
                                if (cWeight > 4) {
                                    pWeight = 0
                                    rWeight = 0
                                    cWeight = 0
                                };
                                cWeight++;
                                if (cWeight > rWeight) {

                                    if (pWeight > rWeight) {
                                        cPlay = `p`
                                    } else if (pWeight < rWeight) {
                                        cPlay = `c`
                                    }

                                } else if (cWeight < rWeight) {

                                    if (pWeight > rWeight) {
                                        cPlay = `c`
                                    } else if (pWeight < rWeight) {
                                        cPlay = `r`
                                    }

                                } else {
                                    if (randomRange(3, 1) === 1) {
                                        cPlay = `r`
                                    } else if (randomRange(3, 1) === 2) {
                                        cPlay = `p`
                                    } else {
                                        cPlay = `c`
                                    };
                                };

                                break;

                            case `c`:
                                if (rWeight > 4) {
                                    pWeight = 0
                                    rWeight = 0
                                    cWeight = 0
                                };
                                rWeight++;
                                if (pWeight > rWeight) {

                                    if (pWeight > cWeight) {
                                        cPlay = `p`
                                    } else if (pWeight < cWeight) {
                                        cPlay = `c`
                                    }

                                } else if (pWeight < rWeight) {

                                    if (cWeight > rWeight) {
                                        cPlay = `c`
                                    } else if (cWeight < rWeight) {
                                        cPlay = `r`
                                    }

                                } else {
                                    if (randomRange(3, 1) === 1) {
                                        cPlay = `r`
                                    } else if (randomRange(3, 1) === 2) {
                                        cPlay = `p`
                                    } else {
                                        cPlay = `c`
                                    };
                                };
                                break;

                            case ``:

                                if (randomRange(3, 1) === 1) {
                                    cPlay = `r`
                                } else if (randomRange(3, 1) === 2) {
                                    cPlay = `p`
                                } else if (randomRange(3, 1) === 2) {
                                    cPlay = `c`
                                };
                                break;

                        };
                    };


                    break;

                case `Random 😵‍💫`:



                    if (randomRange(3, 1) === 1) {
                        cPlay = `r`
                    } else if (randomRange(3, 1) === 2) {
                        cPlay = `p`
                    } else {
                        cPlay = `c`
                    };

                    break;

            }
        }
        wayOfPlay()
        preprev = prev
        prev = tipe

        switch (tipe) {
            case `r`:
                switch (cPlay) {
                    case `r`:

                        iTie++;
                        alert(`Its a Tie 😑`);

                        break;
                    case `c`:
                        iWin++;
                        alert(`You won 😡`);
                        break;
                    case `p`:
                        iLose++;
                        alert(`You lost, you suck 🤓`);

                        break;

                };
                break;
            case `p`:

                switch (cPlay) {
                    case `c`:
                        iLose++;
                        alert(`You lost, you suck 🤓`);
                        break;
                    case `p`:
                        iTie++;
                        alert(`Its a Tie 😑`);

                        break;
                    case `r`:
                        iWin++;
                        alert(`You won 😡`);

                        break;

                };

                break;
            case `c`:

                switch (cPlay) {
                    case `p`:
                        iWin++;
                        alert(`You won 😡`);

                        break;
                    case `r`:
                        iLose++;
                        alert(`You lost, you suck 🤓`);
                        break;
                    case `c`:
                        iTie++;
                        alert(`Its a Tie 😑`);
                        break;

                };

                break;

        }

        wintxt.textContent = `Wins: ${iWin}`
        losetxt.textContent = `lose: ${iLose}`
        tietxt.textContent = `tie: ${iTie}`

    }

}


function randomRange(iMax, iMin) {
    return Math.floor(Math.random() * (iMax - iMin + 1)) + iMin
}