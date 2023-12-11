const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.1.1',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків', 
                        } ]
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.1',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                            
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners :[
                {
                    name: 'Клієнт 2.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                }
            ]
        }
    ]
};

function findValueByKey(companyName){
    for (i=0;i<company.clients.length;i++){
     if (company.clients[i].name ===companyName) return company.clients[i]
    else {
if(company.clients[i].partners){
    for (j=0;j<company.clients[i].partners.length;j++){
           if (company.clients[i].partners[j].name === companyName) 
            {return company.clients[i].partners[j]}
           else {
                if(company.clients[i].partners[j].partners){
                     for (x=0;x<company.clients[i].partners[j].partners.length;x++){
                     if (company.clients[i].partners[j].partners[x].name === companyName) 
                     {return company.clients[i].partners[j].partners[x]}
                    }
                }}
        }}}} var answer = "Sorry, we can't find the company."; return answer;}
console.log(findValueByKey("Клієнт 1.2.1"))