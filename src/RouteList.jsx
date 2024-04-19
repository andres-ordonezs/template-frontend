import {Route, Routes, Navigate} from "react-router-dom";

import HomePage from "./HomePage";
import NewPropertyForm from "./NewPropertyForm";
import PropertyDetail from "./PropertyDetail";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/**
 * Routes list
 *
 * Props: None
 *
 * State: None
 *
 * App -> RoutesList -> PropertiesList
 */
function RoutesList({
  newProperty,
  uploadImage,
  searchProperty,
  signup,
  login,
  booking,
  addBooking,
}) {
  // const {currentUser} = useContext(userContext);

  //   function renderForHosts() {
  //     return (
  //       <>
  //         <Route element={<CompaniesList />} path="/companies" />
  //         <Route element={<JobsList />} path="/jobs" />
  //         <Route element={<CompanyDetails />} path="/companies/:name" />
  //         <Route element={<ProfileForm />} path="/profile" />
  //       </>
  //     );
  //   }

  //   function renderForUsers() {
  //     return (
  //       <>
  //         <Route element={<CompaniesList />} path="/companies" />
  //         <Route element={<JobsList />} path="/jobs" />
  //         <Route element={<CompanyDetails />} path="/companies/:name" />
  //         <Route element={<ProfileForm />} path="/profile" />
  //       </>
  //     );
  //   }
  return (
    <div>
      <Routes>
        <Route element={<SignupForm signup={signup} />} path={"/signup"} />
        <Route element={<LoginForm login={login} />} path={"/login"} />
        <Route
          element={<HomePage searchProperty={searchProperty} />}
          path="/"
        />
        <Route
          element={
            <NewPropertyForm
              newProperty={newProperty}
              uploadImage={uploadImage}
            />
          }
          path="/NewPropertyForm"
        />
        <Route
          element={<PropertyDetail booking={booking} addBooking={addBooking} />}
          path="/propertyDetail/:id"
        />

        {/* {!currentUser.user ? renderForNonLoggedUsers() : renderForLoggedUsers()} */}

        <Route element={<HomePage searhProperty={searchProperty} />} path="*" />
      </Routes>
    </div>
  );
}

export default RoutesList;
