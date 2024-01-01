import React,{useState} from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import "./styles.scss";

const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [description,setDescription] = useState("");
  const [focus,setFocus] = useState({name: false,email: false,description: false})

  const onChangeHandler = (event,type) => {
    console.log("what-value :::",event.target.value,type);
    if(type === "name")
    setName(event.target.value);
  if(type === "email")
  setEmail(event.target.value)
if(type === "description")
setDescription(event.target.value);
 };

 const controlFocus = (type) => {
   if(type === "name"){
    setFocus(v => ({...v,name:true}))
   }
   if(type === "email"){
    setFocus(v => ({...v,email:true}))
   }
   if(type === "description"){
    setFocus(v => ({...v,description:true}))
  }
 }

 const controlBlur = (type) => {
  if(type === "name"){
    setFocus(v => ({...v,name:false}))
  }
  if(type === "email"){
    setFocus(v => ({...v,email:false}))
  }
  if(type === "description"){
    setFocus(v => ({...v,description:false}))
  }
 }


  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            <div className="nameWrapper">
              <input required name="name" className="inputName" type="text" value={name} onFocus={() => controlFocus("name")} onBlur={() => controlBlur("name")}  onChange={(e) => onChangeHandler(e,"name")}/>
              <label htmlFor="name" className={name || focus.name ? "namelabel after_label" : "namelabel"}>
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input name="email" className="inputEmail" type="text" value={email} onFocus={() => controlFocus("email")} onBlur={() => controlBlur("email")} onChange={(e) => onChangeHandler(e,"email")} />
              <label htmlFor="email" className={email || focus.email ?"emaillabel after_label" : "emaillabel"}>
                Email
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                name="description"
                className="inputDescription"
                type="text"
                rows={"5"}
                style={{ resize: "nonw" }}
                value={description}
                onChange={(e) => onChangeHandler(e,"description")}
                onFocus={() => controlFocus("description")} onBlur={() => controlBlur("description")}
              />
              <label htmlFor="description" className={description || focus.description ? "descriptionlabel after_label" : "descriptionlabel"}>
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
