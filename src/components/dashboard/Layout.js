var React = require('react');
var DashApp = require('./DashApp');
var Link = require('react-router').Link;

var Layout = React.createClass({
	render: function() {
		return (
			<div>
				<div className="container" id="wrapper">
					<div id="sidebar-wrapper">
						<ul className="sidebar-nav">
							<li>
								<Link to='addProduct'>Add Product</Link>
							</li>
							<li>
								<Link to='orders'>Orders</Link>
							</li>
							<li>
								<a href="#">App People</a>
							</li>
						</ul>
					</div>
					<div id="page-content-wrapper">
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-12">
									<DashApp/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Layout;