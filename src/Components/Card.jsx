// eslint-disable-next-line react/prop-types
const Card = ({children}) => {
  return (
    <div className="coverCard rounded-2xl inline-block " >
        {children}
    </div>
  )
}

export default Card