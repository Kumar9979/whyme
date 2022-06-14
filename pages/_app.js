import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {


  return(<>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous" 
    
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=poppins:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
    
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
    
    
     <Component {...pageProps} /></>)
}

export default MyApp


