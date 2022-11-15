// IMPORTS
import renderServices from "../components/services.js";
import renderMenu from "../components/menu.js";
import "../components/stats.js";
import renderGallery from "../components/gallery.js";
import renderGalleryFilters from "../components/gallery-filters.js";
import renderHiddenMenu from "../components/hidden-menu.js";

// EXECUTION
(async () => {
    // HEADER start
    // menu
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
    // hidden-menu
    try {
        const response = await fetch('./data/header-menu.json');
        const data = await response.json();
        const hiddenMenuResponse = renderHiddenMenu('hidden-menu', data);
        if (hiddenMenuResponse[0]) {
            console.error(hiddenMenuResponse[1]);
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

    // FEATURED PROJECTS start
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
    try {
        const response = await fetch('./data/gallery-filters.json');
        const data = await response.json();
        const galleryFiltersResponse = renderGalleryFilters('gallery-filters', data);
        if (galleryFiltersResponse[0]) {
            console.error(galleryFiltersResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    // FEATURED PROJECTS end

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