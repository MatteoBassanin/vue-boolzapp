const DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {
        hiddenMenu:false,
        
        timeNow: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
        newText : "",
        searchItem : "",
        activeChat : 0,
        activeMessage : 0,
        contacts: [
            {
            name: 'Michele',
            avatar: "./img/avatar_1.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: "./img/avatar_2.jpg",
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: "./img/avatar_3.jpg",
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: "./img/avatar_4.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: "./img/avatar_5.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: "./img/avatar_5.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: "./img/avatar_7.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: "./img/avatar_8.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ]
            
    }
  },methods:{
    changeContact(index){
        console.log("show",index);
        this.activeChat = index;
    },
    sendingText(){
      const newMessageText=
        {
        date: this.timeNow,
        message: this.newText,
        status:"sent",
      }
      this.contacts[this.activeChat].messages.push(newMessageText),
      this.newText= ""
      setTimeout(()=> {
        const newreceivedText = {
          date: this.timeNow,
          message: "ok",
          status:"received",
        }
      this.contacts[this.activeChat].messages.push(newreceivedText);
      }, 1000);
    },
    filteringContacts(){
      this.contacts.forEach(element => {
        if (element.name.toLowerCase().includes(this.searchItem)){
          return element.visible = true;          
        }else{
          return element.visible = false;
        }
          
      });
    },
    changingDisplay(index){
      this.activeMessage = index;
      if(this.hiddenMenu == false){
        this.hiddenMenu = true;

      }else{
        this.hiddenMenu = false;
      }
      console.log(index);
    },
    showingHiddenTopMenu(element){
      element = document.querySelector(".top")
      element.classList.toggle('d_none')
    },
    deleteCurrentMessage(){
      this.contacts[this.activeChat].messages.splice(this.activeMessage, 1);
      this.currentMessage = false;
    },
    deleteAllMessages(){
      this.contacts[this.activeChat].messages= false;
    },
    deleteChat(){
      this.contacts.splice(this.activeChat, 1);
      
    }
  },
}).mount('#app')