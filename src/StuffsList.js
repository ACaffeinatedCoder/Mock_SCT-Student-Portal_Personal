const StuffsList = (props) => {
    const stuffs = props.stuffs

    return (
        <div className="bloglist">
            <div>
                {stuffs.map((stuff) => (
                <div className="blog-preview" key={stuff.id}>
                    <h2>{stuff.type}:</h2>
                    <h3>{stuff.name}</h3>
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default StuffsList;