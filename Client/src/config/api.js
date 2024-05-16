import { instance } from "./axios";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

export const getAPI = function(url){
    let cookie = getCookie('shope-b3')
    return instance.get(url, {headers: {Authorization: cookie} })
}
export const postAPI = function(url, data){
    let cookie = getCookie('shope-b3')
    return instance.post(url,data, {headers: {Authorization: cookie}})
}
export const patchAPI = function(url, data){
    let cookie = getCookie('shope-b3')
    return instance.patch(url,data, {headers: {Authorization: cookie}})
}
export const putAPI = function(url, data){
    let cookie = getCookie('shope-b3')
    return instance.put(url,data, {headers: {Authorization: cookie}})
}
export const deleteAPI = function(url){
    let cookie = getCookie('shope-b3')
    return instance.delete(url, {headers: {Authorization: cookie}})
}