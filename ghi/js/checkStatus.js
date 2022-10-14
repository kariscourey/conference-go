const getCookie = async (name) => {
    const cookie = await cookieStore.get(name);
    if (cookie) {
        return cookie;
    }
    else {
        console.log('cookie not found');
    }
  }

// Get the cookie out of the cookie store
const payloadCookie = await getCookie('jwt_access_payload'); //.get('jwt_access_payload'); // FINISH THIS
// console.log(payloadCookie);

if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
  const encodedPayload = JSON.parse(payloadCookie.value);
//   console.log(encodedPayload);

  // Convert the encoded payload from base64 to normal string
  const decodedPayload = atob(encodedPayload) // FINISH THIS
//   console.log(decodedPayload);

  // The payload is a JSON-formatted string, so parse it
  const payload = JSON.parse(decodedPayload) // FINISH THIS

  // Print the payload
//   console.log(payload);

// //   Check if "events.add_conference" is in the permissions.
// //   If it is, remove 'd-none' from the link
    if (payload.user.perms['events.add_conference']) {
        var new_conf = document.getElementById("new_conf");
        var new_pres = document.getElementById("new_pres");
        new_conf.classList.remove("d-none");
        new_pres.classList.remove("d-none");
    }


// //   Check if "events.add_location" is in the permissions.
// //   If it is, remove 'd-none' from the link
    if (payload.user.perms['events.add_location']) {
        var new_loc = document.getElementById("new_loc");
        new_loc.classList.remove("d-none");
    }
}
