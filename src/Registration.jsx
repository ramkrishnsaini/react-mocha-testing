var React = require('react/addons');

var Registration = React.createClass({
    getInitialState () {
    return {
    author: '',
    text: ''
};
},
    handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
      
  },
    componentDidMount: function() {
        
      },
    handleNumberChange(e){
    this.setState({number: e.target.value});
},
onClick(e) {
        e.preventDefault(); 
        this.setState({author: 'Pete Hunt', text: 'This is one comment'});
},
    render: function () {
        return (
             <div> 
        
        <input type="number" className="npiNumber"  value={this.state.number} onChange={this.handleNumberChange}></input>
        <input type="submit" value="Next" ref="npiButton" onClick={this.onClick} />
  <form >
        <input
          type="text"
          className="authorInput"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          className="textInput"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
      </div>
        );
    }
    });

module.exports = Registration;


