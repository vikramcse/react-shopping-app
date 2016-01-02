var React = require('react');
var ref = new Firebase("zenleather.firebaseio.com");

var Login = React.createClass({
    render() {
		return (
			<div>
			    <div className="row">
			        <div className="medium-6 medium-centered large-4 large-centered columns">

			            <form>
			                <div className="row column log-in-form">
			                    <h4 className="text-center">Login Only for Shop Owner</h4>
			                    <label>Email
			                        <input type="text" placeholder="somebody@example.com"/>
			                    </label>
			                    <label>Password
			                        <input type="text" placeholder="Password"/>
			                    </label>
			                    <p><a type="submit" className="button expanded">Log In</a></p>
			                </div>
			            </form>

			        </div>
			    </div>
			</div>
		)
	}
});

module.exports = Login;
