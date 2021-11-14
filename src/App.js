import Profile from './Profile/Profile.js';
import './App.css';

function App() {
  const name = "Kays Ben Barka"
  const biog = "BIO:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  const job = "full stack js devolopper"
  const  msg= () => alert(name)
   
    return (
  
      <div className="App">
        <Profile fullname={name}  bio={biog} profession={job} message={msg} />
        <img src="ProfilPhoto.jpg" alt='me'width="400" />
      </div>
    );
}

export default App;
