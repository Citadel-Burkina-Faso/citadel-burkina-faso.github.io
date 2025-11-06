$(document).ready(function() {
    const $toggle = $('#menu-toggle');
    const $menu = $('#responsive-main-menu');
    const $icon = $toggle.find('i');

    $toggle.on('click', () => {
        const isOpen = $menu.hasClass('open');

        $menu.toggleClass('open', !isOpen);
        $menu.toggleClass('hidden', isOpen);
        $toggle.attr('aria-expanded', !isOpen);

        // Toggle icon
        $icon.toggleClass('fa-bars fa-xmark');
    });
});