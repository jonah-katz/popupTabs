popupTabs
=========

Create google like modules that display on click. Pass in the the id of the element to click and the id of the element to display. 

Example Usage
=============

        var groups = {
            'popup' : {
                popup: popup-div,
                button:popup-button,
                isvisible:false
            },
            'popup2' : {
                popup: popup-div-2,
                button: popup-button-2,
                isvisible:false
            }
        }; 

        (note: the 'popup' and 'popup2' can be anything)
        
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
