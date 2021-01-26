
<h1 align="center">Cozy Cottage</h1>

This is a website, where users can book a Cottage.

Site's purpose is to help users book their next holiday and enjoy their time off, at a nice and warm Cottage.


## UX

### User Stories

-   #### First Time Visitor Goals

    As a first time user I would like to:

    1. Be able to clearly understand the purpose of the site.

    2. Be able to navigate easily through the website.

    3. Find more information about the site.

    4. See what features the site offers.
   

-   #### Returning Visitor Goals

    As a returnig user, I would like to:

    1. See images of cottages on the inside and out.

    2. Find a booking form and contact form.

    3. Be able to choose start date and end date of my holiday.

    4. See how much would it cost to rent a cottage.

    5. Get the location of the place.

    6. Find social media links.



-   #### Frequent User Goals

    As a frequent user I would like to:

    1. See if, there are any new offers currently on.

    2. See if, there are any layout changes and if the site is still easy to navigate after.


-   ### Design

    -   #### Colour Scheme

    -   #### Typography

    -   #### Images

-   ### Wireframes

    -   #### Mobile:

        1. [Home](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/mobile/ms2-mobile-home-wireframes.png)

        2. [About](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/mobile/ms2-mobile-about-wireframes.png)

        3. [Cottages](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/mobile/ms2-mobile-cottages-wireframes.png)

        4. [Book Now](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/mobile/ms2-mobile-book-now-wireframes.png)

        5. [Contact](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/mobile/ms2-mobile-contact-wireframes.png)

    -   #### Tablet:

        1. [Home](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/tablet/ms2-tablet-home-wireframes.png)

        2. [About](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/tablet/ms2-tablet-about-wireframes.png)

        3. [Cottages](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/tablet/ms2-tablet-cottages-wireframes.png)

        4. [Book Now](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/tablet/ms2-tablet-book-now-wireframes.png)

        5. [Contact](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/tablet/ms2-tablet-contact-wireframes.png)

    -   #### Desktop:

        1. [Home](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/desktop/ms2-desktop-home-wireframes.png)

        2. [About](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/desktop/ms2-desktop-about-wireframes.png)

        3. [Cottages](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/desktop/ms2-desktop-cottages-wireframes.png)

        4. [Book Now](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/desktop/ms2-desktop-book-now-wireframes.png)

        5. [Contact](https://github.com/steff880/MS2-project-Cottage/blob/master/assets/wireframes/desktop/ms2-desktop-contact-wireframes.png)

---

## Features


---

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/CSS)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap v4.5.3:](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the "Lato" font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used to add icons to the site.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [Wireframes](#wireframes) during the design process.

---

## Bugs and Fixes

-   ### Bug

1. Issue with height on element with class "container-about-content", where it's child element was overflowing.
    In result the background-color aplied did not cover the child element.

2. Issue with the width of the cards on Cottages page because of inline styling which came with bootsrap code.

3. Issue with social links on Home page. On mobile view icons align on the left and did not look the same as on larger screens.

4. Issue with image on the cards of Cottages page. Image being streched when viewed on Iphone 5SE.

-   ### Fix

1.  Add the code:
        
         html{
             height: 100%;
        } 

        body {
            min-height: 100vh;
        }

        .container-about-content {
            min-height: 50vh;
        }

2.  Remove the inline styling and add custom one.        

3. Fixed issue by positioning the icons at the bottom center of the page instead of left. To achieve this adedd properties to the parent element
     and amended the properties of the child element.

4. Fix issue by removing "margin: 0 auto;" from class **_card-row_** and reducing the padding of **_cottages-container_** from 15px to 10px.    
## Testing

### Testing User Stories

-   #### First Time Visitor Goals


-   #### Returning Visitor Goals


-   #### Frequent User Goals


---


## Deployment


## Credits