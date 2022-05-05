
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import img from '../../image/119711044_788870178530785_8282321138516462315_n.jpg'




export default function Chat (){

    const date = new Date().getHours()
    console.log(date)
    return(
           <div style={{zIndex: '100'}}>
            <WhatsAppWidget 
            phoneNo="5491137858227"
			autoOpen={false}
			messageBox={true}
			messageBoxTxt=""
			iconColor="white"
			iconBgColor="#25d366"
			headerIcon={img}
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="#fff"
			headerTitle="Hit Pasta"
			headerCaption={date >= 24 && date <= 12 ? 'Offline': 'Online'}
			bodyBgColor="#bbb"
			chatPersonName="Hit"
			chatMessage={<>Hola, <br /> en que podemos ayudarte?</>}
			footerBgColor="#999"
			btnBgColor="#25d366"
			btnTxtColor="black"
			btnTxt="Start Chat"
            />
           </div>
    )
}