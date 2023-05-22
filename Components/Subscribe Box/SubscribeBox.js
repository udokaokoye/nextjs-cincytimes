import React, {useState} from "react";
import { useRouter } from "next/dist/client/router";
import LineBreaker from "../Line Breaker/LineBreaker";

const SubscribeBox = () => {
  const [subscribeEmail, setsubscribeEmail] = useState('')
  const router = useRouter()

  const addSubscription = () => {
    const formData = new FormData;
    if (subscribeEmail == '') {
      alert("Please Enter Email.")
      return;
    }
    formData.append('email', subscribeEmail)

    fetch('https://api.thecincinnatitimes.com/add_subscription.php', {
      method: 'POST',
      body: formData
    }).then((res) => res.json()).then((data) => {
      if (data !== 'SUCCESS') {
        alert("Failed: Please Try Creating An Account");
        router.push('/auth');
      } else {
        alert("Subscription Added")
      }
    })
  }
  return (
    <div className="right_bar_subscribe">
      <h3>Subscribe to Newsletter{" >>"} </h3>
      <LineBreaker />
      <p className="subscribe_intro">
        Get the best of The Cincinnati Times delivered to your inbox daily
      </p>

      <input
        type="email"
        className="right_bar_subscribe_input"
        placeholder="Enter email address"
        onChange={(e) => setsubscribeEmail(e.target.value)}
      />
      <button onClick={() => addSubscription()} className="right_bar_subscribe_btn">SUBSCRIBE</button>
    </div>
  );
};

export default SubscribeBox;
