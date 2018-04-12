'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var toggle = document.querySelector('.toggle'),
    wrapperTable = [].concat(_toConsumableArray(document.querySelectorAll('.table-wrapper'))),
    switchToggle = document.querySelector('.switch'),
    btnCheck = [].concat(_toConsumableArray(document.querySelectorAll('.btncheck'))),
    tableMonthly = [].concat(_toConsumableArray(document.querySelectorAll('.tablePricing-monthly'))),
    tableYearly = [].concat(_toConsumableArray(document.querySelectorAll('.tablePricing-yearly')));

var flipTable = function flipTable(e) {

    if (e.target.checked && e.target.getAttribute("id") === "yearly") {
        tableMonthly.map(function (monthly) {
            return monthly.classList.remove("visible");
        });
        wrapperTable.map(function (wrap) {
            return wrap.classList.add('flipTable');
        });
        tableYearly.map(function (yearly) {
            return yearly.classList.add('visible');
        });
    }

    if (e.target.checked && e.target.getAttribute("id") === "monthly") {
        tableYearly.map(function (yearly) {
            return yearly.classList.remove('visible');
        });
        btnCheck.map(function (check) {
            return check.checked = false;
        });
        wrapperTable.map(function (wrap) {
            return wrap.classList.remove('flipTable');
        });
        tableMonthly.map(function (monthly) {
            return monthly.classList.add("visible");
        });
    }
};

toggle.addEventListener('click', flipTable);