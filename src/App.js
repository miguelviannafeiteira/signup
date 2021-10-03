import './App.css';
import Input from './Input';
import useForm from './useForm';

function App() {
  const email = useForm('email');
  const nome = useForm('nome');
  const sobrenome = useForm('sobrenome');
  const senha = useForm('senha');
  console.log(senha.value);

  return (
    <div className="container">
      <div className="info">
        <h2>
          Learn to code by <br /> watching others
        </h2>
        <p>
          See how experienced developers solve problems in real-time. <br />{' '}
          Watching scripted tutorials is great, but understanding how <br />{' '}
          developers thing is invaluable.
        </p>
      </div>
      <form className="formulario">
        <div className="teste">
          <a href="#">
            {' '}
            <b>Try it free 7 days</b> then $20/mo.thereafter
          </a>
        </div>
        <Input name="First Name" type="text" {...nome} />
        <Input name="Last Name" type="text" {...sobrenome} />
        <Input name="E-mail" type="text" {...email} />
        <Input name="Password" type="password" {...senha} />
        <button className="btn">CLAIM YOUR FREE TRIAL</button>
        <div class="terms">
          <p>By clicking the button you are agreeing to our</p>
          <a href="#">Terms and Services</a>
        </div>
      </form>
    </div>
  );
}

export default App;
