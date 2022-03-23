import logo from './logo.svg';
import './App.css';
function Footer() {
  return (
    <div className="footer">
          <div className="footer-copy">
        <div className="footer-copy1">
            <div className="footer-copy-pos">
                <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
            </div>
        </div> 
    </div>
    <div className="container">
            <div className="col-md-3 w3_footer_grid"> 
                <div class="col item social">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google"></i></a>
                </div>
            </div>
    </div> 
</div>
  );
}

export default Footer;
