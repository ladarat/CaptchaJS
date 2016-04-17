function Captcha(pattern, leftOpr, operator, rightOpr){   
    this.show = function (){
        if(operator === 1){
            return leftOpr + " + ONE";
        }
        if(operator === 2){
            return leftOpr + " - ONE";
        }
        if(operator === 3){
            return leftOpr + " * ONE";
        }
        if(operator === 4){
            return leftOpr + " / ONE";
        }
    };
};