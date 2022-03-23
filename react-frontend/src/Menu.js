import logo from './logo.svg';
import './App.css';

function Menu() {
  return (
	<div className="navigation">
	<div className="container">
		<nav className="navbar navbar-default">
		<div className="header" id="home1">
			<div className="head_logo">
				<h1><a href="#" >MyBook<span>Online Book Store</span></a></h1>
			</div>
	</div>
			<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
				<ul className="nav navbar-nav">
					<li><a href="/" className="act">Home</a></li>	
					<li><a href="/" className="act">Categories</a></li>	
				</ul>
			</div>	
			<div className="cart cart box_1"> 
					<a href="" className="view-cart" type="submit" name="submit" value="">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
						<span className="cart_count"></span>
                    </a>	
			</div>
			<div className="login">
				<a href="#"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
			</div>
		</nav>
	</div>
</div>
  );
}

export default Menu;
