describe("Captcha", function() {
    it("should show 1 + ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,1,1,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("1 + ONE");
    });

    it("should show 2 + ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,2,1,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("2 + ONE");
    });

    it("should show 3 + ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,3,1,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("3 + ONE");
    });

    it("should show 1 - ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,1,2,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("1 - ONE");
    });

    it("should show 1 * ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,1,3,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("1 * ONE");
    });

    it("should show 1 / ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,1,4,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("1 / ONE");
    });
});