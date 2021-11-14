
import PropTypes from "prop-types";
const Profile = ({fullname,profession,bio,message}) => {
    return (
        <div>
            <h1>{fullname}</h1><br/>
            <h3>{profession}</h3><br/>
            <h4>{bio}</h4><br/>
            <button onClick = {message} style={{backgroundColor:'Black',color:'white',border:'none', padding:'8px 20px'}}>it's me</button><br/>
            <br/>
        </div>
    )
}
Profile.defaultProps={age:29}
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    age: PropTypes.number,
    message: PropTypes.func
   };
  export default Profile