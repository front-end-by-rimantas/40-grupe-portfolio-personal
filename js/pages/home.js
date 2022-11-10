// IMPORTS

// EXECUTION
(async () => {

    /* HEADER-start */
    try {
        const response = await fetch('./data/header-menu.json');
        const data = await response.json();
        const hobbiesResponse = renderMenu('hobbies', data);
        if (hobbiesResponse[0]) {
            console.error(hobbiesResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    /* HEADER-end  */

    /* THIS IS ME start */
    /* THIS IS ME end */

    /* ABOUT ME start  */
    /* ABOUT ME end */

    /* MY OFFERED SERVICES start */
    /* MY OFFERED SERVICES end */

    /* BLUE ZONE STATISTICS start */
    /* BLUE ZONE STATISTICS end */

    /* FEATURED PROJECTS start  */
    /* FEATURED PROJECTS end */

    /* CLIENTS FEEDBACK start */
    /* CLIENTS FEEDBACK end */

    /* CHOOSE YOUR PLAN start */
    /* CHOOSE YOUR PLAN end */

    /* BLOG POSTS start */
    /* BLOG POSTS end */

    /* BLUE ZONE LOGOS start  */
    /* BLUE ZONE LOGOS end */

    /* FOOTER start */
    /* FOOTER end  */
})();