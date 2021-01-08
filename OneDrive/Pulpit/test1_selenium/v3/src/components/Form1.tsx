import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserInfo }  from './../UserInfo'
import { RootState } from './../reducers/rootReducer'
import {useSelector, useDispatch} from 'react-redux'
import allActions from './../actions/AllActions'

const Form1 = () => {
  const currentUser = useSelector((state:RootState) => state.currentUser);
  const dispatch = useDispatch();

  const emailInfo = () => {
    alert(currentUser.user[0].email);
  }


/*  async function test(){
  var result:UserInfo[] = await serverActions.getAllUsers();
  console.log(result);
  return result;
}*/

  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
      pass: Yup.string()
          .required('Please Enter your password')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
            "Password must contain at least 5 Characters, one uppercase, one lowercase, one number and one special case character"),
     }),

    onSubmit: values => {
      formik.resetForm({});
    },

  });

const user:UserInfo[]=[{email:formik.values.email, pass:formik.values.pass, id:0}];

if(currentUser.loggedIn) {
  return (
        <form onSubmit={formik.handleSubmit} id="Form1" className="Form1">
          <label htmlFor="email">Email</label>
            <input
              id="emails"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            <label htmlFor="pass"> Password</label>
              <input
                id="passwords"
                name="pass"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pass}
              />
                {formik.touched.pass && formik.errors.pass ? (
                  <div>{formik.errors.pass}</div>
                ) : null}
            <div className="form-group">
                <input type="submit" value="Logout" id="buttonLogout" onClick={() => dispatch(allActions.userActions.logOut())} />
            </div>
            <div>
              <div id="emailInfo" onClick={emailInfo}>click to see your email</div>
            </div>
        </ form>
   );
 }else{
     return(
       <form onSubmit={formik.handleSubmit} id="Form1" className="Form1">
         <label htmlFor="email">Email</label>
           <input
             id="emails"
             name="email"
             type="text"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}
           />
             {formik.touched.email && formik.errors.email ? (
               <div>{formik.errors.email}</div>
             ) : null}
           <label htmlFor="pass"> Password</label>
             <input
               id="passwords"
               name="pass"
               type="password"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.pass}
             />
               {formik.touched.pass && formik.errors.pass ? (
                 <div>{formik.errors.pass}</div>
               ) : null}
           <div className="form-group">
                 <input type="button" value="Login" id="buttonLogin" onClick={() => dispatch(allActions.userActions.logIn(user,formik.errors))} />
               <input type="button" value="Register" id="buttonRegister" onClick={() => dispatch(allActions.userActions.addUser(user,formik.errors))} />
           </div>
       </ form>
     );
   }
}
export default Form1;
