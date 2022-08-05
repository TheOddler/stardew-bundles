const toggles = document.querySelectorAll('input[data-room-class-enabled], input[data-room-class-disabled]');

function handleToggleChange(toggle) {
    const enabled = toggle.checked;
    const enabledClassAttr = toggle.getAttribute('data-room-class-enabled');
    const disabledClassAtr = toggle.getAttribute('data-room-class-disabled');
    const parentRoom = toggle.closest('.room');

    if (enabledClassAttr) {
        enabledClassAttr.split(' ').forEach(c => parentRoom.classList.toggle(c, enabled));
    }
    if (disabledClassAtr) {
        disabledClassAtr.split(' ').forEach(c => parentRoom.classList.toggle(c, !enabled));
    }
}

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("change", ev => handleToggleChange(ev.target));
    handleToggleChange(toggles[i]);
}

// Utils

function setAllCheckboxes(enabled, selector, parent) {
    selector = selector || "input[type=checkbox]";
    parent = parent || document;
    const checkboxes = parent.querySelectorAll(selector);

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = enabled;
        checkboxes[i].dispatchEvent(new Event('change'));
    }
}
