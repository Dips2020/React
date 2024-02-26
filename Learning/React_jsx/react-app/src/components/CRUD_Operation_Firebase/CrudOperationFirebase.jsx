//
import { database, ref, set, update, onValue } from "./config/firebase";
import { useState } from "react";

const CrudOperationFirebase = () => {
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState("");
  const [fetchedUserList, setFetchedUserList] = useState([]); // set empty [] array because data is in object

  const handleChange = (event) => {
    //? old data "...userData"
    //* [event.target.name]: -> name attribute from input field -> name="name", name="address"
    //* event.target.value -> instance change
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  // //! ======== inserting part ---- set
  const insertUser = () => {
    setStatus("Inserting to DB...");

    // code copied from firebase doc --> Build -> Realtime Database -> Web -> Read and Write Data
    // set(ref(database, "users/" + userId), {
    set(ref(database, "users/" + Date.now()), {
      //   username: name,
      //   email: email,
      //   profile_picture: imageUrl,
      ...userData,
    }).then((error) => {
      //* print in console
      //   if (error) console.log("Error occurred during insertion to DB");
      //   else console.log("Successfully inserted to DB");

      //* print in division
      if (error) setStatus("Error occurred during insertion to DB");
      else setStatus("Successfully inserted to DB");
    });
  };

  // //! ======== updating part ---- update
  const updateUser = () => {
    setStatus("Updating...");
    update(ref(database, "users/" + userData.UserID), {
      ...userData,
    }).then((error) => {
      if (error) setStatus("Error occurred during updating to DB.");
      else setStatus("Successfully updated to DB.");
    });
  };

  //! ======== deleting part ---- set(), update() or remove()
  const deleteUser = () => {
    setStatus("Deleting...");
    //* setting null to delete with UserID only so, from input filed name and address part is commented for reference
    set(ref(database, "users/" + userData.UserID), null).then((error) => {
      if (error) setStatus("Error occurred during deletion to DB.");
      else setStatus("Successfully deleted to DB.");
    });
  };

  //! ======== fetching part ---- onValue
  const fetchUsers = () => {
    let _data = [];
    setStatus("Fetching user list...");
    //* setting null to delete with UserID only so, from input filed name and address part is commented for reference
    onValue(ref(database, "users"), (DataSnapshot) => {
      // console.log(DataSnapshot);
      console.log(DataSnapshot.val()); //? ---------> .val()
      if (DataSnapshot) {
        let _userList = DataSnapshot.val();
        //* for in loop
        for (let i in _userList) {
          console.log(_userList[i]);
          _data.push(_userList[i]);
        }
        //* Can't set hook inside loop so, pushing data into _data
        setFetchedUserList(_data);
        setStatus("Data fetched successfully.");
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault(); //! event.preventDefault(); -> it will stop to refresh when submitting form
        }}
        autoComplete="off"
      >
        <br />
        <h6>
          <b>To insert just type in name and address field to insert.</b>
        </h6>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={(event) => handleChange(event)}
        />
        {/* //! Insert Button */}
        <button type="submit" onClick={insertUser}>
          Insert User
        </button>
        <br />
        <h6>
          <b>
            For updating copying id from Firebase DB and change name and address
            field. (UserID, name, address)
          </b>
        </h6>
        {/* //! Update Button */}
        <button type="submit" onClick={updateUser}>
          Update User
        </button>
        <br />
        <h6>
          <b>
            To delete taking UserID only from firebase db ---- for reference
            only.
          </b>
        </h6>
        <input
          type="number"
          name="UserID"
          placeholder="User ID"
          onChange={(event) => handleChange(event)}
        />
        {/* //! Delete Button */}
        <button type="submit" onClick={deleteUser}>
          Delete User
        </button>
        <br />
        <h6>
          <b>Fetched data</b>
        </h6>
        {fetchedUserList.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "4px",
                border: "2px dashed blue",
                marginTop: "6px",
              }}
            >
              <b style={{ color: "red " }}>
                Name: {data.name} <br />
                Address: {data.address}
              </b>
            </div>
          );
        })}
        {/* //! Fetching Button */}
        <button type="submit" onClick={fetchUsers}>
          Fetch Users
        </button>
      </form>
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      <div
        style={{
          height: "20px",
          width: "100vw",
          backgroundColor: "blue",
          color: "white",
          textAlign: "center",
          position: "fixed",
          bottom: "0px",
          left: "0px",
        }}
      >
        <b>{status}</b>
      </div>
    </div>
  );
};

export default CrudOperationFirebase;
