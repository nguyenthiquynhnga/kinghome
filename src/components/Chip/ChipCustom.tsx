import React from "react"
import style from "./Chip.module.css"
type ChipProps = {
    label: string;
    handleSelect: Function;
    selected: boolean;
    fontSize?: string;
    height?: string;
}


const ChipCustom: React.FC<ChipProps> = ({ label, handleSelect, selected, fontSize = '14px', height = '35px' }) => {
    const handleClick = () => {
        console.log("clicked");
        
        handleSelect();
    }
    return (
        <div className={selected ? style.chip_selected : style.chip_default} style={{
            fontSize: fontSize,
            height: height
        }} onClick={handleClick}>
            <span style={{
                fontSize:fontSize,
                lineHeight:height
            }}>{label}</span>
        </div>
    )
}

export default ChipCustom;