// IMPORTS
import renderServices from "../components/services.js";
import renderMenu from "../components/menu.js";
import renderGallery from "../components/gallery.js";


// EXECUTION
(async () => {
    // HEADER start
    try {
        const response = await fetch('./data/header-menu.json');
        const data = await response.json();
        const menuResponse = renderMenu('menu', data);
        if (menuResponse[0]) {
            console.error(menuResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    // HEADER end

    // THIS IS ME start
    // THIS IS ME end

    // ABOUT ME start
    // ABOUT ME end

    // MY OFFERED SERVICES start
    try {
        const response = await fetch('./data/services-section.json');
        const data = await response.json();
        const servicesResponse = renderServices('service-block', data);
        if (servicesResponse[0]) {
            console.error(servicesResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    // MY OFFERED SERVICES end

    // BLUE ZONE STATISTICS start
    // BLUE ZONE STATISTICS end

    // GALLERY FEATURED PROJECTS start
    try {
        const response = await fetch('./data/gallery.json');
        const data = await response.json();
        const galleryResponse = renderGallery('gallery-images', data);
        if (galleryResponse[0]) {
            console.error(galleryResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    // GALLERY FEATURED PROJECTS end

    // CLIENTS FEEDBACK start
    // CLIENTS FEEDBACK end

    // CHOOSE YOUR PLAN start
    // CHOOSE YOUR PLAN end

    // BLOG POSTS start
    // BLOG POSTS end

    // BLUE ZONE LOGOS start
    // BLUE ZONE LOGOS end

    // FOOTER start
    // FOOTER end
})();