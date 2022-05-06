
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import img from '../../image/119711044_788870178530785_8282321138516462315_n-modified.png'




export default function Chat (){

    const date = new Date().getHours()
    console.log(date)
    return(
           <div style={{zIndex:'300'}}>
            <WhatsAppWidget 
            phoneNo="5491137858227"
			autoOpen={false}
			messageBox={true}
			messageBoxTxt=""
			iconColor="white"
			iconBgColor="#25d366"
			headerIcon={img}
			headerIconColor="#fff"
			headerTxtColor="black"
			headerBgColor="#25d366"
			headerTitle="Hit Pasta"
			headerCaption={date >= 24 ? 'Offline': 'Online'}
			bodyBgColor="#2b2b2b"
			chatPersonName="Hit Pasta"
			chatMessage={<>Hola, <br /> en que podemos ayudarte?</>}
			footerBgColor="#2b2b2b"
			btnBgColor="#25d366"
			btnTxtColor="black"
			btnTxt="Start Chat"
            />
           </div>
    )
}