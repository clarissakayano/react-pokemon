import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif;
   }
   #root{
       margin:0 auto;
   }
   a:link {
    color: red;
    text-decoration: none;

}
li {
  list-style-type: none;
}

a:visited {
    color: red;
}

a:hover {
    color: green;
}

`;
