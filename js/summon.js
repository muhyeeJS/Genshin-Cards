//if summon button is click
function summon() {
    var selectedBanner = localStorage.getItem('bannerSelected');
    if(selectedBanner === 'kazuha') {
        return kazuha();
    } else if(selectedBanner === 'klee') {
        return klee();
    } else if(selectedBanner === 'weapon') {
        return weapon();
    } else {
        return;
    }
}