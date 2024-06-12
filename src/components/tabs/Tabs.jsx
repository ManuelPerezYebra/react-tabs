import { useState } from "react";
import { v4 } from "uuid";

const titles = ['Title 1', 'Title 2', 'Title 3'];
const texts = ['Text 1', 'Text 2', 'Text 3'];


const Tabs =()=>{
    const [activeTab, setActiveTab] = useState(0);
    return <>
        {titles.map((title, index)=>(

         <button key={v4()} onClick={()=>setActiveTab(index)}>{title}</button>

        ))}

	<p>{texts[activeTab]}</p>
	
    
    </>
}


export default Tabs