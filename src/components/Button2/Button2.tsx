import "./Button2.scss"
type ButtonProps = {
  bgColor: string;
}
export default function Button2({bgColor} : Readonly<ButtonProps> ) {
  const styleObjekt = {
    backgroundColor: bgColor,
    borderRadius: "30px",
  }
  return (
    <div>
      <button style={styleObjekt}>Static Button</button>
      </div>
  )
}
