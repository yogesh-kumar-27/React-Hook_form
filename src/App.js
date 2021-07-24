import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onError = (errors)=>{
    console.log(errors)
  }
  return (
    <div className="App">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-4 offset-4">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="text-center text-danger">Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  <div className="form-group">
                    <label className="col-form-label">Name:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name && "invalid"}`}
                      {...register("name", { required: "Name is Required" 
                    })}
                      onKeyUp={() => {
                        trigger("name");
                      }}
                    />
                    {errors.name && (
                      <small className="text-danger">
                        {errors.name.message}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Age:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.age && "invalid"}`}
                      {...register("age", {
                        required: "Age is Required",
                        min: {
                          value: 13,
                          message: "Minimum Required age is 13",
                        },
                        max: {
                          value: 65,
                          message: "Maximum allowed age is 65",
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numbers are allowed",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("age");
                      }}
                    />
                    {errors.age && (
                      <small className="text-danger">
                        {errors.age.message}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Email:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.email && "invalid"}`}
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Phone:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.phone && "invalid"}`}
                      {...register("phone", {
                        required: "Phone is Required",
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: "Invalid phone no",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("phone");
                      }}
                    />
                    {errors.phone && (
                      <small className="text-danger">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password:</label>
                    <input
                    type="password"
                      className={`form-control ${errors.message && "invalid"}`}
                      {...register("password", {
                        required: "Message is Required",
                        minLength: {
                          value: 8,
                          message: "Minimum Required length is 8",
                        },
                        maxLength: {
                          value: 15,
                          message: "Maximum allowed length is 15 ",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("password");
                      }}
                    />
                    {errors.password && (
                      <small className="text-danger">
                        {errors.password.message}
                      </small>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary my-3"
                    value="Send message"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
