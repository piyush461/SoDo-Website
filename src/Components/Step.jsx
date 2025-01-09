import Heading from './Heading'

const Step = (props) => {
  return (
    <div className='h-auto '>
        <h4 className='font-roboto text-xs tracking-tighter '>{props.stepno}</h4>
        <Heading head={props.head} />
        <h3 className='font-roboto text-lg'>{props.desc}</h3>
    </div>
  )
}

export default Step