
export const PAGE_ANCHORS = Object.freeze({
    TOP_OF_PAGE: 'TopOfPage',
    ABOUT: 'About',
    WORK: 'WorkDetails',
    FOOTER: 'Contacts',
  })

export const NAVIGATION_BUTTONS = [
    {
        targetName: PAGE_ANCHORS.ABOUT,
        label: "About",
    },
    {
        targetName: PAGE_ANCHORS.WORK,
        label: 'Work',
    },
    {
        targetName: PAGE_ANCHORS.FOOTER,
        label: 'Contacts',
    },
];

export const PAGE_MENU_HEIGHT = 64;
export const MIN_SCROLL_PIXELS_COUNT_TO_SHOW_SCROLL_BUTTON = 200;

export const SCROLLER_DEFAULT_OFFSET = (-1) * PAGE_MENU_HEIGHT;
export const SCROLLER_CONFIG = {
    duration: 1000,
    delay: 100,
    smooth: true,
};
  