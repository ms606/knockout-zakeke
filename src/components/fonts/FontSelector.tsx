import './fontSelector.css'
import React from 'react'
import {useZakeke } from '@zakeke/zakeke-configurator-react';

export const FontSelector: React.FC<any> = ({fontSelectorVisible, togglerFontSelectorVisible, item}) => {
    const { setItemFontFamily, fonts, translations} = useZakeke();
    const dynamicsVals = translations?.dynamics; 
    return(
       <div className='fselector' style={{display: fontSelectorVisible ? 'block' : 'none' }}>
        <div className="donebut fsclose" onClick={() => togglerFontSelectorVisible(fontSelectorVisible)}>{dynamicsVals?.get("Close") ?? "Close"} X</div>

        <div id='fontList'>
            <div className='chead'>
             {dynamicsVals?.get("Select") ?? "Select"}
             <span style={{color: "rgb(255, 255, 255)", fontWeight: "500", paddingLeft: "8px"}}>
                {dynamicsVals?.get("Font") ?? "Font"}
             </span>
            </div>
            <div style={{color: 'white' ,fontSize: '11px'}}>
                {dynamicsVals?.get("Please select a font") ?? "Please select a font"}
            </div>
            <div>
             {fonts.map(x =>
                <div key={x.fontFamilyGuid} className='fsamp'
                 onClick={() => {
                    setItemFontFamily(item.guid, x.name)}
                    }>
                    <img src={x.imageUrl}/>                    
                </div>    
             )}
            </div>
        </div>
       </div> 
    )
}