import './App.css';

import { Post } from './components/post/post'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="">
          <Post 
            title="Quantum Pacman"
            author="Omer Ali Malik"
            date="29 February 2020"
            url="https://www.youtube.com/watch?v=LMagNcngvcU&ab_channel=JavaScriptMastery"
            description="This is a game that uses quantum circuits and qauntum game theory to simulate pacman in an entangled state instance. Winners and losers are just predicted"
            card={false}
          />
          {/* <Post 
            title="Quantum Pacman"
            author="Omer Ali Malik"
            date="29 February 2020"
            url="https://www.youtube.com/watch?v=LMagNcngvcU&ab_channel=JavaScriptMastery"
            description="This is a game that uses quantum circuits and qauntum game theory to simulate pacman in an entangled state instance. Winners and losers are just predicted"
            card={false}
          /> */}
      </div>
  );
}

export default App;
