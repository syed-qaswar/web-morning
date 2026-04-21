// creating a component
function Card(props){
    return(
        <div className={props.style}>
            <img src="" alt="" />
            <div>
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <p>{props.desc}</p>
                <button>Explore More</button>
            </div>
        </div>
    )
    // {title: 'Web development', desc='value'}
}

export default Card