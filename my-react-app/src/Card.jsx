import ProfilePic from './assets/1ruFA.jpg'


function Card(){
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture" width="96" height="96"></img>
            <h2 className="card-title">John Doe</h2>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident officia temporibus culpa. Aliquid, asperiores, tempora consequatur atque minima at, vel in autem optio recusandae doloribus repudiandae nesciunt odit architecto ea.</p>
        </div>
    );
}



export default Card