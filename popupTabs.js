var popupTabs = (function() {

    var groups;
    function popupTabs(data) {
        this.groups = data;
        var _this = this;
        $.each(_this.groups, function(key, value) {
            value.button.click(function(event) {
                event.stopPropagation();
                _this.hidePopupsExcept(key);
                _this.showPopup(value);
            });
        });

        $('html').click(function() {
            _this.hidePopupsExcept(null);
        });

        return "hello";
    }


    popupTabs.prototype.hidepopup = function(thisone) {
        var _this = this;
        thisone.popup.hide();
    },
    
   popupTabs.prototype.showPopup = function(thisone) {
        var _this = this;
        thisone.popup.show();
    },
    
   popupTabs.prototype.hidePopupsExcept = function(thisone) {
        var _this = this;
        $.each(_this.groups, function(key, value) {
            if (thisone !== key) {
                _this.hidepopup(value);
            }
        });
    };

    return popupTabs;

})();