
import { Component , useEffect} from "react";


class SignupPage  extends Component {
    state = {
        disabled: true,
        password: '',
        passwordRepeat: ''
    };
     
    onChangePassword =(e) => {

        const currentValue = e.target.value;

        this.setState({password: currentValue,
            disabled: currentValue === this.state.passwordRepeat?false: true
            
        });
        console.log(this.state.disabled);
      }

      onChangePasswordRepeat=(e) => {
        const currentValue = e.target.value;

        this.setState({passwordRepeat: currentValue,
        
        disabled: currentValue === this.state.password ?false:true
    })
      }

    render() {
        
        return(
            <div>
                <h1>Sign Up</h1>
                <label htmlFor="Username">Username</label>
                <input  id="Username"/>
                <label htmlFor="Email">Email</label>
                <input id="Email"/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" onChange ={this.onChangePassword}/>
                <label htmlFor="repeatPassword">Password Repeat</label>
                <input id="repeatPassword" type="password" name="repeatPassword" onChange ={this.onChangePasswordRepeat}/>

                <button disabled ={this.state.disabled} >Sign Up</button>
            </div>
            
            )
    }    
}

export default SignupPage;