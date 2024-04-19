import {Route, Routes, Navigate} from "react-router-dom";

import HomePage from "./HomePage";
import NewPropertyForm from "./NewPropertyForm";

/**
 * Routes list
 *
 * Props: None
 *
 * State: None
 *
 * App -> RoutesList -> PropertiesList
 */
function RoutesList({newProperty}) {
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
        <Route element={<HomePage />} path="/" />
        <Route
          element={<NewPropertyForm newProperty={newProperty} />}
          path="/NewPropertyForm"
        />

        {/* {!currentUser.user ? renderForNonLoggedUsers() : renderForLoggedUsers()} */}

        <Route element={<HomePage />} path="*" />
      </Routes>
    </div>
  );
}

export default RoutesList;
