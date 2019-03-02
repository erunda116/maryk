document.addEventListener('DOMContentLoaded', function() {
    /*init variables*/

    var itog = document.querySelector('#itog'); //base unit
    var base = document.querySelector('#base'); //itog unit
    var itogLabel = document.querySelector('#itogLabel'); //itog label
    var rangeSailerStatus = document.querySelector('#rangeSailerStatus'); //range

//konsultant
    var konsultant = document.querySelector('#konsultant'); //консультант блок для показать\скрыть
    var konsultantVal = document.querySelector('#konsultantVal'); //консультант вводимое значение
    var konsultantNum = document.querySelector('#konsultantNum'); //консультант расчетное значение
    var konsultantDiscount = document.querySelector('#konsultantDiscount'); //консультант select скидка
    var konsultantProfit = document.querySelector('#konsultantProfit'); //консультант доход


//from master-konsultant to pre-director
    var bigkonsultant = document.querySelector('#bigkonsultant'); //блок для показать\скрыть
    var bigkonsultantVal = document.querySelector('#bigkonsultantVal'); //вводимое значение
    var bigkonsultantNum = document.querySelector('#bigkonsultantNum'); //расчетное значение
    var bigkonsultantAct = document.querySelector('#bigkonsultantAct'); //количество активных консультантов
    var bigkonsultantDiscount = document.querySelector('#bigkonsultantDiscount'); //скидка
    var bigkonsultantDiscountDop = document.querySelector('#bigkonsultantDiscountDop'); // доп. скидка


//director
    var director = document.querySelector('#director'); //директор блок для показать\скрыть
    var director2 = document.querySelector('#director2'); //директор блок для показать\скрыть2
    var directorVal = document.querySelector('#directorVal'); //директор вводимое значение
    var directorNum = document.querySelector('#directorNum'); //директор расчетное значение
    var directorDiscount = document.querySelector('#directorDiscount'); //директор скидка

    var director2Num1 = document.querySelector('#director2Num1'); //директор расчетное значение 1
    var director2Num2 = document.querySelector('#director2Num2'); //директор расчетное значение 1


//bigdirector
    var bigdirector = document.querySelector('#bigdirector'); //супердиректор блок для показать\скрыть
    var bigdirectorVal = document.querySelector('#bigdirectorVal'); //вводимое значение
    var bigdirectorDiscount = document.querySelector('#bigdirectorDiscount'); //директор скидка
    var bigdirectorProfit = document.querySelector('#bigdirectorProfit'); //директор 1 линия

//biggestdirector
    var biggestdirector = document.querySelector('#biggestdirector'); //супердиректор блок для показать\скрыть
    var biggestdirector2 = document.querySelector('#biggestdirector2'); //супердиректор2 блок для показать\скрыть
    var biggestdirectorVal2 = document.querySelector('#biggestdirectorVal2'); //супердиректор вводимое значение 2 лини
    var biggestdirectorVal3 = document.querySelector('#biggestdirectorVal3'); //супердиректор вводимое значение 3 линии
    var biggestdirectorNum21 = document.querySelector('#biggestdirectorNum21'); //супердиректор расчетнон значение 2 линии 1
    var biggestdirectorNum22 = document.querySelector('#biggestdirectorNum22'); //супердиректор расчетнон значение 2 линии 2
    var biggestdirectorNum31 = document.querySelector('#biggestdirectorNum31'); //супердиректор расчетнон значение 3 линии 1
    var biggestdirectorNum32 = document.querySelector('#biggestdirectorNum32'); //супердиректор расчетнон значение 3 линии 2
    var biggestdirectorAct = document.querySelector('#biggestdirectorAct'); //супердиректор его подчиненные директоры

    var biggestdirector2Num2 = document.querySelector('#biggestdirector2Num2'); //супердиректор расчетное последний блок 2 линия
    var biggestdirector2Num3 = document.querySelector('#biggestdirector2Num3'); //супердиректор расчетное последний блок 3 линия
    var biggestdirector2NumAct = document.querySelector('#biggestdirector2NumAct'); //супердиректор расчетное последний блок консульт


    var sailerStatus = document.querySelectorAll('.sailer-status'); //base unit

    /*show/hide blocks*/
    var nowSailerPosition = '1';
    for (var i = 0; i < sailerStatus.length; i++) {
        sailerStatus[i].addEventListener('click', showSallerBlocks);
    }

    function showSallerBlocks(e) {
        nowSailerPosition = this.getAttribute('data-level');
        rangeSailerStatus.value = this.getAttribute('data-level');
            e.preventDefault();
        if (this.value == 'sailer-1') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "none";
            director.style.display = "none";
            bigdirector.style.display = "none";
        }
        if (this.value == 'sailer-2') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "none";
            director2.style.display = "none";
            bigdirector.style.display = "none";
        }
        if (this.value == 'sailer-3') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "none";
        }
        if (this.value == 'sailer-4') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "block";
            director2.style.display = "block";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "none";
            biggestdirector2.style.display = "none";
        }
        if (this.value == 'sailer-5') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "block";
            biggestdirector2.style.display = "block";
        }

    };

    //range-change
    rangeSailerStatus.oninput = function (){
        if (+this.value == 1) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "none";
            director.style.display = "none";
            bigdirector.style.display = "none";
        }
        if (+this.value > 1 && +this.value <= 5) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "none";
            director2.style.display = "none";
            bigdirector.style.display = "none";
        }
        if (+this.value == 6) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "none";
        }
        if (+this.value > 6 && +this.value <= 10) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "block";
            director2.style.display = "block";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "none";
            biggestdirector2.style.display = "none";
        }
        if (this.value == 11) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "block";
            biggestdirector2.style.display = "block";
        }
    };


    /*calculate table*/
    //значение в рублях

    konsultantVal.oninput = function () {
            var roubleVal = +this.value * +base.value;
            konsultantNum.value = roubleVal;
            konsultantProfit.value = konsultantNum.value * +konsultantDiscount.value / 100;

        itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    konsultantDiscount.onchange = function () {
        var roubleVal = +konsultantVal.value * +base.value;
        konsultantNum.value = roubleVal;
        konsultantProfit.value = +konsultantNum.value * +this.value / 100;

        itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    bigkonsultantVal.oninput = function () {
        var roubleVal = +this.value * +base.value;
        bigkonsultantNum.value = roubleVal;
        if(+bigkonsultantAct.value <= 2){
            bigkonsultantDiscount.value = 2;
        } else if(+bigkonsultantAct.value > 2 && +bigkonsultantAct.value <= 4){
            bigkonsultantDiscount.value = 4;
        } else if(+bigkonsultantAct.value > 4 && +bigkonsultantAct.value <= 7){
            bigkonsultantDiscount.value = 8;
        } else if(+bigkonsultantAct.value > 7){
            bigkonsultantDiscount.value = 12;
        }
        bigkonsultantDiscountDop.value = bigkonsultantNum.value * bigkonsultantDiscount.value / 100 / 2;

        itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    bigkonsultantAct.oninput = function () {
        if(+this.value <= 2){
            bigkonsultantDiscount.value = 2;
        } else if(+this.value > 2 && +this.value <= 4){
            bigkonsultantDiscount.value = 4;
        } else if(+this.value > 4 && +this.value <= 7){
            bigkonsultantDiscount.value = 8;
        } else if(+this.value > 7){
            bigkonsultantDiscount.value = 12;
        }
        bigkonsultantDiscountDop.value = bigkonsultantNum.value * bigkonsultantDiscount.value / 100 / 2;

        itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    directorVal.oninput = function () {
        var roubleVal = +this.value * +base.value;
        directorNum.value = roubleVal;
        if(+this.value <= 99){
            directorDiscount.value = 5;
            director2Num2.value = 0;
        } else if(+this.value > 99 && +this.value <= 124){
            directorDiscount.value = 11;
            director2Num2.value = 0;
        } else if(+this.value > 124 && +this.value <= 149){
            directorDiscount.value = 11;
            director2Num2.value = 16000;
        } else if(+this.value > 149 && +this.value <= 199){
            directorDiscount.value = 11;
            director2Num2.value = 22000;
        } else if(+this.value > 199 && +this.value <= 299){
            directorDiscount.value = 12;
            director2Num2.value = 28000;
        } else if(+this.value > 299 && +this.value <= 399){
            directorDiscount.value = 13;
            director2Num2.value = 38000;
        } else if(+this.value > 399 && +this.value <= 499){
            directorDiscount.value = 13;
            director2Num2.value = 50000;
        } else if(+this.value > 499 && +this.value <= 699){
            directorDiscount.value = 13;
            director2Num2.value = 65000;
        } else if(+this.value > 699 && +this.value <= 899){
            directorDiscount.value = 13;
            director2Num2.value = 85000;
        } else if(+this.value > 899){
            directorDiscount.value = 13;
            director2Num2.value = 120000;
        }
        director2Num1.value = directorNum.value * directorDiscount.value / 100 / 2;

        itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    bigdirectorVal.oninput = function () {

    };

    bigdirectorProfit.oninput = function () {

    };

    biggestdirectorVal2.oninput = function () {

    };

    biggestdirectorVal3.oninput = function () {

    };

    biggestdirectorAct.oninput = function () {

    };

});



