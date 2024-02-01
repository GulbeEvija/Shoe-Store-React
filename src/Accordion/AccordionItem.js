import { useState } from "react"
	
export const AccordionItem = ({ title, content}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (<div className="questionContainer">
        <div className={isOpen ? 'active' : 'default'} onClick={handleIsOpen}>
            <p className="blogHeaderTwo">{ title }</p>
        </div>
        {
            isOpen && <div className="content"> 
            <p className="blogText">{ content }</p>
            </div>
        }
    </div>
    )
}
