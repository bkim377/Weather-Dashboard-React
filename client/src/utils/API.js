import axios from "axios";
const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = "27e7765f93be01e0b5a867f22943cd6a";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + "&appid=" + APIKEY);
    }
};