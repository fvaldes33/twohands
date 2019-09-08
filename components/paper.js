import React from 'react';

const Paper = ({ size = 100 }) => {
  const s = `${size}pt`;

  return (
    <svg width={s} height={s} version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="m77.746 76.328c0.20312-1.1875 0.17969-2.3086-0.070313-3.3594 1.5586-0.042969 3.1211-0.11719 4.6836-0.22266h0.015625c2.3125-0.19531 4.2305-1.1484 5.75-2.8594 1.5703-1.7617 2.2773-3.8086 2.1172-6.1484-0.125-1.8438-0.76172-3.4492-1.9102-4.8203 0.875-0.12109 1.4648-0.24219 1.7734-0.35938l0.035156-0.015625c2.4375-0.91016 4.3047-2.4805 5.5938-4.7148l0.019531-0.015625c1.4219-2.4219 1.5156-5.043 0.29297-7.8672v0.019532c-1.1406-2.875-3.6133-4.6211-7.4219-5.2344h0.035156c-0.55469-0.10547-1.1719-0.1875-1.8398-0.24219 0.16406-0.25391 0.3125-0.52734 0.44531-0.80859l0.019531-0.035157c0.94531-2.082 1.0508-4.2109 0.32812-6.3867-0.007812-0.011718-0.011719-0.03125-0.019531-0.050781-0.78906-2.168-2.1758-3.7695-4.1641-4.8047h0.019531c-1.7344-0.98438-4.1602-1.3359-7.2812-1.0508l-0.003907-0.019531c-2.2656 0.18359-11.66 2.2422-28.184 6.1797 0.046875-0.078125 0.09375-0.16016 0.13672-0.24219v0.019531c1.1914-2.0195 2.1016-4.2383 2.7383-6.6641l-0.015625 0.019531c0.75391-2.707 0.48828-5.5938-0.79297-8.6562-1.4883-3.6406-4.2773-5.1992-8.3672-4.6836h-0.015626c-3.9414 0.38672-6.4883 3-7.6445 7.832-0.72656 3.082-1.4492 5.125-2.1719 6.1289l-0.015625 0.019531c-0.79688 0.90625-2.1016 1.8672-3.9102 2.8906-0.011719 0.003907-0.023437 0.011719-0.035156 0.015625-2.5859 1.4102-4.6016 3.5586-6.043 6.4375v-0.019531c-0.4375 0.85156-0.82031 1.7227-1.1562 2.6172-1.4336-0.92969-2.6875-1.3516-3.7539-1.2539-3.5586-0.14062-6.4062 1.9648-8.5391 6.3164l0.015625-0.019531c-1.5 2.9648-2.4766 6.2539-2.9258 9.8672v0.019531c-0.4375 3.6484-0.035156 7.3086 1.2031 10.984l0.015625 0.019531c1.3906 4.332 4.8789 6.5859 10.465 6.7656 0.29688 0.011719 0.57031-0.03125 0.82812-0.11719 4.7383 8.3359 14.23 10.719 28.473 7.1445 7.1758 2.3359 14.574 3.8672 22.191 4.5938h0.015625c2.1562 0.20703 4.1211-0.39453 5.8867-1.8086 1.7852-1.4258 2.8438-3.2266 3.1836-5.4102zm-30.402-2.1172c-0.44922-0.14844-0.90625-0.15625-1.3594-0.035157-13.996 3.6641-22.527 0.63281-25.598-9.0898-0.1875-0.625-0.5625-1.0938-1.1367-1.4102-0.57812-0.3125-1.1797-0.375-1.8086-0.19141-0.625 0.18359-1.0977 0.5625-1.4141 1.1367-0.3125 0.57812-0.375 1.1797-0.19141 1.8086 0.058593 0.21484 0.12109 0.42578 0.19141 0.63672-2.4492-0.35547-4.0625-1.5078-4.8359-3.4609l0.019532 0.019531c-1.0078-2.9766-1.3398-5.9453-1-8.9023 0.375-3.043 1.1914-5.8125 2.4453-8.3125l0.019531-0.019531c1.1289-2.3086 2.5508-3.5312 4.2695-3.668 0.60938 0.11719 1.4258 0.60156 2.4453 1.4492-0.0625 0.34766-0.10938 0.69922-0.15625 1.0508-0.082031 0.64844 0.078125 1.2344 0.48047 1.7539 0.40625 0.51563 0.93359 0.81641 1.582 0.89844s1.2383-0.078125 1.7578-0.48438c0.51562-0.40625 0.8125-0.93359 0.89453-1.582 0.30859-2.5195 1.0195-4.8594 2.1328-7.0234v-0.019531c0.98438-1.9727 2.3594-3.4492 4.1133-4.4219l0.035157-0.019531c2.4766-1.3984 4.2305-2.7422 5.2695-4.0273l0.019531-0.019531c1.1094-1.2539 2.1484-3.9336 3.1172-8.0391 0.58594-2.4609 1.7969-3.8672 3.6328-4.2188h0.019531c1.6406-0.21094 2.7695 0.38672 3.3906 1.793 0.82812 1.9805 1.0234 3.8477 0.58594 5.5938l-0.019531 0.015625c-0.51172 1.9844-1.2539 3.8047-2.2227 5.457v0.019532c-1.1875 2.0352-1.918 3.8398-2.1875 5.4062-0.015626 0.046874-0.027344 0.09375-0.035157 0.13672-0.015625 0.089844-0.027343 0.18359-0.035156 0.27734-0.054687 0.75781-0.03125 2.1758 0.070313 4.2539v0.035156c0.0625 1.6328-0.44531 3.6797-1.5156 6.1445h-0.015624c-1.0898 2.4102-3.1719 4.3672-6.25 5.8711-0.58594 0.28906-0.98828 0.74219-1.2031 1.3594-0.21484 0.61719-0.18359 1.2188 0.10156 1.8086 0.28906 0.58594 0.74219 0.99219 1.3594 1.207 0.61328 0.21484 1.2148 0.18359 1.8086-0.10547 4.2695-2.0781 7.1211-4.8242 8.5547-8.2461h-0.015625c1.4453-3.3047 2.0898-6.0625 1.9297-8.2812v-0.035156c-0.035156-0.76562-0.058594-1.4258-0.070313-1.9805 17.711-4.2344 27.73-6.457 30.059-6.6641v-0.019532c1.9766-0.17188 3.5195 0.003906 4.6328 0.53516h0.019531c0.88672 0.47656 1.5117 1.1992 1.875 2.1719 0.007812 0.015624 0.011719 0.035156 0.019531 0.050781 0.30859 0.96094 0.25391 1.9023-0.15625 2.8242-0.003906 0.011718-0.011719 0.023437-0.019531 0.035156-0.41016 0.84375-1.0508 1.4297-1.9297 1.7578l0.019531-0.019531c-1.4219 0.51562-2.8594 0.98828-4.3047 1.4141-0.042969 0.011718-0.089844 0.023437-0.13672 0.035156-0.22656 0.078125-0.85156 0.26953-1.875 0.57031-0.050781 0.007813-0.10547 0.019532-0.15625 0.035156-4.9688 1.4492-11.594 2.7969-19.883 4.0469-0.65234 0.09375-1.1719 0.40625-1.5664 0.92969-0.39063 0.53125-0.53125 1.125-0.42969 1.7734 0.09375 0.64453 0.40625 1.1602 0.92969 1.5508 0.52734 0.38672 1.1133 0.53125 1.7539 0.42969 8.5234-1.2695 15.344-2.6484 20.469-4.1328 5.3828-0.875 9.3828-1.0938 12-0.65625h0.035156c1.8867 0.30078 3.1562 1.1055 3.8047 2.4102v0.015625c0.56641 1.3047 0.54687 2.5156-0.050782 3.6328l0.019532-0.019531c-0.72266 1.2422-1.7617 2.1211-3.1172 2.6328-1.7344 0.55078-12.566 1.2969-32.504 2.2383-0.027344-0.003906-0.058594-0.003906-0.085938 0-0.64062 0.027344-1.1797 0.27734-1.6172 0.75781-0.44141 0.48047-0.65625 1.043-0.63672 1.6875 0.023438 0.64844 0.26953 1.1992 0.73828 1.6523 0.46875 0.44531 1.0273 0.66406 1.6719 0.65234h0.085938c16.023-0.25391 24.457-0.39844 25.309-0.44531h0.035156c1.0195-0.070312 1.9141 0.21484 2.6875 0.85938l0.019531 0.015624c0.77734 0.68359 1.1992 1.5352 1.2734 2.5508 0.070313 1.0156-0.23437 1.9023-0.91406 2.668-0.67969 0.76172-1.5352 1.1875-2.5625 1.2734-1.6133 0.11328-3.2266 0.19141-4.8359 0.24219-1.1406 0.019531-2.3203 0.03125-3.5273 0.035156-0.11328-0.011719-0.22656-0.011719-0.34375 0-5.832-0.007813-12.527-0.41406-20.09-1.2227-0.64844-0.070313-1.2266 0.10156-1.7383 0.51562-0.51172 0.41016-0.80469 0.9375-0.87891 1.582-0.070313 0.64844 0.10156 1.2266 0.51562 1.7383 0.41016 0.51172 0.9375 0.80859 1.5859 0.87891 7.4141 0.79297 14.02 1.2109 19.812 1.2578 0.011719 0.015625 0.023438 0.035156 0.035156 0.050781 0.50391 0.72266 0.67578 1.5508 0.51562 2.4766v0.019531c-0.16406 0.98438-0.64453 1.8008-1.4453 2.4414-0.75391 0.60547-1.5859 0.875-2.4961 0.8125-7.5-0.72266-14.762-2.2617-21.797-4.6172z" />
    </svg>
  );
}

export default Paper;
