describe("Captcha", function() {
    it("should show 1 + ONE correctly", function() {
        //Arrange
        var captcha = new Captcha(1,1,1,1);

        //Act
        var result = captcha.show();

        //Assert
        expect(result).toEqual("1 + ONE");
    });
});