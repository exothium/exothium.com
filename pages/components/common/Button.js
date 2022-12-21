import {useEffect, useState} from "react";

function Button(props) {
    const {onClick, text = 'button', shadowDirection, href} = props;
    const [shadow, setShadow] = useState('');

    useEffect(() => {
        switch (shadowDirection) {
            case 'top':
                setShadow('0px -10px 10px 1px #2e0119');
                break;
            case 'bottom':
                setShadow('0px 10px 10px 1px #2e0119');
                break;
            case 'left':
                setShadow('-10px 0px 10px 1px #2e0119');
                break;
            case 'right':
                setShadow('10px 0px 10px 1px #2e0119');
                break;
            case 'topLeft':
                setShadow('-10px -10px 10px 1px #2e0119');
                break;
            case 'topRight':
                setShadow('10px -10px 10px 1px #2e0119');
                break;
            case 'bottomLeft':
                setShadow('-10px 10px 10px 1px #2e0119');
                break;
            case 'bottomRight':
                setShadow('10px 10px 10px 1px #2e0119');
                break;
            default:
                setShadow('0px 0px 0px 0px #2e0119');
        }
    }, [shadowDirection]);

    function handleClick() {
        window.open(href, '_blank');
    }


    return (
        <button
            className="buttonCommon"
            style={{boxShadow: shadow}}
            onClick={handleClick}
        >
            <div className="button__text">
                <span className="button__text__span">{text}</span>
            </div>
        </button>
    )
}

export default Button;