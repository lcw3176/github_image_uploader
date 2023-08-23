import { defineStore } from "pinia";
import axios from 'axios';
import router from '../router'

async function getToken(authCode){
    try{
        const response = await axios.post("https://github.com/login/oauth/access_token",
        {
            client_id: "",
            client_secret: "",
            code: authCode,
        },
        {
            headers: {
                accept: "application/json",
            },
        });
    
        return response.data;
    } catch(e){
        console.error(e);

        return "";
    }
  
}


export const useAuthStore = defineStore("authStore", {

    state: () => ({
        accessToken: '',
        authCode : '',
    }),


    getters: {

    },

    actions: {
        async moveToGithub(){
            window.location.href = "https://github.com/login/oauth/authorize?client_id=";
        },


        async getAuthCode() {
            const params = new URLSearchParams(window.location.search);
            this.authCode = params.get("code");

            if(this.authCode === '' || this.authCode === undefined){
                alert('login failed');
                return;
            }

            router.push('/auth/user');
        },

        async requestToken(){
            if(this.authCode === '' || this.authCode === undefined){
                alert('login to github first');
                return;
            }

            
            let token = await getToken(this.authCode);

            if(token === ''){
                alert('failed to get data');
                return;
            }

            this.accessToken = token;
        },
    }
});

