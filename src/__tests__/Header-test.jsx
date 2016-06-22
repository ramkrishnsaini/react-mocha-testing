var React = require('react/addons'),
    Header = require('../Header.jsx'),
    TestUtils = React.addons.TestUtils,
    expect = require('expect');
describe("Header", function () {
    
        it("loads without error", function () {
        var header = TestUtils.renderIntoDocument(
            <Header />
        );

        expect(header).toExist();
    });
    
});