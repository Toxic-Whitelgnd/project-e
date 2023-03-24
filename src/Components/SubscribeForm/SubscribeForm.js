import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const SubscribeForm = () => {

  const url = "https://us17.list-manage.com/contact-form?u=28efaad6904d6c27267cef4c7&form_id=9a7b3b5b7362ca3633465b2aed996842";

  return (
    <div>
      <MailchimpSubscribe url={url}/>
    </div>
  )
}

export default SubscribeForm
