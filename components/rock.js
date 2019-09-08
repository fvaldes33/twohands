import React from 'react';

const Rock = ({ size = 100 }) => {
  const s = `${size}pt`;

  return (
    <svg width={s} height={s} version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="m84.695 36.262c-1.9258-2.2266-4.2383-3.3242-6.9375-3.2969h-0.21484c-0.38672-2.8164-1.4258-5.4062-3.125-7.7734l-0.023438-0.023437c-2.6719-3.6133-5.8906-5.3828-9.6562-5.3086-0.90234 0.003906-1.7812 0.10156-2.6328 0.30078-0.21484-0.32812-0.44141-0.67969-0.68359-1.0508-0.039063-0.042969-0.074219-0.085937-0.10938-0.12891-1.668-2.3828-4.3359-3.5781-8.0078-3.5742-2.0469-0.085938-4.1328 0.63672-6.25 2.1641-0.42188-0.73047-0.88281-1.4297-1.3906-2.0977-0.24609-0.34766-0.55859-0.74609-0.94141-1.1992-0.14062-0.16406-0.30078-0.3125-0.47266-0.44922-0.042969-0.03125-0.09375-0.066407-0.14844-0.10938-3.2422-3.543-6.4609-5.2773-9.6562-5.2031-3.3047-0.1875-6.5117 1.5195-9.6172 5.1172l-0.019531 0.023438c-5.2695 5.8867-6.3125 13.359-3.125 22.418-0.21875 0.19922-0.44141 0.40625-0.66406 0.62109h0.023438c-4.8047 4.6055-7.1836 9.6758-7.1328 15.203-0.10547 3.9023 1.8633 8.3438 5.9102 13.316l0.023438 0.023437c2.2773 2.9492 5.8008 5.418 10.578 7.4062-0.64062 1.1992-0.93359 2.4062-0.87891 3.6172-0.17578 4.4297 2.4414 7.9688 7.8594 10.621l-0.023438-0.023437c3.7148 1.8672 7.8086 3.0781 12.27 3.6406h0.019531c4.5352 0.54297 9.1055 0.042968 13.703-1.5l0.023437-0.023438c5.0117-1.6055 7.7852-5.4648 8.3281-11.582 1.2266-0.625 2.5117-1.4414 3.8555-2.4414l0.023437-0.019531c4.918-3.4453 6.6953-9.2422 5.332-17.387 0.67969-0.59766 1.3633-1.2812 2.0586-2.0586h0.023437c3.0508-3.3984 4.5273-6.9297 4.4336-10.598v-0.042969c-0.074219-3.7539-0.97266-6.6016-2.6992-8.543-0.027344-0.007812-0.039062-0.019531-0.054688-0.039062zm-22.949 7.8594c0.023437-0.042969 0.054687-0.085938 0.085937-0.12891 0.17188-0.28516 0.34375-0.57031 0.51172-0.85547 1.2852-2.1328 2.1914-4.3828 2.7188-6.7461 0.38672-1.7227 0.57812-3.4922 0.57812-5.3086 0-1.8477-0.25-3.6172-0.75-5.3086 1.8164 0.12109 3.3945 1.0859 4.7305 2.8906l0.023437 0.023438c1.4414 2.0234 2.1641 4.293 2.1641 6.8086 0 2.9883-0.78906 5.7695-2.3555 8.3516l0.019531-0.023437c-1.6328 2.625-3.7383 3.9727-6.3164 4.0469-1.0352 0-1.8047-0.32812-2.3125-0.98438v-0.042969c-0.18359-0.28906-0.32812-0.60938-0.42969-0.96484 0.46094-0.53516 0.90234-1.1211 1.332-1.7578zm-12.633-8.2227c0.035157-0.11719 0.0625-0.23047 0.085938-0.34375 0.058593-0.3125 0.11328-0.62891 0.17188-0.94141l-0.042969 0.14844c0.55859-2.3359 0.75781-4.6953 0.59766-7.0664v-0.015624c-0.082031-1.4219-0.28906-2.8398-0.62109-4.2617 1.3984-1.2969 2.7305-1.9961 4.0039-2.0977 1.3945 0.003907 2.457 0.36719 3.1914 1.0938l0.0625 0.0625c0.011719 0.023438 0.027344 0.042969 0.042969 0.0625 0.25391 0.39844 0.50781 0.76953 0.75 1.1133v0.019531c0.27734 0.39062 0.52734 0.75391 0.75 1.0938 0.019531 0.035156 0.039062 0.070313 0.0625 0.10547 0.066406 0.16797 0.15234 0.33203 0.25781 0.49219 0.035157 0.11719 0.078125 0.23047 0.12891 0.34375 0.78906 1.6641 1.1797 3.457 1.1797 5.375-0.003906 1.3789-0.15234 2.7188-0.44922 4.0273-0.38672 1.7461-1.0508 3.4102-1.9922 4.9883-0.17188 0.28516-0.34375 0.57031-0.51562 0.85547-0.53125 0.76172-1.1016 1.4023-1.7109 1.9258h0.023438c-1.2734 1.0703-2.7188 1.6055-4.3477 1.6055-1.0977 0-1.9141-0.37109-2.4414-1.1133h-0.023437c-0.53125-0.95703-0.79297-2.1992-0.79297-3.7266 0.64453-1.0742 1.1875-2.3242 1.6289-3.7461zm-19.828-18.371l0.023438-0.019532c1.6875-1.957 3.3711-2.9883 5.0508-3.082 1.7617 0.16016 3.5938 1.293 5.5039 3.4062 0.09375 0.097657 0.19531 0.1875 0.30078 0.27734 0.09375 0.074219 0.17969 0.14844 0.25781 0.21484 0.15625 0.19531 0.29297 0.375 0.40625 0.53516 0.03125 0.035156 0.058594 0.070313 0.085937 0.10547 0.85547 1.1133 1.543 2.3516 2.0586 3.7031 0.12891 0.44922 0.25781 0.90625 0.38281 1.3711 0.37109 1.3359 0.58984 2.668 0.66406 4.0039v0.019531c0.125 1.7891-0.015625 3.5664-0.42969 5.332-0.015625 0.050781-0.027344 0.10156-0.042969 0.14844-0.046875 0.25781-0.097656 0.51562-0.14844 0.76953-0.082032 0.25781-0.16797 0.50781-0.25781 0.75-0.54297-0.98438-1.293-1.8398-2.2461-2.5703-0.023437-0.011719-0.042969-0.027344-0.0625-0.042969-1.2656-0.94922-2.7852-1.5625-4.5586-1.8398 0.24609-0.58594 0.61719-1.4453 1.1133-2.5703 0.33594-0.75391 0.35547-1.5078 0.066406-2.2695-0.29688-0.75391-0.81641-1.2969-1.5625-1.625-0.75-0.33594-1.5078-0.35547-2.2695-0.0625-0.75391 0.29688-1.2969 0.81641-1.625 1.5625-1.1602 2.6094-1.7734 4.1875-1.8438 4.7305-0.011719 0.09375-0.019532 0.1875-0.023438 0.27734-0.011718 0.10938-0.015625 0.21875-0.023437 0.32031-0.050781 0.015625-0.10156 0.027344-0.14844 0.042969-0.035156 0.007813-0.070312 0.015625-0.10547 0.023437-1.0195 0.31641-2.0469 0.76563-3.0859 1.3477-1.6562-5.9141-0.81641-10.867 2.5195-14.859zm42.777 52.672l-0.023438 0.023437c-3.0195 2.2383-5.4453 3.0078-7.2812 2.3125-0.72266-0.38281-1.4727-0.45703-2.2461-0.21484-0.78125 0.23828-1.3672 0.71484-1.7539 1.4336-0.38281 0.71875-0.45312 1.4688-0.21484 2.2461 0.23828 0.78125 0.71875 1.3672 1.4336 1.7539 1.0703 0.66406 2.2227 1.0508 3.4688 1.1562-0.65625 2.2031-1.9805 3.7031-3.9844 4.4961l0.023437-0.019531c-3.7305 1.2539-7.4336 1.668-11.109 1.2422h-0.023438c-3.7539-0.46875-7.1914-1.4844-10.32-3.043l-0.019531-0.019532c-2.8711-1.4062-4.3906-3.1719-4.5625-5.3086 0.070312-0.52344 0.3125-1.0586 0.72656-1.6055 1.5039 0.43359 3.0859 0.83203 4.7539 1.1992 0.79297 0.17188 1.5391 0.035157 2.2266-0.40625 0.69141-0.4375 1.1289-1.0508 1.3086-1.8398 0.17188-0.79688 0.035156-1.5391-0.40625-2.2266-0.4375-0.69141-1.0508-1.125-1.8438-1.3047-8.6484-1.8945-14.57-4.7422-17.77-8.543l-0.023437-0.023438c-2.9609-3.6367-4.4961-6.8438-4.6016-9.6133 0.058594-3.9492 1.8281-7.5898 5.3125-10.922 0.60547-0.58594 1.2148-1.1133 1.8203-1.5859 0.019531-0.015625 0.042969-0.027344 0.0625-0.042969 0.082031-0.058594 0.16406-0.125 0.23438-0.19141 1.4961-1.1719 2.9609-1.9922 4.3906-2.4609l-0.10547 0.023438c0.49609-0.14062 0.98828-0.24609 1.4766-0.32031 0.039062 0.003907 0.074219 0.003907 0.10938 0 0.26953-0.023437 0.54688-0.039062 0.83594-0.042969 1.375 0 2.5078 0.30078 3.4023 0.89844l-0.042969-0.042969c0.67969 0.51562 1 1.2422 0.96484 2.1836 0.003906 0.42969-0.046875 0.84375-0.14844 1.2422l-0.023437 0.0625v0.023438c-0.30078 0.88281-0.84375 1.7109-1.625 2.4844l-0.007813 0.019531c-1.8828 1.9023-3.2344 3.2852-4.0508 4.1562-0.28125 0.12109-0.54297 0.29297-0.79297 0.51172-0.5625 0.50781-0.88281 1.1328-0.96484 1.8828-0.082031 0.75391 0.09375 1.4375 0.53516 2.0547 0.44922 0.61328 1.043 0.99609 1.7773 1.1562 1.0547 0.30859 2.4883 0.14453 4.3047-0.49219l0.042969-0.023438c0.85938-0.3125 1.4844-0.49219 1.8828-0.53516 1.8398 0.058594 3.7461 0.8125 5.7188 2.2695l0.019531 0.023437c1.8047 1.375 2.8555 2.7969 3.1484 4.2617 0.10938 0.80469 0.48828 1.4531 1.1328 1.9492 0.64844 0.5 1.375 0.70312 2.1836 0.59766 0.80469-0.10938 1.4531-0.48438 1.9492-1.1328 0.5-0.64844 0.69922-1.375 0.59766-2.1875-0.24609-2.6055-1.7227-5.0664-4.4297-7.3867 0.38672 0.042969 0.78516 0.066406 1.1992 0.066406 1.6992 0 3.2891-0.30469 4.7773-0.92188 0.12109 0.21094 0.25 0.41797 0.38672 0.62109 1.4961 2.4531 3.9141 3.6797 7.2578 3.6836 0.32812 0.003906 0.64844-0.003906 0.96484-0.023438 0.25391 1.8789 1.2109 3.4766 2.8711 4.7969l0.019531 0.019531c1.6836 1.3984 3.8086 2.0977 6.3828 2.0977 0.64062 0.011719 1.2852-0.054688 1.9258-0.19141 0.34766 4.3828-0.73828 7.625-3.2539 9.7227zm9.4648-25.223c-0.050782 2.2539-1.0273 4.4453-2.9336 6.5742h0.023438c-0.85938 0.94141-1.6992 1.6875-2.5273 2.2461l-0.066406 0.042969c-0.054688 0.035156-0.10547 0.070312-0.14844 0.10938-0.83594 0.51562-1.6641 0.78906-2.4844 0.8125-1.0703 0-1.9648-0.26172-2.6758-0.79297l-0.023438-0.019531c-0.45703-0.35938-0.69922-0.80469-0.72656-1.3281-0.003906-0.13281-0.003906-0.24219 0-0.32031 0.019531-0.046875 0.039062-0.097656 0.0625-0.14844 0.085937-0.16797 0.15625-0.33984 0.21484-0.51562 1.5781-1.1172 2.9922-2.6836 4.2383-4.6875l0.019531-0.023438c1.5-2.4727 2.4805-5.0859 2.9336-7.8359 0.10156-0.066406 0.19922-0.14453 0.30078-0.23438l0.023437 0.019531c0.9375 0.027344 1.75 0.42969 2.4414 1.1992 0.83984 1.1328 1.2812 2.7539 1.3281 4.8594l0.003906 0.042968z" />
    </svg>
  );
}

export default Rock;
