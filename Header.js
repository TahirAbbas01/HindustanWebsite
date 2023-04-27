import React from 'react'
import { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBars,faGamepad,faFileAlt,faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import Heading from "./Heading";

function Header() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }




  return (
          <>

          <div className="menu">
            
            {isMenuOpen && (
              <div class='menudiv'>
                <p style={{backgroundColor:'pink', marginLeft:'-107px', width:'287px'}}>Hello World</p>
              </div>
            )}
            
          </div>

      

            <div className="row mt-3 ">  {/* left */}
            
              <div class="col-md-3 text-white">
              <div class="row text-white">
              <div class="col-md-5 icon-space"><a><FontAwesomeIcon icon={faBars}  onClick={toggleMenu} /></a><span><strong>Explore</strong></span></div>
              <div class="col-md-5 icon-space"><FontAwesomeIcon icon={faSearch} /><span><strong>Search</strong></span></div>
              <div class="col-md-2"></div>
              </div>   
              </div>

                    

              <div class="col-md-5 hindustanlogo mt-3 ml-4">  
                <img src="/images/ht-logo.svg" alt="HT Logo" />
              </div>


              <div class="col-md-4 text-white icon">
              <div class="row">
              <div class="col-sm-4  icon-space"><FontAwesomeIcon icon={faGamepad} /><span class='gdiv'><strong>Games</strong></span></div>
              <div class="col-sm-4  icon-space"><FontAwesomeIcon icon={faFileAlt} /><span class='gdiv'><strong>E-Paper</strong></span></div>
              <div class="col-sm-4  icon-space"><FontAwesomeIcon icon={faSignInAlt} /><span class='gdiv'><strong>Sign in</strong></span></div>
              </div>

              <div class="row mt-2">
              <div class="col-sm-12  icon-space  subscribe"><strong>Start 15 Days Free Trial <span style={{backgroundColor:'white',color:'black'}}>Subscribe</span></strong></div>
              
              
              </div>




            </div>
        </div>
        
        <div className="date-weather">
          <div className="hdate">Wednesday , Apr 12, 2023 | New Delhi 24<sup>0</sup></div>

        </div>
       
      </>

        

      

   
  )
}

export default Header;