


const score = [0,1,10,50,250];


function match(tenant,landlord){
const tenantAnswers = tenant.answers
const tenantPriorities = tenant.priority;
let tenantTotalScore = 0;
let tenantScore = 0;

const landlordAnswers = landlord.answers
const landlordPriorities = landlord.priority;
let landlordTotalScore = 0
let landlordScore = 0;


for(let i=0;i<tenantPriorities.length;i++){
    tenantTotalScore += score[tenantPriorities[i] -1];
    landlordTotalScore += score[landlordPriorities[i] -1];
}



for(let i=0;i<tenantAnswers.length;i++){
    if(tenantAnswers[i] == landlordAnswers[i]){
        tenantScore += score[tenantPriorities[i] -1];
        landlordScore += score[landlordPriorities[i] -1];
    }
}

let matchPercentage = Math.round(100 * Math.sqrt((tenantScore / tenantTotalScore) * (landlordScore / landlordTotalScore)));

console.log(matchPercentage + "%");
}

function main(){
    const landlords = [{answers,priority}];
    const user = {answers,priority}
    match(user,landlords);
}



// (function(){
// const data =  require("./data2.json");

// const tenantAnswers = data.tenant.answers
// const tenantPriorities = data.tenant.priority;
// let tenantTotalScore = 0;
// let tenantScore = 0;

// const landlordAnswers = data.landlord.answers
// const landlordPriorities = data.landlord.priority;
// let landlordTotalScore = 0
// let landlordScore = 0;


// for(let i=0;i<tenantPriorities.length;i++){
//     tenantTotalScore += data.score[tenantPriorities[i] -1];
//     landlordTotalScore += data.score[landlordPriorities[i] -1];
// }



// for(let i=0;i<tenantAnswers.length;i++){
//     if(tenantAnswers[i] == landlordAnswers[i]){
//         tenantScore += data.score[tenantPriorities[i] -1];
//         landlordScore += data.score[landlordPriorities[i] -1];
//     }
// }

// let matchPercentage = Math.round(100 * Math.sqrt((tenantScore / tenantTotalScore) * (landlordScore / landlordTotalScore)));

// console.log(matchPercentage + "%");
// })();
