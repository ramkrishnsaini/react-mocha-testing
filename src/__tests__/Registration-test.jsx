var React = require('react/addons'),
    Registration = require('../Registration.jsx'),
    TestUtils = React.addons.TestUtils,
    expect = require('expect');

describe("Registration", function () {
    
    var registration;
    
        it("loads without error", function () {
        registration = TestUtils.renderIntoDocument(
            <Registration />
        );

        expect(registration).toExist();
    });
    
    it("enter npi number and click button", function () {
            
        var npiNumber = TestUtils.findRenderedDOMComponentWithClass(
                registration, "npiNumber"
            );
            
            TestUtils.Simulate.change(npiNumber.getDOMNode(),
                                  {target: {value: 1}});
 
       expect(registration.state.number).toEqual(1);
        
       
       var npiButton = registration.refs.npiButton;
       TestUtils.Simulate.click(npiButton);
        
    });
    
    it("match registration form values", function () {
                   
        expect(registration.state.author).toEqual('Pete Hunt');
        expect(registration.state.text).toEqual('This is one comment');
    });
    
    it("form inputs are editable", function () {
            
        var authorInput = TestUtils.findRenderedDOMComponentWithClass(
                registration, "authorInput"
            );
            
        TestUtils.Simulate.change(authorInput.getDOMNode(),
                                  {target: {value: 'author changed'}});
        
        var textInput = TestUtils.findRenderedDOMComponentWithClass(
                registration, "textInput"
            );
            
        TestUtils.Simulate.change(textInput.getDOMNode(),
                                  {target: {value: 'text changed'}});
        
        expect(registration.state.author).toEqual('author changed');
        expect(registration.state.text).toEqual('text changed');
    });
        
});