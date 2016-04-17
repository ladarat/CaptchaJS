function Captcha(pattern, leftOpr, operator, rightOpr){   
    this.show = function (){
        return leftOpr + " + ONE";
    };
};