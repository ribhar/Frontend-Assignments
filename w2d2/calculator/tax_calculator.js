
const taxCal = (income)=>{

    if(income<250000){
        return "no tax";
    }
    else if(income>=250000 && income<500000){
        let tax = ((income/100)*10).toFixed(2);
        let tax_payable =  `Tax payable is  Rs ${tax}/-, which is 10% of total income`;
        return tax;
    }
    else if(income>=500000 && income<1000000){
        let tax = (income/100)*20;
        let tax_payable =  `Tax payable is  Rs ${tax}/-, which is 20% of total income`;
        return tax;
    }else{
        let tax = (income/100)*30;
        let tax_payable =  `Tax payable is  Rs ${tax}/-, which is 30% of total income`;
        return tax;
    }
}

module.exports = taxCal;