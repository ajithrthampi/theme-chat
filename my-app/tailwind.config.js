/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        perifpp:[ 'Poppins', 'sans-serif']
      },
      textColor:{
        skin:{
          text_base: "var(--text-color)",
          text_chat_button_send: "var(--text-chat-button-send)",
          
        }
      },
      backgroundColor:{
        skin:{
          fill_Background:"var(--fill-background)",
          fill_Button:"var(--fill-button)",
          fill_Chat_Background: "var( --fill-chat-background)",
          fill_line: "var(--fill-chat-line)"
        },
       
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

