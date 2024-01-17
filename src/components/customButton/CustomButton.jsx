import "./CustomButton.scss";

const button = ({calltoaction, onClick})=> {
    return (
        <button onClick={onClick} className="buttonStyle"> {calltoaction}</button>
    )

}
export default button;