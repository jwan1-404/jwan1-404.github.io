function computeGPA(){
    var gradePts = new Array(4,3,2,1,0);
    var formElements = document.forms["gpaCalc"].elements;
    var curCredits = 0;
    var totalCredits = 0;
    var totalHonorPts = 0;
    for(var i=0;i<5;i++){
        curCredits = parseFloat(formElements['credits' + i].value);
        if(! isNaN(curCredits) && curCredits > 0){
            totalCredits = totalCredits + curCredits;
            totalHonorPts = totalHonorPts + curCredits * gradePts[i];
        }
    }
    if(totalCredits > 0){
        var gpa = totalHonorPts / totalCredits;
        document.getElementById('result2').innerHTML='Estimation GPA: ' + gpa.toFixed(3) + '<br/>' + 'Total credits: ' + totalCredits.toFixed(2);
    }
    else{
        document.getElementById('result2').innerHTML='Please enter your credits.';
    }
}