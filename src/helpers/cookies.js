export const getCookies = (name) => {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    })
}

export const deleteCookies = (name, path, domain) => {
    if( getCookies( name ) ) {
        document.cookie = name + "=" +
          ((path) ? ";path="+path:"")+
          ((domain)?";domain="+domain:"") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
      }
}