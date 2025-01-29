import {assets} from '../../assets/assets'
import  { useContext, useState } from 'react'
import './Sidebar.css'
import { Context } from '../../context/context'
function Sidebar() {
const [extended,SetExtended] = useState(false)
const {onSent,prevPrompts,setRecentPrompt, newChat}= useContext(Context);
const loadPrompt=async (prompt)=>{
  setRecentPrompt(prompt);
  await onSent(prompt);
}  
return (
   <div className="sidebar">
      <div className="top">
        <img onClick={() => SetExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
{extended? 
  <div className="recent">
    <p className="recent-title">
        Recent
    </p>
    {prevPrompts.map((item,index)=>{
      return(
<div key={index} onClick={()=>loadPrompt(item)} className="recent-entry">
      <img src={assets.message_icon} alt="" />
    <p>{item}...</p>
    </div>
      )
    })}
    
   </div>
   :null
}
   
      </div>
      <div className="bottom">
<div className="bottom-item recent-entry">
  <img src={assets.question_icon} alt="" />
{extended?<p>Help</p>:null}
</div>

<div className="bottom-item recent-entry">
  <img src={assets.history_icon} alt="" />
{extended?<p>Activities</p>:null}
</div>
<div className="bottom-item recent-entry">
  <img src={assets.setting_icon} alt="" />
{extended?<p>Settings</p>:null}
</div>
      </div>
    </div>
  )
}

export default Sidebar