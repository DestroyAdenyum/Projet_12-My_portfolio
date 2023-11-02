
function Achievement() {
    return (
        <article className='card flex-row open'>
            {/* <img src='http://i.harperapps.com/covers/9780008108298/y450-293.jpg' class='book'> */}
            <div className='flex-column info'>
                <div className='title'>The Fellowship of the Ring</div>
                <div className='skills'>J.R.R. Tolkien</div>
                <div className='hidden bottom summary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.
                </div>
            </div>
            <div className='flex-column group'>
                <div className='members'>
                    <span className='current'>14</span> /
                    <span className='max'>30</span>
                </div>
                <div className='hidden bottom'>
                    <button className='simple'>Join</button>
                </div>
            </div>
        </article>
    );
}

export default Achievement;
