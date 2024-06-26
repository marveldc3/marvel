/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0033cc',
        secondary: '#ccd9ff',
        buttonBackground: '#2E8ECE',
        buttonHover: '#1E699E',
        navBackground: '#5c9bf5',
        comicBackground: '#fff',
        gradientStart: 'rgba(255, 255, 255, 0.5)',
        gradientEnd: 'rgba(0, 0, 255, 0.5)',
        linkHover: '#fff',
        navLinkHover: '#ccf0ff',
      },
      boxShadow: {
        navShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        comicShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
      },
      lineHeight: {
        body: '1.6',
      },
      spacing: {
        headerPadding: '20px',
        formTitleMarginBottom: '20px',
        formInputPadding: '10px',
        formInputMarginBottom: '10px',
        formButtonPadding: '10px 20px',
        mainPadding: '20px',
        mainGap: '20px',
        comicManagementGap: '20px',
        chatPadding: '20px',
        chatListMarginBottom: '20px',
        chatListItemPadding: '10px',
        checkoutPadding: '20px',
        supportTicketPadding: '20px',
      },
      borderRadius: {
        formInput: '5px',
        formButton: '5px',
        comicManagementListItem: '5px',
        chatListItem: '5px',
        chat: '5px',
        checkout: '5px',
        supportTicket: '5px',
      },
      borderWidth: {
        formInput: '1px',
        chat: '1px',
        checkout: '1px',
        supportTicket: '1px',
      },
      transitionProperty: {
        link: 'color 0.3s',
      },
    },
  },
  plugins: [],
}