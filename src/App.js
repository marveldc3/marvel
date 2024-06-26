import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center p-headerPadding bg-navBackground shadow-navShadow">
    <h1>My App</h1>
    <nav className="flex justify-end items-center">
      <a className="text-white ml-2.5 transition-colors hover:text-navLinkHover" href="#home">Home</a>
      <a className="text-white ml-2.5 transition-colors hover:text-navLinkHover" href="#about">About</a>
      <a className="text-white ml-2.5 transition-colors hover:text-navLinkHover" href="#contact">Contact</a>
    </nav>
  </header>
);

const Form = () => (
  <div className="form flex flex-col items-center">
    <h2 className="form__title mb-formTitleMarginBottom">Sign Up</h2>
    <form className="form__form flex flex-col w-75">
      <input className="form__input p-formInputPadding mb-formInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" type="text" placeholder="Name" />
      <input className="form__input p-formInputPadding mb-formInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" type="email" placeholder="Email" />
      <button className="form__button p-formButtonPadding bg-buttonBackground text-white border-0 rounded-formButton cursor-pointer transition-colors hover:bg-buttonHover" type="submit">Submit</button>
    </form>
  </div>
);

const Main = () => (
  <main className="app__main grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-mainGap p-mainPadding">
    <Form />
    <div className="comic-management grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-comicManagementGap bg-cover bg-fixed text-black">
      <h2 className="comic-management__title mb-comicManagementTitleMarginBottom">Comic Management</h2>
      <form className="comic-management__form grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-comicManagementGap">
        <input className="comic-management__input p-comicManagementInputPadding mb-comicManagementInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" type="text" placeholder="Comic Name" />
        <button className="comic-management__button p-comicManagementButtonPadding bg-buttonBackground text-white border-0 rounded-formButton cursor-pointer transition-colors hover:bg-buttonHover" type="submit">Add Comic</button>
      </form>
      <ul className="comic-management__list list-none p-0">
        <li className="p-comicManagementListItemPadding border border-gray-300 rounded-comicManagementListItem mb-comicManagementInputMarginBottom">Comic 1</li>
        <li className="p-comicManagementListItemPadding border border-gray-300 rounded-comicManagementListItem mb-comicManagementInputMarginBottom">Comic 2</li>
      </ul>
    </div>
  </main>
);

const Chat = () => (
  <div className="chat flex flex-col p-chatPadding border border-gray-300 rounded-chat max-h-[400px] overflow-y-auto">
    <h2 className="chat__title mb-5">Chat</h2>
    <ul className="chat__list list-none p-0 mb-chatListMarginBottom">
      <li className="p-chatListItemPadding border border-gray-300 rounded-chatListItem mb-comicManagementInputMarginBottom">Message 1</li>
      <li className="p-chatListItemPadding border border-gray-300 rounded-chatListItem mb-comicManagementInputMarginBottom">Message 2</li>
    </ul>
    <form className="chat__form flex flex-col">
      <input className="chat__input p-comicManagementInputPadding mb-comicManagementInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" type="text" placeholder="Type a message" />
      <button className="chat__button p-comicManagementButtonPadding bg-buttonBackground text-white border-0 rounded-formButton cursor-pointer transition-colors hover:bg-buttonHover" type="submit">Send</button>
    </form>
  </div>
);

const Checkout = () => (
  <div className="checkout flex flex-col p-checkoutPadding border border-gray-300 rounded-checkout">
    <h2 className="checkout__title mb-5">Checkout</h2>
    <form className="checkout__form flex flex-col">
      <input className="checkout__input p-comicManagementInputPadding mb-comicManagementInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" type="text" placeholder="Card Number" />
      <button className="checkout__button p-comicManagementButtonPadding bg-buttonBackground text-white border-0 rounded-formButton cursor-pointer transition-colors hover:bg-buttonHover" type="submit">Pay</button>
    </form>
  </div>
);

const SupportTicket = () => (
  <div className="support-ticket flex flex-col p-supportTicketPadding border border-gray-300 rounded-supportTicket">
    <h2 className="support-ticket__title mb-5">Support Ticket</h2>
    <form className="support-ticket__form flex flex-col">
      <input className="support-ticket__input p-comicManagementInputPadding mb-comicManagementInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" type="text" placeholder="Subject" />
      <textarea className="support-ticket__textarea p-comicManagementInputPadding mb-comicManagementInputMarginBottom border border-gray-300 rounded-formInput transition-colors focus:border-primary" placeholder="Description"></textarea>
      <button className="support-ticket__button p-comicManagementButtonPadding bg-buttonBackground text-white border-0 rounded-formButton cursor-pointer transition-colors hover:bg-buttonHover" type="submit">Submit</button>
    </form>
  </div>
);

const App = () => (
  <>
    <Header />
    <Main />
    <Chat />
    <Checkout />
    <SupportTicket />
  </>
);

export default App;