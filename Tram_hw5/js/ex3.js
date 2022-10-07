const studentList =[

    {
    
    firstName:"Allan",
    
    lastName:"Able",
    
    scores:[95,85,92,98]
    
    },
    
    {
    
    firstName:"Cindy",
    
    lastName:"Chase",
    
    scores:[95,90,92,98]
    
    },
    
    {
    
    firstName:"Charles",
    
    lastName:"Chips",
    
    scores:[88,99,90]
    
    }
    
    ];
    
    let cLastNameResults=[];
    
    for(let i=0;i<studentList.length;i++){
    
    if(studentList[i].firstName[0]=='C'||studentList[i].firstName[0]=='c')
    
    {
    
    let data={};
    
    data.firstName=(studentList[i].firstName);
    
    data.lastName=(studentList[i].lastName);
    
    let minScore=studentList[i].scores[0],maxScore=studentList[i].scores[0],avgScore=0;
    
    let sum=0;
    
    for(let j=0;j<studentList[i].scores.length;j++){
    
    let val=studentList[i].scores[j];
    
    sum+=val;
    
    if(val<minScore)
    
    minScore=val;
    
    if(maxScore<val)
    
    maxScore=val;
    
    }
    
    avgScore=sum/studentList[i].scores.length;
    
    data.minScore=(minScore);
    
    data.maxScore=(maxScore);
    
    data.avgScore=(avgScore);
    
    cLastNameResults.push(data);
    
    }
    
    }
    
    console.log(cLastNameResults);