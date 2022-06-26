import React from 'react';
import Form from './Form';

const Contact = () => {

  return (
    <>
      <div className="bg-gradient-to-r from-darkBlue to-bgBlue700 w-full h-full">
        <div className="flex flex-col p-2 md:">
          <div className="block p-2">
            <h1 className="text-bgBlue700 text-center">let work together </h1>
            <p className="text-lightCream max-w-1/2 mx-auto text-center">
              We'd love to hear from you. send us a message via form or email
              us. you can also send us message via whatsapp
            </p>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;