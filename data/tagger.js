window.addEventListener('keydown', function(event) {
    // F2 key or \
    var isValidKey = event.keyCode == 113 || event.keyCode == 220;
    if (!isValidKey) {
        return;
    }
    var layoutType = document.querySelector('.pageLayoutAction.selected').id;

    if (layoutType != 'pageActionLayout100') {
        window.alert('Actually tagger works only with "Full Article" layout');
        return;
    }
    var title = document.querySelector('.selectedEntry').attributes.getNamedItem('data-title').value
    var tag = document.querySelector('.selectedEntry .toBeTagged')

    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
                        0, 0, 0, 0, 0, false, false, false, false, 0, null);
    tag.dispatchEvent(evt);
    setTimeout(function() {
        var titleRE = /^(.*?)\s([-\u2013|~@]|attends|arrives|arriving|visits|signs)/;
        var m = title.match(titleRE);
        if (m && m[1]) {
            title = m[1];
        }
        var popupPicker = document.querySelector('.popup.picker .option.inner');
        popupPicker.dispatchEvent(evt);
        
        setTimeout(function() {
            var tagInput = document.getElementById('newTagInput');
            tagInput.value = title;
            tagInput.focus();
            // var createButton = document.querySelector('#tagCreator div');
            // createButton.dispatchEvent(evt);
        }, 10);
    }, 10);
}, true);
