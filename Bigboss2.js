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
                            partners :[
                                {
                                    name: 'Клієнт 1.2.1.1',
                                    type: 'subSubCompany',
                                    uses: 'Рішення для продажу квитків',
                                    sells: 'Рішення для продажу квитків',
                                    partners :[
                                        {
                                            name: 'Клієнт 1.2.1.1.1',
                                            type: 'subSubCompany',
                                            uses: 'Рішення для продажу квитків',
                                            sells: 'Рішення для продажу квитків',
                                        }
                                    ]
                                }
                            ]
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
    for (let i=0;i<company.clients.length;i++){
      if (company.clients[i].name === companyName) {return company.clients[i];}
    else {
if(company.clients[i].partners){ 
    var findAnswer =  findValueByPartner(company.clients[i].partners,companyName)
        if(findAnswer){return findAnswer;}
        }}} var noFindAnswer = "Sorry, we can't find the company."; return noFindAnswer;}
    
        function findValueByPartner(partners, companyName){
            for(let i=0;i<partners.length;i++){
           if (partners[i].name === companyName) {return partners[i]; console.log("hehe")}
            else {
           if (partners[i].partners){
              var answer = findValueByPartner(partners[i].partners, companyName);
            if(answer) {return answer}
           }}}
            return null;
            }

console.log(findValueByKey("Клієнт 1.2.5"))

                