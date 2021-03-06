import React from 'react';

    const PersonList = ({ contacts }) => {
      return (
        <div>
          <h1>Contact List</h1>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.message}</h5>
                {/* <p class="card-text">{contact.address.geo.lat}</p> */}

              </div>
            </div>
          ))}
        </div>
      )
    };

    export default PersonList