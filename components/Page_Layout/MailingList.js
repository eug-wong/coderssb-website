import { useState, useEffect } from "react";
import { useMailChimpForm } from "use-mailchimp-form";

const useFormFields = initialState => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
};

export default function MailingList() {
  const url =
    "https://facebook.us4.list-manage.com/subscribe/post?u=a4c5aea99f7cb23b39e5f7c55&amp;id=33418f55d4";
  const { status, message, handleSubmit } = useMailChimpForm(url);
  const [params, handleFieldChange] = useFormFields({
    EMAIL: ""
  });

  useEffect(() => {
    var btn = document.getElementById("MailchimpSubmitBtn");
    if (status.loading) {
      btn.innerHTML = "Adding to Mailing List ...";
      btn.disabled = true;
    } else if (status.error) {
      btn.innerHTML = "Err adding to Mailing List";
    } else if (status.success) {
      btn.innerHTML = "Added to Mailing List";
      btn.disabled = true;
    }
  }, [status]);

  return (
    <div id="contact">
      <h1>Join Our Mailing List</h1>
      <form onSubmit={event => handleSubmit(event, params)}>
        <p>
          In order to stay up to date with CodersSB's company events, technical
          workshops, and networking events, make sure to join our mailing list!
          You wouldn't want to miss out any important information!
        </p>
        <input
          className="w3-input w3-padding-16"
          id="EMAIL"
          autoFocus
          type="email"
          value={params.EMAIL}
          placeholder="your_email@gmail.com"
          onChange={handleFieldChange}
        />
        <button
          id="MailchimpSubmitBtn"
          className="w3-button w3-light-grey w3-section"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
