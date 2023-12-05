import './TodoApp.css';

export default function TodoApp(){
    return(
        <>
        <div className="TodoApp">
        <LoginComponent />
        {/* <WelcomeComponent /> */}
        </div>
        </>
    );
}

function LoginComponent(){
    return(
        <div className="Login">
           <div className="LoginForm">
            <div>
                <labe>username </labe>
                <input type="text" name="username"></input>
            </div>
            <div>
                <labe>Password </labe>
                <input type="password" name="password"></input>
            </div>
            <button type="button" name="login">login</button>
           </div>
        </div>
    );
}

function WelcomeComponent(){
    return(
        <div className="Wecome">Welcome component</div>
    );
}