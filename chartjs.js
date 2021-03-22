//male chart data
const maleChartData = {
    labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80
    ],
    // below is the male survival stat
    datasets: [{
        label: 'Survived',
        borderWidth: 1,
        backgroundColor: '#587B7F',
        data: [
            8,
            1,
            4,
            2,
            0,
            1,
            0,
            1,
            2,
            0,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            2,
            3,
            1,
            1,
            1,
            1,
            4,
            3,
            6,
            2,
            3,
            1,
            3,
            7,
            0,
            2,
            3,
            4,
            1,
            1,
            1,
            1,
            0,
            3,
            0,
            1,
            2,
            0,
            0,
            3,
            2,
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ]
    }, {
        //below is the male death stat
        label: 'Died',
        borderWidth: 1,
        backgroundColor: '#E94F37',
        data: [
            -2,
            -3,
            0,
            -3,
            0,
            0,
            -2,
            -1,
            -2,
            -1,
            -2,
            0,
            0,
            -2,
            -1,
            -10,
            -6,
            -12,
            -16,
            -10,
            -16,
            -14,
            -9,
            -13,
            -14,
            -10,
            -6,
            -16,
            -10,
            -13,
            -7,
            -8,
            -9,
            -9,
            -7,
            -11,
            -4,
            -5,
            -7,
            -6,
            -2,
            -7,
            -3,
            -5,
            -4,
            -3,
            -7,
            -2,
            -2,
            -4,
            -5,
            -3,
            0,
            -5,
            -1,
            -2,
            -1,
            -2,
            -2,
            -2,
            -3,
            -2,
            0,
            -2,
            -3,
            -1,
            0,
            0,
            0,
            -2,
            -2,
            0,
            0,
            -1,
            0
        ]
    }]

};

// female chart data
const femaleChartData = {
    labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64
    ],
    // below is the female survival stat
    datasets: [{
        label: 'Survived',
        borderWidth: 1,
        backgroundColor: '#587B7F',
        data: [
            2,
            1,
            5,
            4,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            2,
            3,
            4,
            5,
            5,
            8,
            7,
            0,
            4,
            10,
            4,
            14,
            2,
            3,
            5,
            5,
            5,
            9,
            5,
            2,
            6,
            4,
            8,
            7,
            0,
            4,
            4,
            5,
            2,
            3,
            1,
            2,
            3,
            0,
            1,
            3,
            2,
            4,
            1,
            2,
            1,
            3,
            1,
            1,
            0,
            3,
            0,
            1,
            0,
            1,
            2
        ]
    }, {
        //below is the female death stat
        label: 'Died',
        borderWidth: 1,
        backgroundColor: '#E94F37',
        data: [
            0,
            -3,
            -1,
            0,
            0,
            -1,
            0,
            0,
            -3,
            -1,
            -1,
            0,
            0,
            -1,
            0,
            -1,
            -1,
            -5,
            0,
            -2,
            -3,
            -2,
            -1,
            -2,
            -3,
            -2,
            -1,
            -2,
            -2,
            -2,
            -2,
            -1,
            0,
            0,
            0,
            0,
            -1,
            -1,
            -2,
            -1,
            -2,
            0,
            -1,
            -1,
            -3,
            0,
            -1,
            -1,
            0,
            -1,
            0,
            0,
            0,
            0,
            0,
            0,
            -1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    }]

};

//the fare statistic below
const fareChartData = {
    labels: [
        "1-10", "10.01-20", "20.01-30", "30.01-40", "40.01-50", "50.01-60", "60.01-70", "70.01-80", "80.01-90", "90.01-100", "100.01-150", "150.01-200", "200.01-250", "250.01-300"
    ],
    // below is the female survival stat
    datasets: [{
        fill: false,
        label: 'Percent of Survival',
        borderWidth: 1,
        backgroundColor: '#587B7F',
        borderColor: '#587B7F',
        data: [
            20.56,
            42.45,
            44.36,
            39.65,
            25,
            71.05,
            35.29,
            61.29,
            82.35,
            66.66,
            79.1,
            66.66,
            63.63,
            66.66,

        ]
    }, ]

};


// male chart statistic.
var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: maleChartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                fontSize: 20,
                fontColor: '#090909',
                fontFamily: 'IM fell english'
            },
            position: 'top',
        },
        title: {
            display: true,
            text: 'Male Survival Statistic',
            fontSize: 20,
            fontColor: '#090909',
            fontFamily: 'IM fell english'
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var value = tooltipItem.yLabel;
                    return value < 0 ? "Death: " + -value : "Survival: " + value;
                }
            }
        },
        scales: {
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    display: true,
                    labelString: '<- Died - Survived ->'
                },
                stacked: false,
                ticks: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    max: 16,
                    min: -16,
                    callback: function (value, index, values) {
                        return value < 0 ? -value : value;
                    }
                }
            }],
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    display: true,
                    labelString: 'Age'
                },
                ticks: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                }
            }],
        }
    }
});

//female statistic

var ctx2 = document.getElementById('myChart2').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: femaleChartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                fontSize: 20,
                fontColor: '#090909',
                fontFamily: 'IM fell english'
            },
            position: 'top',
        },
        title: {
            display: true,
            text: 'Female Survival Statistic',
            fontSize: 20,
            fontColor: '#090909',
            fontFamily: 'IM fell english'
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var value = tooltipItem.yLabel;
                    return value < 0 ? "Death: " + -value : "Survival: " + value;
                }
            }
        },
        scales: {
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    display: true,
                    labelString: '<- Died - Survived ->'
                },
                stacked: false,
                ticks: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    min: -14,
                    callback: function (value, index, values) {
                        return value < 0 ? -value : value;
                    }
                }
            }],
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Age',
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english'

                },
                ticks: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                }
            }],
        }
    }
});


function addData(chart, label, color, data) {
    chart.data.datasets.push({
        label: label,
        backgroundColor: color,
        data: data
    });
    chart.update();
}

//fare stat
var ctx3 = document.getElementById('myChart3').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: fareChartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                fontSize: 20,
                fontColor: '#090909',
                fontFamily: 'IM fell english'
            },
            position: 'top',
        },
        title: {
            display: true,
            text: 'Fare Survival Statistic',
            fontSize: 20,
            fontColor: '#090909',
            fontFamily: 'IM fell english'
        },
        tooltips: {

        },
        scales: {
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    display: true,
                    labelString: 'People'
                },
                stacked: false,
                ticks: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',

                }
            }],
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                    display: true,
                    labelString: '£ Fare Price'
                },
                ticks: {
                    fontSize: 20,
                    fontColor: '#090909',
                    fontFamily: 'IM fell english',
                }
            }],
        }
    }
});



//female probability data below
const femaleAge1 = 83.69
const femaleAge2 = 83.57
const femaleAge3 = 83.45
const femaleAge4 = 83.32
const femaleAge5 = 83.20
const femaleAge6 = 83.07
const femaleAge7 = 82.95
const femaleAge8 = 82.82
const femaleAge9 = 82.69
const femaleAge10 = 82.56
const femaleAge11 = 82.43
const femaleAge12 = 82.30
const femaleAge13 = 82.17
const femaleAge14 = 82.04
const femaleAge15 = 81.90
const femaleAge16 = 81.77
const femaleAge17 = 81.64
const femaleAge18 = 81.50
const femaleAge19 = 81.37
const femaleAge20 = 81.23
const femaleAge21 = 81.09
const femaleAge22 = 80.95
const femaleAge23 = 80.81
const femaleAge24 = 80.68
const femaleAge25 = 80.53
const femaleAge26 = 80.39
const femaleAge27 = 80.25
const femaleAge28 = 80.11
const femaleAge29 = 79.97
const femaleAge30 = 79.82
const femaleAge31 = 79.68
const femaleAge32 = 79.53
const femaleAge33 = 79.38
const femaleAge34 = 79.24
const femaleAge35 = 79.09
const femaleAge36 = 78.94
const femaleAge37 = 78.79
const femaleAge38 = 78.64
const femaleAge39 = 78.49
const femaleAge40 = 78.34
const femaleAge41 = 78.18
const femaleAge42 = 78.03
const femaleAge43 = 77.87
const femaleAge44 = 77.72
const femaleAge45 = 77.56
const femaleAge46 = 77.41
const femaleAge47 = 77.25
const femaleAge48 = 77.09
const femaleAge49 = 76.93
const femaleAge50 = 76.77
const femaleAge51 = 76.61
const femaleAge52 = 76.45
const femaleAge53 = 76.29
const femaleAge54 = 76.13
const femaleAge55 = 75.96
const femaleAge56 = 75.80
const femaleAge57 = 75.63
const femaleAge58 = 75.47
const femaleAge59 = 75.30
const femaleAge60 = 75.13
const femaleAge61 = 74.96
const femaleAge62 = 74.80
const femaleAge63 = 74.63
const femaleAge64 = 74.46
const femaleAge65 = 74.28
const femaleAge66 = 74.11
const femaleAge67 = 73.94
const femaleAge68 = 73.77
const femaleAge69 = 73.59
const femaleAge70 = 73.42
const femaleAge71 = 73.24
const femaleAge72 = 73.06
const femaleAge73 = 72.89
const femaleAge74 = 72.71
const femaleAge75 = 72.53
const femaleAge76 = 72.35
const femaleAge77 = 72.17
const femaleAge78 = 71.99
const femaleAge79 = 71.81

//male probability statistic

const maleAge1 = 34.6
const maleAge2 = 34.39
const maleAge3 = 34.19
const maleAge4 = 33.99
const maleAge5 = 33.79
const maleAge6 = 33.59
const maleAge7 = 33.39
const maleAge8 = 33.19
const maleAge9 = 32.99
const maleAge10 = 32.79
const maleAge11 = 32.59
const maleAge12 = 32.39
const maleAge13 = 32.2
const maleAge14 = 32
const maleAge15 = 31.81
const maleAge16 = 31.61
const maleAge17 = 31.42
const maleAge18 = 31.23
const maleAge19 = 31.03
const maleAge20 = 30.84
const maleAge21 = 30.65
const maleAge22 = 30.46
const maleAge23 = 30.27
const maleAge24 = 30.08
const maleAge25 = 29.89
const maleAge26 = 29.7
const maleAge27 = 29.52
const maleAge28 = 29.33
const maleAge29 = 29.14
const maleAge30 = 28.96
const maleAge31 = 28.77
const maleAge32 = 28.59
const maleAge33 = 28.41
const maleAge34 = 28.22
const maleAge35 = 28.04
const maleAge36 = 27.86
const maleAge37 = 27.68
const maleAge38 = 27.5
const maleAge39 = 27.32
const maleAge40 = 27.15
const maleAge41 = 26.97
const maleAge42 = 26.79
const maleAge43 = 26.62
const maleAge44 = 26.44
const maleAge45 = 26.27
const maleAge46 = 26.09
const maleAge47 = 25.92
const maleAge48 = 25.75
const maleAge49 = 25.58
const maleAge50 = 25.41
const maleAge51 = 25.24
const maleAge52 = 25.07
const maleAge53 = 24.9
const maleAge54 = 24.73
const maleAge55 = 24.56
const maleAge56 = 24.4
const maleAge57 = 24.23
const maleAge58 = 24.07
const maleAge59 = 23.9
const maleAge60 = 23.74
const maleAge61 = 23.58
const maleAge62 = 23.42
const maleAge63 = 23.26
const maleAge64 = 23.1
const maleAge65 = 22.94
const maleAge66 = 22.78
const maleAge67 = 22.62
const maleAge68 = 22.46
const maleAge69 = 22.31
const maleAge70 = 22.15
const maleAge71 = 22
const maleAge72 = 21.84
const maleAge73 = 21.69
const maleAge74 = 21.54
const maleAge75 = 21.39
const maleAge76 = 21.24
const maleAge77 = 21.09
const maleAge78 = 20.94
const maleAge79 = 20.79
const maleAge80 = 20.64
const maleAge81 = 20.49
const maleAge82 = 20.35
const maleAge83 = 20.2
const maleAge84 = 20.06
const maleAge85 = 19.92
const maleAge86 = 19.77
const maleAge87 = 19.63
const maleAge88 = 19.49
const maleAge89 = 19.35
const maleAge90 = 19.21
const maleAge91 = 19.07
const maleAge92 = 18.93
const maleAge93 = 18.79
const maleAge94 = 18.66
const maleAge95 = 18.52
const maleAge96 = 18.39
const maleAge97 = 18.25
const maleAge98 = 18.12
const maleAge99 = 17.98
const maleAge100 = 17.85



// the game is below
const startButton = document.getElementById('startButton');
const playAgainButton = document.getElementById('playAgainButton');
const game = document.getElementById('sinkOrSwim');
const ageInput = document.getElementById('ageInput');
const sexInput = document.getElementById('sexInput');
const startGameMusic = document.getElementById('startGameMusic');
const titleScreenMusic = document.getElementById('titleScreenMusic');
let userInputSex = document.getElementById('sexInput');
let userInputAge = document.getElementById('ageInput');
const buttonMusic = document.getElementById('buttonMusic');
var probabilityResult = document.getElementById('probabilityResult');
let isStart = false;
let i = 0;
var value = 'Based on the data we have received.... your chance of survival is';
const iceBerg = document.getElementById('iceBerg');
const titanic = document.getElementById('titanic');
const SurvivedOrDied = document.getElementById('winOrLose');
const finishMusic = document.getElementById('finishMusic');
const explosion = document.getElementById('explosion');



function typeWriter() {
    if (i < value.length) {
        probabilityResult.innerHTML += value.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }

}



//the button function

function started() {
    if (isStart === false) {
        titanic.style.left = 60 + "%";
        startButton.innerHTML = "Start";
        SurvivedOrDied.innerHTML = "";
        ageInput.style.visibility = "visible";
        sexInput.style.visibility = "visible";
        buttonMusic.play();
        setTimeout(function () {
            titleScreenMusic.play();
        }, 500)
        isStart = 1;
    } else if (isStart == 1) {
        buttonMusic.play();
        ageInput.style.visibility = "hidden";
        sexInput.style.visibility = "hidden";
        document.getElementById('result').style.visibility = "visible";
        probabilityResult.style.visibility = "visible";
        typeWriter();
        setTimeout(function () {
            document.getElementById('result').innerHTML = eval(userInputSex.value + 'Age' + userInputAge.value) + '%' + ' <br> <br> Would you like to continue?'
        }, 2750)
        isStart = 2;
    } else if (isStart == 2) {
        document.getElementById('result').innerHTML = "pok";
        probabilityResult.innerHTML = "";
        buttonMusic.play();
        setTimeout(function () {
            startGameMusic.play();
        }, 500)
        titleScreenMusic.pause();
        startButton.style.visibility = "hidden";
        document.getElementById('result').style.visibility = "hidden";
        probabilityResult.style.visibility = "hidden";
        survivalAction(survivalResult());
        isStart = 3;
    }
}



//the calculation whether user survived or died.
function survivalResult() {
    const random = Math.floor(Math.random() * (1000 - 100) + 100) / 10;
    if (random >= 0 && random <= eval(userInputSex.value + 'Age' + userInputAge.value)) {
        return 'survived'
    } else {
        return 'died'
    }
}


// the act on whether ship sink or swim
function survivalAction(value) {
    if (value == 'survived') {
        survivedAction();
    } else if (value == 'died') {
        diedAction();
    }
}




function diedAction() {
    let titanicPosition = 60;
    let id = setInterval(frame, 150);

    function frame() {
        if (titanicPosition == 60) {
            titanicPosition--
            titanic.style.left = titanicPosition + "%";
        } else if (titanicPosition == 1) {
            clearInterval(id);
            finishMusic.play();
            titanic.style.visibility = "hidden";
            iceBerg.style.visibility = "hidden";
            explosion.style.visibility = "visible";
            SurvivedOrDied.innerHTML = "You Died!...";
        } else {
            titanicPosition--
            titanic.style.left = titanicPosition + "%";
        }
    };
}

function survivedAction() {
    let titanicPosition = 60;
    let id = setInterval(frame, 150);

    function frame() {
        if (titanicPosition == 60) {
            titanicPosition--
            titanic.style.left = titanicPosition + "%";
        } else if (titanicPosition == 1) {
            clearInterval(id);
            finishMusic.play();
            titanic.style.visibility = "hidden";
            iceBerg.style.visibility = "hidden";
            explosion.style.visibility = "visible";
            SurvivedOrDied.innerHTML = "You Survived!...";
        } else {
            titanicPosition--;
            titanic.style.left = titanicPosition + "%";
        }
    };
}
//eventHandler