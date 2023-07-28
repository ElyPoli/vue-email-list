"use strict";

const app = Vue.createApp({
    data() {
        return {
            emailsCreated: [],
            btnClick: false,
        }
    },
    methods: {
        /**
         * Genera 10 indirizzi e-mail casuali tramite API
         */
        getMailApi() {
            let url = "https://flynn.boolean.careers/exercises/api/random/mail"; // url api

            for (let i = 1; i < 11; i++) {
                axios.get(url).then((axiosAnswer) => {
                    this.emailsCreated.push(axiosAnswer.data.response); // salvo i dati ricevuti in una variabile
                })
            }

            this.btnClick = true; // disattivo il pulsante dopo il click
        }
    },
})

app.mount("#app");