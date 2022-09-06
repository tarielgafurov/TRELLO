import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { todoActions } from "../../store/slice/todoSlice";
import { uiActions } from "../../store/slice/uiSlice";
import RegistrImg from "./RegistrImg";

const RegistrPageSection = () => {
  let isLoaded = useSelector((state) => state.todo.isLoaded);
  const history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("");

  const dispatch = useDispatch();

  function inpHand(e) {
    setName(e.target.value);
  }
  function inpPass(e) {
    setPassword(e.target.value);
  }

  let validation;
  if (password.length > 0 && password.length < 5) {
    validation = <span>length != 0</span>;
  }
  if (name.length > 0 && name.length < 5) {
    validation = <span>length +5</span>;
  }

  useEffect(() => {
    dispatch(todoActions.validation({ name, password }));
  }, [name, password]);

  function subDataHandler(e) {
    e.preventDefault();
    setPassword("");
    setName("");

    let a = <Valid>-Wrong login/password.</Valid>;
    if (!isLoaded) {
      setIsValid(a);
    } else {
        dispatch(uiActions.valid())
      history.push("/bodytrello");
    }
  }

  return (
    <SectionPage>
      <div className="section-wrap">
        <h3>Вход в Trello</h3>
        {isValid}
        <form onSubmit={subDataHandler} className="secont-div">
          <input
            value={name}
            onChange={inpHand}
            placeholder="Укажите адрес электронной почты"
          ></input>
          {validation}
          <input
            value={password}
            onChange={inpPass}
            placeholder="Введите пароль"
          ></input>
          <button type="submit" className="form-btn">
            Войти
          </button>
        </form>
        <p>ИЛИ</p>
        <RegistrImg />
        <a className="vhod-pomosh" href="#">
          Вход с помощью SSO
        </a>
        <hr />
        <div className="hrefa">
          <a href="#">Не удается войти? </a>
          <a href="#">
            <ul>
              <li>Зарегистрировать аккаунт</li>
            </ul>
          </a>
        </div>
      </div>
    </SectionPage>
  );
};
export default RegistrPageSection;

export const SectionPage = styled.section`
  & input {
    padding: 12px;
    margin-bottom: 14px;
    border-radius: 4px;
    border: 2px solid grey;
  }
  & input:hover {
    border: 2px solid blue;
  }
  .form-btn {
    padding: 6px;
    font-weight: 800;
    width: 100%;
    background: #5aac44;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  .form-btn:hover {
    background-color: rgb(123, 235, 132);
  }
  .section-wrap {
    padding-top: 6px;
    margin: auto;
    width: 400px;
    height: 546px;
    box-shadow: 0px 0px 4px 0.9px grey;
    background-color: white;

    & h3 {
      color: rgb(88, 86, 86);
    }
  }
  .secont-div {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 340px;
    font-size: 12px;
  }

  & a {
    font-size: 12px;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }

  .hrefa {
    margin: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 74%;
    justify-content: space-between;
  }
  & hr {
    margin-top: 30px;
    width: 340px;
  }
  & span {
    margin: -10px 0px 6px 0px;
    color: red;
  }
  @media (max-width: 700px) {
  }
`;
const Valid = styled.p`
  color: red;
  margin-top: 6px;
`;
const hiberA = styled.a``;
