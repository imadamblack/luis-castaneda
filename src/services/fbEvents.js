export default function fbEvent(
  eventName,
  userData = {
    phone: '',
    email: '',
    externalID: ''
  },
  eventID = Date.now(),
  clientData = {}
) {
  const standardEvents = ['PageView', 'Purchase', 'Lead', 'InitiateCheckout'];
  const isStandard = standardEvents.includes(eventName);

  try {
    if (typeof fbq !== 'undefined') {
      if (isStandard) {
        fbq('track', eventName, clientData);
      } else {
        fbq('trackCustom', eventName, clientData);
      }
    }
  } catch (err) {
    console.error('fbq error:', err);
  }

  const payload = JSON.stringify({
    eventName,
    eventID,
    user: {
      ph: userData.phone,
      em: userData.email,
      externalID: userData.externalID
    },
    clientData
  });

  return fetch(`/api/fb-event`, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).catch(err => console.log(err));
}
