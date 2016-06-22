var React = require('react/addons'),
    Footer = require('../Footer.jsx'),
    TestUtils = React.addons.TestUtils,
    expect = require('expect');
describe("Footer", function () {
    
        it("loads without error", function () {
        var footer = TestUtils.renderIntoDocument(
            <Footer />
        );

        expect(footer).toExist();
    });
    
});