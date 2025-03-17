// eslint-disable-next-line react/prop-types
const Card = ({children}) => {
  return (
    <div className="coverCard rounded-2xl max-md:h-fit max-md:w-[100%] " >
        {children}
    </div>
  )
}

export default Card