import "./button3.scss"
type Button3Props = {
  hasIcon?: boolean;
}

export default function Button3({hasIcon = false} :Button3Props) {
  return (
    <div>
  <button className={`Button3 ${hasIcon ? "hasIcon" : ""}`}>Hover me!</button>
    </div>
  )
}
