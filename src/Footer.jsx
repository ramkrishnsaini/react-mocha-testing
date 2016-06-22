var React = require('react/addons');

var Footer = React.createClass({
    render: function () {
        return (
             <div className="pageFooter">
            <ul>
                <li><a href="#" target="_blank">Privacy Policy</a></li>
                <li><a href="#" target="_blank">Terms of Use</a></li>
                <li><a href="#" target="_blank">Express-Scripts.com</a></li>
                <li className="last"><a href="#" target="_blank">Careers</a></li>
            </ul>
            <p className="copyright">© 2016 Express Scripts, Inc. All Rights Reserved.</p>
            <p className="disclaimerMessage"> TRICARE is a registered trademark of the Department of Defense,
                Defense Health Agency. All Rights Reserved</p>
        </div>
        );
    }
    });

module.exports = Footer;


