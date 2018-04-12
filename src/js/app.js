let toggle = document.querySelector('.toggle'),
    wrapperTable = [...document.querySelectorAll('.table-wrapper')],
    switchToggle = document.querySelector('.switch'),
    btnCheck = [...document.querySelectorAll('.btncheck')],
    tableMonthly = [...document.querySelectorAll('.tablePricing-monthly')],
    tableYearly = [...document.querySelectorAll('.tablePricing-yearly')];


const flipTable = (e) =>{

     if(e.target.checked && e.target.getAttribute("id") === "yearly"){
      tableMonthly.map(monthly => monthly.classList.remove("visible"));
        wrapperTable.map(wrap => wrap.classList.add('flipTable'));
        tableYearly.map(yearly => yearly.classList.add('visible'));
    }

    if(e.target.checked && e.target.getAttribute("id") === "monthly"){
      tableYearly.map(yearly => yearly.classList.remove('visible'));
      btnCheck.map(check => check.checked = false);
      wrapperTable.map(wrap => wrap.classList.remove('flipTable'));
      tableMonthly.map(monthly => monthly.classList.add("visible"));
    }

}




toggle.addEventListener('click', flipTable);