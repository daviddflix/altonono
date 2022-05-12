
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import img from '../../image/favicon.ico'




export default function Chat (){

    const date = new Date().getHours()
   
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
			bodyBgColor="#fff"
			// chatPersonName="Hit Pasta"
			chatMessage={<>Hola, como podemos ayudarte?</>}
			footerBgColor="#FFF"
			btnBgColor="#25d366"
			btnTxtColor="black"
			btnTxt="Chatea con nosotros"
            />
           </div>
    )
}