popupTabs
=========

Create google like popup that display on click (the account button thats in the header of google.com ). Pass in the the id of the element to click and the id of the element to display. 

Example Usage
=============

        var groups = {
            '1' : {
                popup: popup-div,
                button:popup-button,
                isvisible:false
            },
            '2' : {
                popup: popup-div-2,
                button: popup-button-2,
                isvisible:false
            }
        }; 
        
        var tabs = new popupTabs(groups);

            <div id="popup-button">
                <div id="popup-div" style="display: none;">
                  <p>I just popped up!</p>
                </div>
            </div>
            
            <div id="popup-button-2">
                <div id="popup-div-2" style="display: none;">
                  <p>I just popped up!</p>
                </div>
            </div>
