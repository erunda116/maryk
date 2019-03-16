document.addEventListener('DOMContentLoaded', function() {
    /*init variables*/

    var itog = document.querySelector('#itog'); //base unit
    var base = document.querySelector('#base'); //itog unit
    var itogLabel = document.querySelector('#itogLabel'); //itog label
    var rangeSailerStatus = document.querySelector('#rangeSailerStatus'); //range
    var heartRange = document.querySelector('#heartRange');

//konsultant
    var konsultant = document.querySelector('#konsultant'); //консультант блок для показать\скрыть
    var konsultantVal = document.querySelector('#konsultantVal'); //консультант вводимое значение
    var konsultantNum = document.querySelector('#konsultantNum'); //консультант расчетное значение
    //var konsultantDiscount = document.querySelector('#konsultantDiscount'); //консультант select скидка
    var konsultantDiscountRadio = document.querySelectorAll('input[name="radioBtn"]'); // консультант radio скидка
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
    var labelFordirector2Num2 = document.querySelector('#labelFordirector2Num2'); //директор расчетное значение label


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
    var hideThenKingDirector =  document.querySelector('#hideThenKingDirector'); //супердиректор количество консультов


    var sailerStatus = document.querySelectorAll('.sailer-status'); //sailer status

//table
    var tableFirstLineGroups = document.querySelector('#tableFirstLineGroups'); // таблица 1 линииg
    var tableVolume = document.querySelectorAll('.table-volume'); //table groups
    var showBiggestdirect = document.querySelectorAll('.show-biggestdirect'); //table for biggest direct


//warning-messages
    var warning1 = document.querySelector('#warning1');
    var warning2 = document.querySelector('#warning2');


//mask only numbers and dot and letters for grops names
    var allInputs = document.querySelectorAll('input');
    for (var i = 0; i < allInputs.length; i++) {
        allInputs[i].onkeypress = function(e){
            if(this.classList.contains('table-name')){
                //console.log(e.keyCode);
                if (!(e.keyCode==95 || e.keyCode==45 || e.keyCode==1105 || e.keyCode==1025 || (e.keyCode>=1040 && e.keyCode<=1103) || (e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=97 && e.keyCode<=122) || (e.keyCode>47 && e.keyCode<58))) return false;
            } else {
                //console.log(e.keyCode);
                if (!(e.keyCode==8 || e.keyCode==46 || e.keyCode==44 ||(e.keyCode>47 && e.keyCode<58))) return false;
            }
        }
    }

//make constants
    base.value = 3500;
    var tax = 1.2;
    var disc = 0.6;


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
            director.style.display = "block";
            director2.style.display = "block";
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
            hideThenKingDirector.style.display = "block";
        }
        if (this.value == 'sailer-5') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "block";
            biggestdirector2.style.display = "block";

            hideThenKingDirector.style.display = "none";
        }
        if(nowSailerPosition < 11){
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "none";
            }
            warning2.style.display = "block";
            director2Num2.style.display = "block";
            labelFordirector2Num2.style.display = "block";
        } else{
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "table-cell";
            }
            warning2.style.display = "none";
            director2Num2.style.display = "none";
            labelFordirector2Num2.style.display = "none";
        }
        recalculatePersent(nowSailerPosition);
        changeHeart(nowSailerPosition);
        recalculate(nowSailerPosition);
        console.log(nowSailerPosition);
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
            director.style.display = "block";
            director2.style.display = "block";
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
        nowSailerPosition = this.value;
        if(nowSailerPosition < 11){
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "none";
            }
            warning2.style.display = "block";
            director2Num2.style.display = "block";
            labelFordirector2Num2.style.display = "block";
        } else{
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "table-cell";
            }
            warning2.style.display = "none";
            director2Num2.style.display = "none";
            labelFordirector2Num2.style.display = "none";
        }
        recalculatePersent(this.value);
        changeHeart(this.value);
        recalculate(this.value);
    };

//re-calculate summ value than user change sail-level
    function recalculate(sailPosition){
        if(+sailPosition == 1){
            itog.value = Math.round(+konsultantProfit.value);
        } else if(+sailPosition > 1 && +sailPosition <= 5){
            itog.value = Math.round(+konsultantProfit.value + +bigkonsultantDiscountDop.value);
        } else if(+sailPosition == 6){
            itog.value = Math.round(+konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
                + +director2Num2.value);
        } else if(+sailPosition > 6 && +sailPosition <= 10){
            if(directorVal.value < 100) {
                bigdirectorProfit.value = 0;
            }
            itog.value = Math.round(+konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
                + +bigdirectorProfit.value + +director2Num2.value);
        } else if(+sailPosition == 11){
            itog.value = Math.round(+konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
                + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
                + +director2Num2.value + +biggestdirector2NumAct.value);
        }
    }

    function recalculatePersent(sailPosition){
        if(sailPosition < 11) {
            if (+directorVal.value <= 99) {
                directorDiscount.value = 5;
                director2Num2.value = 0;
            } else if (+directorVal.value > 99 && +directorVal.value <= 124) {
                directorDiscount.value = 11;
                director2Num2.value = 0;
            } else if (+directorVal.value > 124 && +directorVal.value <= 149) {
                directorDiscount.value = 11;
                director2Num2.value = 16000;
            } else if (+directorVal.value > 149 && +directorVal.value <= 199) {
                directorDiscount.value = 11;
                director2Num2.value = 22000;
            } else if (+directorVal.value > 199 && +directorVal.value <= 299) {
                directorDiscount.value = 12;
                director2Num2.value = 28000;
            } else if (+directorVal.value > 299 && +directorVal.value <= 399) {
                directorDiscount.value = 13;
                director2Num2.value = 38000;
            } else if (+directorVal.value > 399 && +directorVal.value <= 499) {
                directorDiscount.value = 13;
                director2Num2.value = 50000;
            } else if (+directorVal.value > 499 && +directorVal.value <= 699) {
                directorDiscount.value = 13;
                director2Num2.value = 65000;
            } else if (+directorVal.value > 699 && +directorVal.value <= 899) {
                directorDiscount.value = 13;
                director2Num2.value = 85000;
            } else if (+directorVal.value > 899) {
                directorDiscount.value = 13;
                director2Num2.value = 120000;
            }
        } else {
            directorDiscount.value = 13;
            director2Num2.value = 0;
        }

        if(+directorVal.value < 100){
            warning2.style.display = "block";
            if(nowSailerPosition < 11) {
                bigdirectorProfit.value = 0;
            }
        } else{
            if(nowSailerPosition < 11){
                var allGroupsvalue = 0;
                for(var i = 0; i < tableVolume.length; i++){
                    allGroupsvalue += +tableVolume[i].value;
                }
                bigdirectorProfit.value = Math.round(allGroupsvalue * base.value * bigdirectorDiscount.value / 100 / tax * disc);
            }
            warning2.style.display = "none";
        }

        director2Num1.value = Math.round(directorNum.value * directorDiscount.value / 100 / tax * disc);
    }

    /*heart with range*/
    function changeHeart(pos){
        if(pos == 1){
            heartRange.style.left = "50px";
        } else if(pos == 2){
            heartRange.style.left = "163px";
        } else if(pos == 3){
            heartRange.style.left = "277px";
        } else if(pos == 4){
            heartRange.style.left = "392px";
        } else if(pos == 5){
            heartRange.style.left = "503px";
        } else if(pos == 6){
            heartRange.style.left = "617px";
        } else if(pos == 7){
            heartRange.style.left = "732px";
        } else if(pos == 8){
            heartRange.style.left = "846px";
        } else if(pos == 9){
            heartRange.style.left = "958px";
        } else if(pos == 10){
            heartRange.style.left = "1073px";
        } else if(pos == 11){
            heartRange.style.left = "1185px";
        }
    }

    /*calculate table*/
    //значение в рублях

    konsultantVal.oninput = function () {
            var roubleVal = +this.value * +base.value;
            konsultantNum.value = Math.round(roubleVal);
            var nowCheckedRadio = document.querySelector('input[name="radioBtn"]:checked');
            if(nowCheckedRadio != null){
                konsultantProfit.value = Math.round(konsultantNum.value * +nowCheckedRadio.value / 100);
            }
            //konsultantProfit.value = Math.round(konsultantNum.value * +konsultantDiscount.value / 100);


        if(+this.value == 0){
            bigkonsultantDiscountDop.value = 0;
            warning1.style.display = "inline-block";
        } else {
            bigkonsultantDiscountDop.value = Math.round(bigkonsultantNum.value * bigkonsultantDiscount.value / 100 / tax * disc);
            warning1.style.display = "none";
        }
        recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    for(var l = 0; l < konsultantDiscountRadio.length; l++){
        konsultantDiscountRadio[l].addEventListener('change', calcDiscoutRadio);
    }
    function calcDiscoutRadio(){
        var roubleVal = +konsultantVal.value * +base.value;
        konsultantNum.value = Math.round(roubleVal);
        konsultantProfit.value = Math.round(+konsultantNum.value * +this.value / 100);

        recalculate(nowSailerPosition);
    }

    //konsultantDiscount.onchange = function () {
        // var roubleVal = +konsultantVal.value * +base.value;
        // konsultantNum.value = Math.round(roubleVal);
        // konsultantProfit.value = Math.round(+konsultantNum.value * +this.value / 100);
        //
        // recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    //};

    bigkonsultantVal.oninput = function () {
        var roubleVal = +this.value * +base.value;
        bigkonsultantNum.value = Math.round(roubleVal);

        if(+konsultantVal.value >= 1) {
            bigkonsultantDiscountDop.value = Math.round(bigkonsultantNum.value * bigkonsultantDiscount.value / 100 / tax * disc);

            recalculate(nowSailerPosition);
            // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            //     + +director2Num2.value + +biggestdirector2NumAct.value;
        }
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
        if(+this.value == 0){
            bigkonsultantDiscountDop.value = 0;
        }
        if(+nowSailerPosition <= 5){
            if(+this.value  <= 2){
                nowSailerPosition = 2;
                rangeSailerStatus.value = 2;
            } else if(+this.value  > 2 && +this.value  <= 4){
                nowSailerPosition = 3;
                rangeSailerStatus.value = 3;
            } else if(+this.value  > 4 && +this.value  <= 7){
                nowSailerPosition = 4;
                rangeSailerStatus.value = 4;
            } else if(+this.value  > 7){
                nowSailerPosition = 5;
                rangeSailerStatus.value = 5;
            }
        }
        bigkonsultantDiscountDop.value = Math.round(bigkonsultantNum.value * bigkonsultantDiscount.value / 100 / tax * disc);

        recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    directorVal.oninput = function () {
        var roubleVal = +this.value * +base.value;
        directorNum.value = Math.round(roubleVal);
        if(nowSailerPosition < 11) {
            if (+this.value <= 99) {
                directorDiscount.value = 5;
                director2Num2.value = 0;
            } else if (+this.value > 99 && +this.value <= 124) {
                directorDiscount.value = 11;
                director2Num2.value = 0;
            } else if (+this.value > 124 && +this.value <= 149) {
                directorDiscount.value = 11;
                director2Num2.value = 16000;
            } else if (+this.value > 149 && +this.value <= 199) {
                directorDiscount.value = 11;
                director2Num2.value = 22000;
            } else if (+this.value > 199 && +this.value <= 299) {
                directorDiscount.value = 12;
                director2Num2.value = 28000;
            } else if (+this.value > 299 && +this.value <= 399) {
                directorDiscount.value = 13;
                director2Num2.value = 38000;
            } else if (+this.value > 399 && +this.value <= 499) {
                directorDiscount.value = 13;
                director2Num2.value = 50000;
            } else if (+this.value > 499 && +this.value <= 699) {
                directorDiscount.value = 13;
                director2Num2.value = 65000;
            } else if (+this.value > 699 && +this.value <= 899) {
                directorDiscount.value = 13;
                director2Num2.value = 85000;
            } else if (+this.value > 899) {
                directorDiscount.value = 13;
                director2Num2.value = 120000;
            }
        } else {
            directorDiscount.value = 13;
            director2Num2.value = 0;
        }

        if(+this.value < 100){
            warning2.style.display = "block";
            if(nowSailerPosition < 11) {
                bigdirectorProfit.value = 0;
            }
        } else{
            if(nowSailerPosition < 11){
                var allGroupsvalue = 0;
                for(var i = 0; i < tableVolume.length; i++){
                    allGroupsvalue += +tableVolume[i].value;
                }
                bigdirectorProfit.value = Math.round(allGroupsvalue * base.value * bigdirectorDiscount.value / 100 / tax * disc);
            }
            warning2.style.display = "none";
        }

        director2Num1.value = Math.round(directorNum.value * directorDiscount.value / 100 / tax * disc);

        recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    bigdirectorVal.oninput = function () {
        if(+this.value <= 2){
            bigdirectorDiscount.value = 5;
        } else if(+this.value > 2 && +this.value <= 4){
            bigdirectorDiscount.value = 5.5;
        } else if(+this.value > 4 && +this.value <= 7){
            bigdirectorDiscount.value = 6;
        } else if(+this.value >=8){
            bigdirectorDiscount.value = 6.5;
        }

        if(+nowSailerPosition <= 11){
            if(+this.value  <= 2){
                nowSailerPosition = 7;
                rangeSailerStatus.value = 7;
            }
            else if(+this.value  > 2 && +this.value  <= 4){
                nowSailerPosition = 8;
                rangeSailerStatus.value = 8;
            }
            else if(+this.value  > 4 && +this.value  <= 7){
                nowSailerPosition = 9;
                rangeSailerStatus.value = 9;
            }
            else if(+this.value  > 7){
                nowSailerPosition = 10;
                rangeSailerStatus.value = 10;
            }
        }
    };


    //изменение количества бизнес групп
    bigdirectorVal.onblur = function () {
        var allGropFirstLineTr = document.querySelectorAll('.table-rows-group');
        if(nowSailerPosition >= 7 || nowSailerPosition <= 10){
            var innerContent = '<td><input class="change-inputs" type="text" value="" class="table-name"></td>\n' +
                '                        <td><input class="change-inputs" type="text" value="" class="table-volume"></td>\n';
        } else if(nowSailerPosition == 7){
            var innerContent = '<td><input class="change-inputs" type="text" value="" class="table-name"></td>\n' +
                '                        <td><input class="change-inputs" type="text" value="" class="table-volume"></td>\n' +
                '                        <td><input class="results-inputs" type="text" disabled value="5" class="table-percent show-biggestdirect"></td>\n' +
                '                        <td><input class="results-inputs" type="text" disabled value="" class="table-commission show-biggestdirect"></td>';
        }
        if(+this.value > allGropFirstLineTr.length){
            for(var j = allGropFirstLineTr.length; j < this.value; j++){
                var newTr = document.createElement('tr');
                newTr.className = "table-rows-group";
                newTr.innerHTML = innerContent;
                tableFirstLineGroups.appendChild(newTr);
            }
        }
        else if(+this.value < allGropFirstLineTr.length){
            var difference = allGropFirstLineTr.length - +this.value;
            for(var g = 0; g < difference; g++){
                var deleteElement = document.querySelector('.table-rows-group:last-child');
                deleteElement.parentNode.removeChild(deleteElement);
            }
        }
    };

    biggestdirectorVal2.oninput = function () {
        var roubleVal = +this.value * +base.value;
        biggestdirectorNum21.value = Math.round(roubleVal);
        biggestdirector2Num2.value = Math.round(biggestdirectorNum21.value / 100 * biggestdirectorNum22.value / tax * disc);

        recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    biggestdirectorVal3.oninput = function () {
        var roubleVal = +this.value * +base.value;
        biggestdirectorNum31.value = Math.round(roubleVal);
        biggestdirector2Num3.value = Math.round(biggestdirectorNum31.value / 100 * biggestdirectorNum32.value / tax * disc);

        recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    };

    biggestdirectorAct.oninput = function () {
        biggestdirector2NumAct.value = +this.value * 210000;

        recalculate(nowSailerPosition);
        // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
        //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
        //     + +director2Num2.value + +biggestdirector2NumAct.value;
    };



    //table groups
    for(var j = 0; j < tableVolume.length; j++){

        tableVolume[j].oninput = function (){
            var parentGroup = this.parentNode.parentNode;
            var allComissions = document.querySelectorAll('.table-commission');
            var allVolume = document.querySelectorAll('.table-volume');

            for (var k = 0; k < parentGroup.children.length; k++) {
                if(parentGroup.children[k].children[0].classList.contains('table-percent')){
                    var thisGroupPercent = parentGroup.children[k].children[0];
                }
                if(parentGroup.children[k].children[0].classList.contains('table-commission')){
                    var thisGroupCommission = parentGroup.children[k].children[0];
                }
            }
            if(+this.value < 99){
                thisGroupPercent.value = 5;
            } else if(+this.value > 99 && +this.value <= 199){
                thisGroupPercent.value = 6;
            } else if(+this.value > 199 && +this.value < 499){
                thisGroupPercent.value = 7;
            } else if(+this.value > 499){
                thisGroupPercent.value = 8;
            }

            thisGroupCommission.value = Math.round(+this.value * base.value * thisGroupPercent.value / 100 / tax * disc);

            //profit right block
            if(nowSailerPosition < 11 && directorVal.value >= 100){
                var volumeItog = 0;
                for(var n = 0; n < allVolume.length; n++){
                    volumeItog += +allVolume[n].value;
                }
                bigdirectorProfit.value =  Math.round(volumeItog * base.value * bigdirectorDiscount.value / 100 / tax * disc);
            } else if(nowSailerPosition >= 11 && directorVal.value >= 0) {
                var itogComission = 0;
                for(var p = 0; p < allComissions.length; p++){
                    itogComission += +allComissions[p].value;
                }
                bigdirectorProfit.value = Math.round(itogComission);
            }

            recalculate(nowSailerPosition);
            // itog.value = +konsultantProfit.value + +bigkonsultantDiscountDop.value + +director2Num1.value
            //     + +bigdirectorProfit.value + +biggestdirector2Num2.value + +biggestdirector2Num3.value
            //     + +director2Num2.value + +biggestdirector2NumAct.value;

        }

    }

});



