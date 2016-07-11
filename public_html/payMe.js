/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculate() {
    var wage = document.getElementById('wage').value;
    var hours = document.getElementById('hours').value;
    var resultString;
    
    if(wage<=0||hours<=0){
        resultString = "You're Broke, Enter a Number more than Zero";
    }
    
    else if (hours>40){
     resultString = "$" + wage*hours*1.5;}

    else
         resultString = "$" + wage*hours;

    document.getElementById('results').innerHTML = resultString;

}

