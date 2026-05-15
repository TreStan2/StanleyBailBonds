import React from 'react' // Import React library to use JSX and create component 
import './AboutPage.css'; // Import the CSS file for styling the AboutPage component
import MainLayout from '../layout/MainLayout'; // Import the MainLayout component to provide a consistent layout

function AboutPage() {
  return (
    <MainLayout> {/* Use MainLayout to wrap the content for consistent styling and structure */}
      <div>
        
        <h1 className='About-title'>About Us</h1> {/* Main heading for the About page */}
        <div class='split left'> {/* Left section of the split layout */}
          <div class='left-align'> {/* Container for left-aligned text */}
            <p className='owner-background'>
              {/*Description of the company and its services */}
              Stanley Bail Bonds LLC was formed in 2012, in Georgetown, SC.
              Our services, however, span much farther reaching across several states, including SC, NC, FL, TN, CT, LA, &amp; MS.
            </p>
            <h1 className="owner-name">Owner: Michael Stanley</h1>
            <div className='owner-info'> {/* Container for owner information */}
              <p style={{ color: 'white' }}> {/* Inline style for text color */}
                Licensed Bail Bond Agent<br /> {/* Owner's Qualification */}
                Licensed Property &amp; Casualty Agent {/* Owner's Qualification */}
              </p>
            </div>
            <h3 className="mission-title">Our Mission:</h3> {/* Subtitle for the mission statement */}
            <p className='mission'> {/* Paragraph for the mission statement */}
              We strive to streamline and expedite the bail bond process so clients can reunite with their loved ones.
              Additionally, we ensure all parties maintain their dignity and respect during this uncomfortable time.
              Our level of compassion is unmatched. With around the clock service, we guarantee you will not be disappointed.
            </p>
          </div>
        </div>

        <div class='split right'> {/* Right section of the split layout */}
          {/* Inline styles fpr image dimensions and position */}
          <img src='images/about.png' alt="" style={{ height: 600, width: 600, right: '30px', position: 'relative' }} /> 
        </div>
      </div>
    </MainLayout> // Closing tag for MainLayout
  )
}

export default AboutPage;