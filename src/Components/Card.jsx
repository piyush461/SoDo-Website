// eslint-disable-next-line react/prop-types
const Card = ({children}) => {
  return (
    <div className="coverCard rounded-2xl max-md:h-fit w-auto inline-block " >
        {children}
    </div>
  )
}

export default Card