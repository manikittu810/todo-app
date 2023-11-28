import  FirstComponent from './FirstComponent';
import  ThirdComponent from './ThirdComponent'
import  SecondComponent from './SecondComponent'
import  FourthComponent from './FourthComponent'
// import  FifthComponent from './FirstComponent'
import  {FifthComponent} from './FirstComponent'


export default function LearningComponents() {
    return (
      <div className="learning-Component">
        My Todo Application
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
      </div>
    );
  }
  
